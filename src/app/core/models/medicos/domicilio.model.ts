// domicilio.model.ts
  export class DomicilioView {
    activo: boolean = false;
    colonia: string = '';
    cp: string = '';
    domicilio: string = '';
    estado: string = '';
    fechaCreacion: Date = new Date();
    idDomicilio: string = '';
    municipio: string = '';
    pais: string = '';
    // Para todas la operaciones se va estar empleando la localidad yse relaciona con asentamiento en el front
    localidad: string = '';
    registroSanitario: string = '';
    telefonoFijo: string = '';
    tipo: string = '';
    horarioAtencion: string = ''; //GGR20203107 Agrego horario de atención
}