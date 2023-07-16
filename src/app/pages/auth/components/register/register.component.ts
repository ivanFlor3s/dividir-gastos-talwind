import { Component, inject } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
    selector: 'app-register',
    templateUrl: './register.component.html',
    styleUrls: ['./register.component.scss'],
})
export class RegisterComponent {
    private _fb = inject(FormBuilder);

    registerForm = this._fb.group({
        name: [
            '',
            [
                Validators.required,
                Validators.minLength(3),
                Validators.maxLength(20),
            ],
        ],
        lastName: [
            '',
            [
                Validators.required,
                Validators.minLength(3),
                Validators.maxLength(20),
            ],
        ],
        email: ['', [Validators.required, Validators.email]],
        password: ['', [Validators.required, Validators.minLength(6)]],
        password_confirmation: [
            '',
            [Validators.required, Validators.minLength(6)],
        ],
    });

    submit() {
        console.log(this.registerForm);
    }
}
