import {PageRequest} from "./page.models";

export class NiomedicPageRequest extends PageRequest {
    idUsuario?: number | number[];
    idPaciente?: string;
    idMedico?: string;
    idConsulta?: number;
    numeroConsulta?: number;
    override datosBusqueda?: string | Date;
    idPadecimiento?: number;
    idTipoEvento?: number | number[];
    group?: number | string;
}

export class NiomedicPageRequest2 extends PageRequest {
    idUsuario?: string;
    idPaciente?: string;
    idMedico?: string;
    idConsulta?: number;
    numeroConsulta?: number;
    override datosBusqueda?: string | Date;
    idPadecimiento?: number;
    idTipoEvento?: string;
    group?: number | string;
    idUsuarioRecibe?:  string;
    unidadMedica?: number | string;
    regionSanitaria?: number | string;
    status?: number | string;
    especialidad?: number | string;
}
