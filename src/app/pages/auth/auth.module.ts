import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AuthContainerComponent } from './container/auth-container/auth-container.component';
import { RegisterComponent, LoginComponent } from './components';
import { AuthRoutes } from './auth.routing';
import { ReactiveFormsModule } from '@angular/forms';
import { ErrorsModule } from '../../../core/errors/errors.module';

@NgModule({
    declarations: [AuthContainerComponent, RegisterComponent, LoginComponent],
    imports: [
        CommonModule,
        AuthRoutes,
        ReactiveFormsModule,
        ErrorsModule.forRoot({
            required: 'Este campo es requerido',
            minlength: 'Este campo debe tener al menos 6 caracteres',
        }),
    ],
    exports: [],
    providers: [],
})
export class AuthModule {}
