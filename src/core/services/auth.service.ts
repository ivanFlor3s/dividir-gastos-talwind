import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { LoginResponse } from '@app/interfaces';
import { Observable } from 'rxjs';

@Injectable({
    providedIn: 'root',
})
export class AuthService {
    private _http = inject(HttpClient);

    login(email: string, password: string): Observable<LoginResponse> {
        return this._http.post<LoginResponse>(
            `https://localhost:44339/api/auth/login`,
            {
                email,
                password,
            }
        );
    }
}
