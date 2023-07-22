import { Component, inject } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { UserCreationDto } from '@app/models/dtos';
import { UsersService } from '@core/services';

@Component({
    selector: 'app-register',
    templateUrl: './register.component.html',
    styleUrls: ['./register.component.scss'],
})
export class RegisterComponent {
    private _fb = inject(FormBuilder);
    private _userService = inject(UsersService);

    registerForm = this._fb.nonNullable.group({
        firstName: [
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
        passwordConfirmation: [
            '',
            [Validators.required, Validators.minLength(6)],
        ],
    });

    submit() {
        if (this.registerForm.valid) {
            const dto = this.registerForm.value as UserCreationDto;
            this._userService.createUser(dto).subscribe(console.log);
        }
    }
}
