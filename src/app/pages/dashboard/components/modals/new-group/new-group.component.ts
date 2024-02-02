import { Component, EventEmitter, OnInit, Output, inject } from '@angular/core';
import { FormArray, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AppState } from '@core/state';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { Store } from '@ngxs/store';

@Component({
    selector: 'app-new-group',
    templateUrl: './new-group.component.html',
    styleUrls: ['./new-group.component.css'],
})
export class NewGroupComponent {
    private _fb = inject(FormBuilder);

    private store = inject(Store);

    private modalService = inject(NgbModal);

    currentEmail$ = this.store.select(AppState.email);

    get emails() {
        return this.form.get('emails') as FormArray;
    }

    form: FormGroup = this._fb.group({
        name: ['', Validators.required],
        description: [''],
        emails: this._fb.array([]),
    });

    ngOnInit(): void {
        this.addEmailInput();
    }

    addEmailInput() {
        this.emails.push(
            this._fb.control('', [Validators.required, Validators.email])
        );
    }

    removeEmail(index: number) {
        this.emails.removeAt(index);
    }

    onSubmit() {
        console.log(this.form.value);
    }

    dismiss() {
        this.modalService.dismissAll();
    }
}
