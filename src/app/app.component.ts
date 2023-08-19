import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss'],
})
export class AppComponent {
    title = 'dividir-gastos';

    get inAuthUrl(): boolean {
        return this.router.url.includes('auth');
    }

    constructor(private router: Router) {}
}
