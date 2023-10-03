import { Injectable } from '@angular/core';
import { GroupVM } from '@app/models/view-models';
import { GroupsService } from '@core/services';
import { Action, State, StateContext } from '@ngxs/store';
import { StartGettingGroups } from './group.actions';
import { tap } from 'rxjs';

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
    constructor(private _groupService: GroupsService) {}
    @Action(StartGettingGroups)
    startGettingGroups(
        ctx: StateContext<GroupStateModel>,
        { name }: StartGettingGroups
    ) {
        return this._groupService.getGroups(name).pipe(
            tap({
                next(res) {
                    ctx.patchState({ groups: res });
                },
            })
        );
    }
}
