import { Injectable } from '@angular/core';
import { GroupVM } from '@app/models/view-models';
import { GroupsService } from '@core/services';
import { Action, Selector, State, StateContext } from '@ngxs/store';
import {
    AddGroup,
    StartCreatingGroups,
    StartGettingGroups,
} from './group.actions';
import { finalize, take, tap } from 'rxjs';
import { NgxSpinnerService } from 'ngx-spinner';

export interface GroupStateModel {
    groups: GroupVM[];
}

const defaultState: GroupStateModel = {
    groups: [],
};

@State<GroupStateModel>({
    name: 'group',
    defaults: defaultState,
})
@Injectable()
export class GroupState {
    @Selector()
    static groups(state: GroupStateModel) {
        return state.groups;
    }

    constructor(
        private _groupService: GroupsService,
        private _spinner: NgxSpinnerService
    ) {}

    @Action(StartGettingGroups)
    startGettingGroups(
        ctx: StateContext<GroupStateModel>,
        { name }: StartGettingGroups
    ) {
        this._spinner.show('groups');
        return this._groupService.getGroups(name).pipe(
            take(1),
            finalize(() => this._spinner.hide('groups')),
            tap({
                next(res) {
                    ctx.patchState({ groups: res });
                },
            })
        );
    }

    @Action(StartCreatingGroups)
    startCreatingGroups(
        ctx: StateContext<GroupStateModel>,
        { body }: StartCreatingGroups
    ) {
        this._spinner.show('newGroup');
        return this._groupService.createGroup(body).pipe(
            take(1),
            finalize(() => this._spinner.hide('newGroup')),
            tap({
                next(res) {
                    ctx.dispatch(new AddGroup(res));
                },
            })
        );
    }

    @Action(AddGroup)
    addGroup(ctx: StateContext<GroupStateModel>, { group }: AddGroup) {
        ctx.patchState({
            groups: [...ctx.getState().groups, group],
        });
    }
}
