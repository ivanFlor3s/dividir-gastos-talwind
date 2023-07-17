import {
    AfterContentInit,
    ComponentRef,
    Directive,
    ElementRef,
    Host,
    Injector,
    OnDestroy,
    Optional,
    Self,
    ViewContainerRef,
} from '@angular/core';
import { NgControl } from '@angular/forms';
import { ValidationErrorMsgeService } from './services/error-validation-msge.service';
import { Subscription } from 'rxjs';
import { FormControlErrorComponent } from './form-control-error/form-control-error.component';

@Directive({
    // eslint-disable-next-line @angular-eslint/directive-selector
    selector: '[formControlName]',
})
export class ValidationMsgeDirective implements AfterContentInit, OnDestroy {
    changesSub?: Subscription;

    errorRef: ComponentRef<FormControlErrorComponent> | null = null;

    constructor(
        private errorService: ValidationErrorMsgeService,
        private injector: Injector,
        @Optional() @Host() private host: ViewContainerRef,
        @Optional() @Self() private self: ElementRef,
        @Self() private control: NgControl = injector.get(NgControl)
    ) {}

    ngAfterContentInit(): void {
        this.changesSub = this.control.valueChanges?.subscribe((_) => {
            this.onChange();
        });
    }

    private onChange() {
        if (!this.control.valid && this.control.errors) {
            const firstKey = Object.keys(this.control.errors)[0];
            const errorMessage =
                this.errorService.resolverErrorMessage(firstKey);
            this.setErrorMessage(errorMessage);
        } else {
            this.self.nativeElement.classList.remove('border-red-600');
            this.errorRef?.destroy();
            this.errorRef = null;
        }
    }

    private setErrorMessage(err: string | void) {
        if (!this.errorRef) {
            this.self.nativeElement.classList.add('border-red-600');
            this.errorRef = this.host.createComponent(
                FormControlErrorComponent
            );
        }
        if (err) {
            this.errorRef.instance.message = err;
        }
    }

    ngOnDestroy(): void {
        this.changesSub?.unsubscribe();
    }
}
