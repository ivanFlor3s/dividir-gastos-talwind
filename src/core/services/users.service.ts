import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { UserCreationDto } from 'src/app/models/dtos';

const API_ENDPOINT = 'https://localhost:7089';

@Injectable({
    providedIn: 'root',
})
export class UsersService {
    constructor(private http: HttpClient) {}

    createUser(user: UserCreationDto) {
        return this.http.post(`${API_ENDPOINT}/api/user`, user);
    }
}
