import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { GettingGroupError, GroupState, StartGettingGroup } from '@core/state';
import { Select, Store } from '@ngxs/store';
import { Observable } from 'rxjs';

@Component({
    selector: 'app-group-container',
    templateUrl: './group-container.component.html',
    styleUrls: ['./group-container.component.css'],
})
export class GroupContainerComponent implements OnInit {
    @Select(GroupState.error) error$: Observable<GettingGroupError>;

    constructor(private store: Store, private activatedRoute: ActivatedRoute) {
        const { idGroup } = this.activatedRoute.snapshot.params;
        console.log(idGroup);

        this.store.dispatch(new StartGettingGroup(idGroup));
    }

    ngOnInit() {}
}
