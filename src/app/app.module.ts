import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './shared/components/navbar/navbar.component';
import { ClickOutsideDirective } from './directives/click-outside.directive';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { AgregarGastoComponent } from './pages/dashboard/components/modals/agregar-gasto/agregar-gasto.component';
import { UsersListComponent } from './components/users-list/users-list.component';
import { GroupCardComponent } from './pages/dashboard/components';

@NgModule({
    declarations: [
        AppComponent,
        NavbarComponent,
        ClickOutsideDirective,
        DashboardComponent,
        AgregarGastoComponent,
        UsersListComponent,
        GroupCardComponent,
    ],
    imports: [BrowserModule, AppRoutingModule, NgbModule],
    providers: [],
    bootstrap: [AppComponent],
})
export class AppModule {}
