import { Component } from '@angular/core';
import {
    ModalDismissReasons,
    NgbDatepickerModule,
    NgbModal,
} from '@ng-bootstrap/ng-bootstrap';

@Component({
    selector: 'app-dashboard',
    templateUrl: './dashboard.component.html',
    styleUrls: ['./dashboard.component.scss'],
})
export class DashboardComponent {
    constructor(private modalService: NgbModal) {}
    openModal() {
        this.modalService.open('Hola');
    }
}
