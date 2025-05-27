export class CatEntidadesDomView {
    abreviatura: string;
    catalogKey: number;
    descripcionEntidades: string;
    idCatEntidades: number;
}

export class CatMunicipiosDomView {
    cveMunicipio: number;
    descripcionMunicipios: string;
    efeKey: number;
    idCatMunicipios: number;
}

export class CatLocalidadesDomView {
    catalogKey: number;
    descripcionLocalidades: string;
    efeKey: number;
    idCatLocalidades: number;
    munKey: number;
}

export class CatCodigoPostalDomView {
    _descripcionAsentamiento: string;
    _descripcionEntidades: string;
    _descripcionMunicipios: string;
    asentamiento: string;
    catEntidadesId: number;
    catMunicipiosId: number;
    catTipoAsentamientoId: number;
    ciudad: string;
    codigoPostal: string;
    cveCiudad: string;
    idAsentaCpcons: number;
    idCatCodigoPostal: number;
    zona: string;
}

export class CatTipoAsentamientoDomView {
    abreviatura: string;
    descripcionAsentamiento: string;
    idAsentCve: number;
    idCatTipoAsentamiento: number;
}

export class CodigoPostal {
    key: string;
    asentamiento: string;
}

export class CatReligionView {
    activo?: boolean;
    idCatReligion: number;
    relDescripcion: string;
}

export class CatFormacionView {
    activo ?: boolean;
    formAgrupacion: string;
    formDescripcion: string;
    formGrado: number;
    idCatFormacion: number;
}

export class CatDolometroView {
    idCatDolometro: number;
    doloDescripcion: string;
    nivel: number;
}

export const DolometroLevelIcons: {[level: string]: string} = {
    "1": 'nio-icon-health-good',
    "2": 'nio-icon-health-regular',
    "3": 'nio-icon-health-sick',
    "4": 'nio-icon-health-bad',
    "5": 'nio-icon-health-critical'
};

export class CatLenguasIndigenasView {
    activo: boolean;
    idCatLenguasIndigenas:	number;
    lengCatalogKey: number
    lengDescripcion:	string;
}
export class CatViaAdministracionView {
    activo?: boolean;
    idCatViaAdministracion:	number;
    vaDescripcion: string;
}
export class CatCie10FiltradoView {
    catalogKey: string;
    descripcionCapitulo: string;
    idCie10: number;
    nombre: string;
}
export class CatCie10View {
    activo:	boolean;
    asterisco:	string = '';
    birmm:	string= '';
    catalogKey:	string;
    codSitLesion:	string= '';
    codigox:	string= '';
    cveCausaType:	string= '';
    daga:	string= '';
    descripcionCapitulo:	string= '';
    diaCapituloType:	string= '';
    edasEIrasEnM5:	string= '';
    epiClave:	string= '';
    epiClaveDesc:	string= '';
    epiMorta:	string= '';
    epiMortaM5:	string= '';
    erradicado:	string= '';
    esCauses:	string= '';
    esSuiveEstBrote:	string= '';
    esSuiveEstEpi:	string= '';
    esSuiveMorb:	string= '';
    esSuiveMorta:	string= '';
    esSuiveNotin:	string= '';
    fetal:	string= '';
    idCie10:	number;
    letra:	string= '';
    lgbd165:	string= '';
    lgbd190:	string= '';
    linf: string= '';
    lista1:	string= '';
    lista5:	string= '';
    lmMorbi:	string= '';
    lmMorta:	string= '';
    lomsbeck:	string= '';
    lsex:	string= '';
    lsup:	string= '';
    nin:	string= '';
    ninmtobs:	string= '';
    ninter:	string= '';
    noAph:	string= '';
    noCbd:	string= '';
    nombre:	string;
    notdiaria: string= '';
    notsemanal:	string= '';
    numCauses:	string= '';
    prinmorbi:	string= '';
    prinmorta: string= '';
    rubricaType:	string= '';
    sinac:	string= '';
    sistemaEspecial:	string= '';
    trivial:	string= '';
    yearAplicacion:	string= '';
    yearModifi: string= '';

}

