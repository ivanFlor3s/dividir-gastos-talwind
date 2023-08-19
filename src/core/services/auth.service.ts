import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';

@Injectable({
    providedIn: 'root',
})
export class AuthService {
    private _http = inject(HttpClient);

    login(email: string, password: string) {
        return this._http.post(`${process.env['API_ENDPOINT']}/auth/login`, {
            email,
            password,
        });
    }
}
