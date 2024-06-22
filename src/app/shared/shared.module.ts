import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
    CloseableBadgeComponent,
    DropdownComponent,
    NavbarComponent,
    SearchComponent,
    UsersListComponent,
} from './components';
import { ClickOutsideDirective } from './directives';

@NgModule({
    declarations: [
        DropdownComponent,
        NavbarComponent,
        ClickOutsideDirective,
        SearchComponent,
        UsersListComponent,
        CloseableBadgeComponent,
    ],
    imports: [CommonModule],
    exports: [
        DropdownComponent,
        NavbarComponent,
        ClickOutsideDirective,
        SearchComponent,
        UsersListComponent,
        CloseableBadgeComponent,
    ],
    providers: [],
})
export class SharedModule {}
