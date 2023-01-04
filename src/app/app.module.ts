import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './shared/components/navbar/navbar.component';
import { ClickOutsideDirective } from './directives/click-outside.directive';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { DashboardComponent } from './pages/dashboard/dashboard.component';

@NgModule({
    declarations: [AppComponent, NavbarComponent, ClickOutsideDirective, DashboardComponent],
    imports: [BrowserModule, AppRoutingModule, NgbModule],
    providers: [],
    bootstrap: [AppComponent],
})
export class AppModule {}
