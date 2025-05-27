export class Login {
    public username!: string;
    public body!: any;
    public token!: any;
    public grant_type!: string;
    public client_id!: string;
    public client_secret!: string;
    public password!: string;
    public roles!: Array<string>;
}

export class TokenManager {
    public access_token!: string;
    public token_type!: string;
    public refresh_token!: string;
    public userId!: number;
    public expires_in!: number;
    public hier_token!: string;
    public scope!: string;
    public roles!: Array<string>;
    public name!: string;
    public username!: string;
    public idTipoUsuario!: number;
    public decripcionTipoUsuario!: string;
    public imagen_grupo_principal!:string;
    public id_grupo_principal!:number;
    public nombre_grupo_principal!:string;
    public grupos!:any;
}