import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { GroupVM } from '@app/models/view-models';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
    providedIn: 'root',
})
export class GroupsService {
    private _http = inject(HttpClient);

    getGroups(name: string): Observable<GroupVM[]> {
        return this._http.get<GroupVM[]>(`${environment.API_URL}/group`, {
            params: { name },
        });
    }
}
