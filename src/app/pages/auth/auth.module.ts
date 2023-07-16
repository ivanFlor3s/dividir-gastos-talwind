import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AuthContainerComponent } from './container/auth-container/auth-container.component';
import { RegisterComponent, LoginComponent } from './components';
import { AuthRoutes } from './auth.routing';

@NgModule({
    declarations: [AuthContainerComponent, RegisterComponent, LoginComponent],
    imports: [CommonModule, AuthRoutes],
    exports: [],
    providers: [],
})
export class AuthModule {}
