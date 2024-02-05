import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
    DropdownComponent,
    NavbarComponent,
    SearchComponent,
} from './components';
import { ClickOutsideDirective } from './directives';

@NgModule({
    declarations: [
        DropdownComponent,
        NavbarComponent,
        ClickOutsideDirective,
        SearchComponent,
    ],
    imports: [CommonModule],
    exports: [
        DropdownComponent,
        NavbarComponent,
        ClickOutsideDirective,
        SearchComponent,
    ],
    providers: [],
})
export class SharedModule {}
