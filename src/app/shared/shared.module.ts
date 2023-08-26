import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DropdownComponent, NavbarComponent } from './components';
import { ClickOutsideDirective } from './directives';

@NgModule({
    declarations: [DropdownComponent, NavbarComponent, ClickOutsideDirective],
    imports: [CommonModule],
    exports: [DropdownComponent, NavbarComponent, ClickOutsideDirective],
    providers: [],
})
export class SharedModule {}
