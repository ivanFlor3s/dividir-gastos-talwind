import {
    Directive,
    ElementRef,
    OnDestroy,
    OnInit,
    Optional,
    Self,
} from '@angular/core';
import { FormGroup, FormGroupDirective } from '@angular/forms';
import { fromEvent, shareReplay, Subscription } from 'rxjs';

const markAllControls = (form: FormGroup) => {
    Object.keys(form.controls).forEach((k) => {
        const control = form.get(k);
        control?.markAsTouched();
        control?.updateValueAndValidity();
    });
};

@Directive({
    // eslint-disable-next-line @angular-eslint/directive-selector
    selector: '[formGroup]',
})
export class FormSubmitDirective implements OnInit, OnDestroy {
    submitSub!: Subscription;
    submit$ = fromEvent(this.element, 'submit').pipe(shareReplay(1));

    get element() {
        return this.host.nativeElement;
    }
    constructor(
        private host: ElementRef<HTMLFormElement>,
        @Self() private fd: FormGroupDirective
    ) {}

    ngOnInit(): void {
        // eslint-disable-next-line @typescript-eslint/no-unused-vars
        this.submitSub = this.submit$.subscribe((_) => {
            markAllControls(this.fd.form);
        });
    }

    ngOnDestroy(): void {
        this.submitSub?.unsubscribe();
    }
}
