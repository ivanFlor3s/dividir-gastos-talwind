import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
    providedIn: 'root',
})
export class GroupsService {
    private _http = inject(HttpClient);

    getGroups(): Observable<any> {
        return this._http.get<any>(`https://localhost:44339/api/group`);
    }
}
