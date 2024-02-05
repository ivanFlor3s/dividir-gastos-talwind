import { CreateGroupRequest } from '@app/interfaces';
import { GroupVM } from '@app/models/view-models';

export class StartGettingGroups {
    static readonly type = '[Groups] StartGettingGroups';
    constructor(public name: string) {}
}

export class StartCreatingGroups {
    static readonly type = '[Groups] StartCreatigGroups';
    constructor(public body: CreateGroupRequest) {}
}

export class AddGroup {
    static readonly type = '[Groups] StartCreatigGroups';
    constructor(public group: GroupVM) {}
}
