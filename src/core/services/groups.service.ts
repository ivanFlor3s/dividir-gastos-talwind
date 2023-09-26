import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { FilterParams } from '@app/interfaces';
import { GroupVM } from '@app/models/view-models';
import { Observable } from 'rxjs';

@Injectable({
    providedIn: 'root',
})
export class GroupsService {
    private _http = inject(HttpClient);

    getGroups(filter: FilterParams): Observable<GroupVM[]> {
        return this._http.get<GroupVM[]>(`${process.env['API_URL']}/group`, {
            params: { ...filter },
        });
    }
}
