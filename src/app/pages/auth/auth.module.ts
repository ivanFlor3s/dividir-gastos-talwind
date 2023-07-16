import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AuthContainerComponent } from './container/auth-container/auth-container.component';
import { RegisterComponent, LoginComponent } from './components';
import { AuthRoutes } from './auth.routing';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
    declarations: [AuthContainerComponent, RegisterComponent, LoginComponent],
    imports: [CommonModule, AuthRoutes, ReactiveFormsModule],
    exports: [],
    providers: [],
})
export class AuthModule {}
