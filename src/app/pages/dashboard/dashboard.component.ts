import { Component, inject } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { AgregarGastoComponent } from './components';
import { Select, Store } from '@ngxs/store';
import { GroupState, StartGettingGroups } from '@core/state';
import { GroupVM } from '@app/models/view-models';
import { Observable } from 'rxjs';

@Component({
    selector: 'app-dashboard',
    templateUrl: './dashboard.component.html',
    styleUrls: ['./dashboard.component.scss'],
})
export class DashboardComponent {
    @Select(GroupState.groups) groups$: Observable<GroupVM[]>;

    private _store = inject(Store);

    constructor(private modalService: NgbModal) {
        this._store.dispatch(new StartGettingGroups(''));
    }

    openModal() {
        this.modalService.open(AgregarGastoComponent, {});
    }
    saludar() {
        alert('QWUIRWAFSAK');
    }
}
