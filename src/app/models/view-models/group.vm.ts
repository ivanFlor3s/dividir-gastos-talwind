import { UserVM } from './user.vm';

export interface GroupVM {
    groupId: number;
    groupName: string;
    description: string;
    createdAt: string;
    imageUrl: string;
    users: UserVM[];
}
