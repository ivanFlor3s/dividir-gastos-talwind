import { Component } from '@angular/core';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss'],
})
export class AppComponent {
    title = 'dividir-gastos';
    constructor() {
        console.log(process.env['API_URL'], process.env['HOLA']);
    }
}