export class CatNacionalidadesView {
    activo?: boolean;
    idCatNacionalidades: number;
    nacPaisClave:   string;
    nacPaisCodigo: number;
    nacPaisDescripcion:    string;
}

/*Cat nuevo Docotores*/
export class CatAnioResidenciaView{
    id_cat_anio_residencia: number;
    clave_anio_de_residencia: string;
}

export class CatCluesView {
    clues: string;
    fkEntidad: string;
    nombreInstitucion: string;
}

export class CatTipoPlazaView{
    plaid: number;
    tipo: string;
}

export class CatJornadaView{
    jorid: number;
    descripcion: string;
}

export class CatActividadView{
    actid: number;
    descripcion: string;
}

export class CatAreaView{
    atrid: number;
    nombre: string;
}
export class CatInstitucionView{
    idinstitucion: number;
    instcve: string;
    instcvecorta: string;
    instnombre: string;
}


export class CatPersonalMedView{
    perid: number;
    descripcion: string;
}

export class CatTipoContratView{
    conid: number;
    tipo: string;
}

export class CantEntidadesFedView{
    idCatEntidades: number;
    catalogKey: number;
    descripcionEntidades: string;
    abreviatura: string;
}



/* fin CAT nuevo doctores */

export class CatMedicamentosView {
    activo?: boolean;
    catCuadroIoId: number;
    catGpoTerapeuticoId: number;
    catTipoInsumoId: number;
    concentracion: string= '';
    cveCodigo: string= '';
    demasIndicaciones: string= '';
    descripcionCompleta: string= '';
    fechaUltimaModificacion: Date;
    formaFarmaceutica: string= '';
    idCatMedicamentos: number;
    nombreGenerico: string= '';
    numActualizacion: string= '';
    presentacion: string= '';
    principalIndicaciones: string= '';
    subCveCodigo: string= '';
    tipoActualizacion: string= '';
}

export class CatTipoInsumoMedView {
    descripcionTipoInsumo: string;
    idCatTipoInsumo: number;
}


export class CatGpoTerapeuticoMedView {
    descripcionGpoTerapeutico: string;
    idCatGpoTerapeutico: number;
    medGpoTerapeutico: number;
    nivelAtencionGpoTerapeutico: string;
}

export class CatCuadroIoMedView {
    descripcionCuadroIo: string;
    idCatCuadroIo: number;
}

export class RegionSanitariaView{
    idRs:number;
    rsNum :string;
    rsEdo:number;
    rsNom:string;
    rsDom:string;
    rsCp:number;
    rsMun:string;
    rsDir:string;
    rsEst:string;
    rsEmail:string;
    rsCon1:string;
    rsCon1Lada:number;
    rsCon1Tel:number;
    rsCon1Ext:number;
    rsCon2:string;
    rsCon2Lada:number;
    rsCon2Tel:number;
    rsCon2Ext:number;
    rsActivo:number;
}


