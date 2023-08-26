import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DropdownComponent, NavbarComponent } from './components';

@NgModule({
    declarations: [DropdownComponent, NavbarComponent],
    imports: [CommonModule],
    exports: [DropdownComponent, NavbarComponent],
    providers: [],
})
export class SharedModule {}
