import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
    AgregarGastoComponent,
    GroupCardComponent,
    NewGroupComponent,
} from './components';
import { DashboardComponent } from './dashboard.component';
import { ReactiveFormsModule } from '@angular/forms';
import { ErrorsModule } from '@core/errors/errors.module';
import { UsersListComponent } from '../../components/users-list/users-list.component';
import { SharedModule } from '@app/shared/shared.module';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { DashboardRoutingModule } from './dashboard.routing';

@NgModule({
    declarations: [
        DashboardComponent,
        AgregarGastoComponent,
        NewGroupComponent,
        GroupCardComponent,
        UsersListComponent,
    ],
    imports: [
        CommonModule,
        ReactiveFormsModule,
        SharedModule,
        NgbModule,
        DashboardRoutingModule,
        ErrorsModule.forRoot({
            required: 'Este campo es requerido',
            email: 'El email no es valido',
            passwordConfirmation: 'Las contraseñas no coinciden',
        }),
    ],
    exports: [],
    providers: [],
})
export class DashboardModule {}
