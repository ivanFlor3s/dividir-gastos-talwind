import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GroupContainerComponent } from './container';
import { GroupRoutingModule } from './group.routing';
import { AddSpentComponent, ItemDetailComponent } from './components';
import { NgxSpinnerModule } from 'ngx-spinner';

@NgModule({
    imports: [CommonModule, GroupRoutingModule, NgxSpinnerModule],
    declarations: [
        GroupContainerComponent,
        ItemDetailComponent,
        AddSpentComponent,
    ],
})
export class GroupModule {}
