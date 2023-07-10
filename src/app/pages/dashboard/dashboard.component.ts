import { Component } from '@angular/core';
import {
    ModalDismissReasons,
    NgbDatepickerModule,
    NgbModal,
} from '@ng-bootstrap/ng-bootstrap';
import { AgregarGastoComponent } from './components';

@Component({
    selector: 'app-dashboard',
    templateUrl: './dashboard.component.html',
    styleUrls: ['./dashboard.component.scss'],
})
export class DashboardComponent {
    constructor(private modalService: NgbModal) {}
    openModal() {
        this.modalService.open(AgregarGastoComponent, {});
    }
    saludar() {
        alert('QWUIRWAFSAK');
    }
}