export class UnidadMedicaView {
    acreditaciones:	string;
    activo:	boolean; // 9
    areasServicios:	string;
    asentamiento: string; //
    camasAreaHos: number; // 10
    camasOtrasAreas: number; // 11
    certificacionCsg: string; // ya
    claveCortaInstitucion: string; // 16
    claveEstatusAcreditacion:	number; // 17
    claveEstatusOperacion:	number; // 18
    claveEstratoUnidad:	number;  // 19
    claveInsAdm:	number; // 20
    claveInstitucion:	string; // 21
    claveJurisdiccion: number; // 22
    claveNivelAtencion:	number; // 23
    claveScian:	number; // 24
    claveSubtipologia:	number; // 25
    claveTipoAsentamiento:	number;  // 26
    claveTipoEstablecimiento:	string;  // 27
    claveTipoObra:	number; // 28
    claveTipologia:	string; // 28
    claveVialidad:	number; // 29f
    clues:	string; // 2
    codigoPostal:	string; // 42
    consultoriosMedGral:	number; // 14
    consultoriosOtrasAreas:	number; // 15
    descripcionClaveScian:	string;  // yaa en elsegudno
    entreTipoVialidad1:	string;  // 30
    entreTipoVialidad2:	string; // 31
    entreVialidad1:	string; // 33
    entreVialidad2:	string; // 34
    estatusAcreditacion:	string; // NOO
    estatusOperacion:	string; // NOO
    estratoUnidad:	string; // NOOO
    fechaConstruccion:	Date; // ya
    fechaEmisionAvFun:	Date; // ya
    fechaInicioOperacion:	Date;  // ya
    fechaUltimoMovimiento:	Date;  // ya
    fkCveLocalidad:	string; // 35
    fkCveMunicipio:	string; // 36
    fkEntidad:	string; // 37
    horarioAtencion:	string;
    idUnidadMedica:	number; // ESTE LO VOY A COLOCAR EN EL PRIMERO
    latitud:	number; // 38
    longitud:	number; // 39
    nivelAtencion:	string; // NOO
    nombreInsAdm:	string; // 3
    nombreInstitucion:	string; // 4
    nombreJurisdiccion: string; // 5
    nombreSubtipologia:	string;  // 6
    nombreTipoEstablecimiento:	string; // 7
    nombreTipologia:	string; // 8
    nombreUnidad:	string; // 1
    numeroExterior:	string; // 40
    numeroInterior:	string; // 41
    numeroLicenciaSanitaria:	string; // NOO
    observacionesDireccion:	string; // NOO
    rfcEstablecimiento:	string; // NOO
    subacreditacion:	string; // N00
    tieneAvisoFuncionamiento:	boolean; // NOO
    tieneLicenciaSanitaria:	string; // NO0
    tipoAsentamiento:	string; // NOOO
    tipoCertificacion:	string; // NOOO
    tipoObra:	string; // 43
    tipoVialidad:	string; // 44
    totalCamas:	number; // 12
    totalConsultorios:	number; // 13
    ultimoMovimiento:	string; // NOOO
    unidadMovilCapacidad:	number; // ya
    unidadMovilClavePrograma:	number; // ya
    unidadMovilClaveTipo:	string; // ya
    unidadMovilClaveTipologia:	number; // ya
    unidadMovilMarca:	string; // ya
    unidadMovilModelo:	number; // ya
    unidadMovilPrograma:	string; // ya
    unidadMovilTipo:	string; // ya
    unidadMovilTipologia:	string; // ya
    vialidad:	string; // 45
    vigenciaCertificacion:	Date; // ya
}
export class ListaErrorsForms {
    controlName: string;
    errorName: string;
    nombreReal: string;
    constructor(controlName?: string, errorName?: string, nombreReal?: string) {
        if  (controlName && errorName) {
             this.controlName = controlName;
             this.errorName = errorName;
             this.nombreReal = nombreReal;
            }
    }
}

export class CatEstudiosView {
            activo: boolean;
            descripcion: string;
            estudio: string;
            idCatEstudio: number;
            preparacion: string;
}

export class CatMotivosEnvioView {
    activo?: boolean;
    fechaUltimaModificacion: Date;
    idCatMotivosEnvio: number;
    motivosEnvioDescripcion: string;
}

export class CatCifView {
    activo: boolean;
    discCodigo: string;
    discDescripcion: string;
    fechaUltimaModificacion: Date;
    idCatCif: number;

}



export class CatEspecialidadesView {
    activo?:	boolean;
    especialidadCodigo:	string;
    especialidadDescripcion:	string;
    fechaUltimaModificacion: Date;
    idCatEspecialidades: number;
}

export class CatCie9FiltradoView {
    catalogKey:	string;
    idCie9: number;
    proNombre: string;
    procedimientoType:	string;
    activo: boolean;
}

export class CatCie9View {
    activo:	boolean;
    catalogKey: string= '';
    idCie9:	number;
    porNivela:	string= '';
    proCapitulo: string= '';
    proCategoria:	string= '';
    proCveEdfa:	string= '';
    proCveEdia:	string= '';
    proEdadFa:	string= '';
    proEdadIa:	string= '';
    proEsCauses:	string= '';
    proGrupoLc:	string= '';
    proNombre:	string= '';
    proNumCauses:	string= '';
    proPrincipal:	string= '';
    proSeccion:	string= '';
    proSubcateg:	string= '';
    procedimientoType:	string= '';
    sexType: string= '';

}

