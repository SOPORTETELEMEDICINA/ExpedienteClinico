import {DocumentoView, EstudioLaboratorioView} from "./common.model";

export class PadecimientoView {
    idPadecimiento: number;
    idPaciente: string;
    idMedico: string;
    fechaCreacion: Date;
    creadoPor: string;
    resumen: string;
    diagnostico: string;
    estudioLaboratorioViewList: EstudioLaboratorioView[];
    consultaId: number;
    documentosViewList: DocumentoView[];
    cie10Id: number;
    fechaAlta: Date;
    presuntivo: boolean;
    idMedicoTratante: string;
    nombreMedicoTratante: string;
    estatus: boolean;
    nombrePadecimiento: string;
    catalogKey: string;
}