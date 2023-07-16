import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './pages';

const routes: Routes = [
    {
        path: 'auth',
        loadChildren: () =>
            import('./pages/auth/auth.module').then((m) => m.AuthModule),
    },
    { path: 'dashboard', component: DashboardComponent },
    { path: '**', pathMatch: 'full', redirectTo: 'dashboard' },
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule],
})
export class AppRoutingModule {}
