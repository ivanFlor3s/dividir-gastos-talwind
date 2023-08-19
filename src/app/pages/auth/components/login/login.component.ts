import { Component, inject } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '@core/services';

@Component({
    selector: 'app-login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.scss'],
})
export class LoginComponent {
    private _fb = inject(FormBuilder);
    private _authService = inject(AuthService);

    loginForm: FormGroup = this._fb.group({
        email: ['', Validators.required],
        password: ['', [Validators.required, Validators.minLength(6)]],
    });

    public submit() {
        if (this.loginForm.invalid) {
            return;
        }

        this._authService
            .login(this.loginForm.value.email, this.loginForm.value.password)
            .subscribe((res) => console.log(res));
    }
}
