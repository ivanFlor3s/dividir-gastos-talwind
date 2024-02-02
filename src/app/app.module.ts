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

//Interceptor
import { AuthInterceptor } from '@core/auth.interceptor';

//Ngxs
import { NgxsStoragePluginModule, StorageOption } from '@ngxs/storage-plugin';
import { NgxsReduxDevtoolsPluginModule } from '@ngxs/devtools-plugin';
import { AppState } from '@core/state/app-state/app.state';
import { NgxsModule } from '@ngxs/store';
import { SharedModule } from './shared/shared.module';
import { GroupState } from '@core/state';
import { environment } from 'src/environments/environment';

@NgModule({
    declarations: [AppComponent, ClickOutsideDirective],
    imports: [
        BrowserModule,
        AppRoutingModule,
        NgbModule,
        ReactiveFormsModule,
        FormsModule,
        SharedModule,
        ErrorsModule.forRoot({ required: 'Este campo es requerido' }),
        HttpClientModule,
        NgxsModule.forRoot([AppState, GroupState], {
            developmentMode: !environment.PRODUCTION,
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
