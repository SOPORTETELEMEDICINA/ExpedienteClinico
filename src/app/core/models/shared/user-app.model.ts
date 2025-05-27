import {GroupView} from "./group.model";
export class UserAppView {
    connectionStatus: string;
    createdDate: Date;
    customerId: number;
    description: string;
    email: string;
    extraList: Array<UserExtraInfoView> = [];
    groupList: Array<number>;
    groups: Array<GroupView> = [];
    idTipoUsuario: number;
    idUserApp: number;
    idUsersAssigned: Array<number> = [];
    idWorkShift: number;
    imageProfile: UserImageView;
    infoUsers: Array<UsersAssignedView> = [];
    name: string;
    nameWorkShift: string;
    password: string;
    password2: string;
    password3: string;
    telefono: string;
    permissionsList: Array<number>;
    profileId: number;
    profileName: string;
    status: string;
    username: string;
}

export class UserExtraInfoView {
    createdDate: Date;
    key: string;
    modifiedDate: Date;
    status: string;
    userExtraInfoId: number;
    value: string;
}

export class UserImageView {
    contentType: string;
    createdDate: Date;
    encodedImageContent: string;
    encodedImageContentSmall: string;
    imageName: string;
    userImageId: number;
}

export class UsersAssignedView {
    idUser: number;
    nameUser: string;
    selected: boolean;
}

export class UserIdentity {
    username: string;
    pass: string;
}
export class TypeUser {
    idTipoUsuario : number;
    descripcion: string;
    disponible : boolean;
    visible: boolean;
}
