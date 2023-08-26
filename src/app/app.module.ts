import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

//Modules
import { AppRoutingModule } from './app-routing.module';
import { ClickOutsideDirective } from './directives/click-outside.directive';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ErrorsModule } from '../core/errors/errors.module';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';

//Components
import { AppComponent } from './app.component';
import { GroupCardComponent } from './pages/dashboard/components';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { AgregarGastoComponent } from './pages/dashboard/components/modals/agregar-gasto/agregar-gasto.component';
import { UsersListComponent } from './components/users-list/users-list.component';

//Interceptor
import { AuthInterceptor } from '@core/auth.interceptor';

//Ngxs
import { NgxsStoragePluginModule, StorageOption } from '@ngxs/storage-plugin';
import { NgxsReduxDevtoolsPluginModule } from '@ngxs/devtools-plugin';
import { AppState } from '@core/state/app-state/app.state';
import { NgxsModule } from '@ngxs/store';
import { SharedModule } from './shared/shared.module';

@NgModule({
    declarations: [
        AppComponent,
        ClickOutsideDirective,
        DashboardComponent,
        AgregarGastoComponent,
        UsersListComponent,
        GroupCardComponent,
    ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        NgbModule,
        ReactiveFormsModule,
        FormsModule,
        SharedModule,
        ErrorsModule.forRoot({ required: 'Este campo es requerido' }),
        HttpClientModule,
        NgxsModule.forRoot([AppState], {
            developmentMode: process.env['PRODUCTION'] != '1',
        }),
        NgxsReduxDevtoolsPluginModule.forRoot(),
        NgxsStoragePluginModule.forRoot({
            key: [AppState],
            storage: StorageOption.LocalStorage,
        }),
    ],
    providers: [
        { provide: HTTP_INTERCEPTORS, useClass: AuthInterceptor, multi: true },
    ],
    bootstrap: [AppComponent],
})
export class AppModule {}
