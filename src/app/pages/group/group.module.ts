import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GroupContainerComponent } from './container';
import { GroupRoutingModule } from './group.routing';

@NgModule({
    imports: [CommonModule, GroupRoutingModule],
    declarations: [GroupContainerComponent],
})
export class GroupModule {}
