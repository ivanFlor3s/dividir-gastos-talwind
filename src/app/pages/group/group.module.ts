import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GroupContainerComponent } from './container';
import { GroupRoutingModule } from './group.routing';
import { ItemDetailComponent } from './components';

@NgModule({
    imports: [CommonModule, GroupRoutingModule],
    declarations: [GroupContainerComponent, ItemDetailComponent],
})
export class GroupModule {}
