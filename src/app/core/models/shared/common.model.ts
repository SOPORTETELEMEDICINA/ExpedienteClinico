import { Time } from '@angular/common';
import {Cie9, Cie10} from './cies.model';

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



export class EstudioLaboratorioView {
    fechaCreacion?: Date = new Date();
    idEstudioLaboratorio?: number = 0;
    idMedico?: string = '';
    idPaciente?: string = '';
    nombreLaboratorio?: string = '';
    observaciones?: string = '';
    tipoEstudio?: string = '';
    consultaId?: number = 0;
}

export class ImagenLaboratorioListView {
    consultaId: number = 0;
    contentType: string = '';
    fechaCreacion: Date = new Date();
    idImagenLaboratorio: number = 0;
    idPaciente: string = '';
    imageName: string = '';
}

export class DocumentosListView {
    consultaId: number = 0;
    contentType: string = '';
    documentoName: string = ''
    fechaCreacion: Date = new Date();
    idDocumentos: number = 0;
    idPaciente: string = '';
}

// estudio laboratorio

export class FileView {
    contentType: string = '';
    fechaCreacion: Date = new Date();
    idPaciente: string = '';
    consultaId: number = 0;
}

//CLASES TELEMETRIA
export class GENERICADATE {
    GEN1_hora:Time;	
    GEN1_lu= false;	
    GEN1_ma= false;	
    GEN1_mi= false;	
    GEN1_ju= false;	
    GEN1_vi= false;	
    GEN1_sa= false;	
    GEN1_do= false;	
    GEN2_hora:Time;		
    GEN2_lu= false;	
    GEN2_ma= false;	
    GEN2_mi= false;	
    GEN2_ju= false;	
    GEN2_vi= false;	
    GEN2_sa= false;	
    GEN2_do= false;	
    GEN3_hora:Time;		
    GEN3_lu= false;
    GEN3_ma= false;
    GEN3_mi= false;
    GEN3_ju= false;
    GEN3_vi= false;
    GEN3_sa= false;
    GEN3_do= false;
    GEN4_hora:Time;		
    GEN4_lu= false;
    GEN4_ma= false;
    GEN4_mi= false;
    GEN4_ju= false;
    GEN4_vi= false;
    GEN4_sa= false;
    GEN4_do= false;
    GEN5_hora:Time;		
    GEN5_lu= false;
    GEN5_ma= false;
    GEN5_mi= false;
    GEN5_ju= false;
    GEN5_vi= false;
    GEN5_sa= false;
    GEN5_do= false;
    GEN6_hora:Time;		
    GEN6_lu= false;	
    GEN6_ma= false;	
    GEN6_mi= false;	
    GEN6_ju= false;	
    GEN6_vi= false;	
    GEN6_sa= false;	
    GEN6_do= false;	
    GEN7_hora:Time;		
    GEN7_lu= false;
    GEN7_ma= false;
    GEN7_mi= false;
    GEN7_ju= false;
    GEN7_vi= false;
    GEN7_sa= false;
    GEN7_do= false;
    GEN8_hora:any;		
    GEN8_lu=false;
    GEN8_ma=false;
    GEN8_mi=false;
    GEN8_ju=false;
    GEN8_vi=false;
    GEN8_sa=false;
    GEN8_do=false;
}

export class InicacionesCovid{
    medidfk: string = '';	
    pacidfk: string = '';	
    p1hora	 :string = '';
    covid1lu:boolean = false;
    covid1ma:boolean = false;	
    covid1mi:boolean = false;	
    covid1ju:boolean = false;	
    covid1vi:boolean = false;	
    covid1sa:boolean = false;	
    covid1do:boolean = false;	
    p2hora	 :string = '';    
    covid2lu:boolean = false;	
    covid2ma:boolean = false;	
    covid2mi:boolean = false;	
    covid2ju:boolean = false;	
    covid2vi:boolean = false;	
    covid2sa:boolean = false;	
    covid2do:boolean = false;	
    p3hora	 :string = '';
    covid3lu:boolean = false;	
    covid3ma:boolean = false;	
    covid3mi:boolean = false;	
    covid3ju:boolean = false;	
    covid3vi:boolean = false;	
    covid3sa:boolean = false;	
    covid3do:boolean = false;	
    p4hora	 :string = '';	    
    covid4lu:boolean = false;	
    covid4ma:boolean = false;	
    covid4mi:boolean = false;	
    covid4ju:boolean = false;	
    covid4vi:boolean = false;	
    covid4sa:boolean = false;	
    covid4do:boolean = false;	
}

export class IndicacionesPeso{
    medidfk:string = '';	
    pacidfk:string = '';	
    pesoinicial:number = 0;	
    tallainicial:number = 0;	
    p1hora:string = '';
    nutri1lu:boolean = false;
    nutri1ma:boolean = false;
    nutri1mi:boolean = false;
    nutri1ju:boolean = false;
    nutri1vi:boolean = false;
    nutri1sa:boolean = false;
    nutri1do:boolean = false;
    p2hora:string = '';   
    nutri2lu:boolean = false;
    nutri2ma:boolean = false;
    nutri2mi:boolean = false;
    nutri2ju:boolean = false;
    nutri2vi:boolean = false;
    nutri2sa:boolean = false;
    nutri2do:boolean = false;
    p3hora:string = '';
    nutri3lu:boolean = false;
    nutri3ma:boolean = false;
    nutri3mi:boolean = false;
    nutri3ju:boolean = false;
    nutri3vi:boolean = false;
    nutri3sa:boolean = false;
    nutri3do:boolean = false;

}
export class IndicacioesPA{
    medidfk:string = '';	
    pacidfk:string = '';	
    alertabajasys:number = 0;
    alertabajadia:number = 0;
    urgenciaaltasys:number = 0;	
    urgenciaaltadia:number = 0;	
    p1hora:string = '';	
    sys1lu:boolean = false;	
    sys1ma:boolean = false;	
    sys1mi:boolean = false;	
    sys1ju:boolean = false;	
    sys1vi:boolean = false;	
    sys1sa:boolean = false;	
    sys1do:boolean = false;	
    p2hora:string = '';	
    sys2lu:boolean = false;	
    sys2ma:boolean = false;	
    sys2mi:boolean = false;	
    sys2ju:boolean = false;	
    sys2vi:boolean = false;	
    sys2sa:boolean = false;	
    sys2do:boolean = false;	
    p3hora	:string = '';
    sys3lu	:boolean = false;
    sys3ma	:boolean = false;
    sys3mi	:boolean = false;
    sys3ju	:boolean = false;
    sys3vi	:boolean = false;
    sys3sa	:boolean = false;
    sys3do	:boolean = false;
    p4hora	:string = '';
    sys4lu	:boolean = false;
    sys4ma	:boolean = false;
    sys4mi	:boolean = false;
    sys4ju	:boolean = false;
    sys4vi	:boolean = false;
    sys4sa	:boolean = false;
    sys4do	:boolean = false;
    p5hora	:string = '';
    sys5lu	:boolean = false;
    sys5ma	:boolean = false;
    sys5mi	:boolean = false;
    sys5ju	:boolean = false;
    sys5vi	:boolean = false;
    sys5sa	:boolean = false;
    sys5do	:boolean = false;
    p6hora	:string = '';
    sys6lu	:boolean = false;
    sys6ma	:boolean = false;
    sys6mi	:boolean = false;
    sys6ju	:boolean = false;
    sys6vi	:boolean = false;
    sys6sa	:boolean = false;
    sys6do	:boolean = false;
    p7hora	:string = '';
    sys7lu	:boolean = false;
    sys7ma	:boolean = false;
    sys7mi	:boolean = false;
    sys7ju	:boolean = false;
    sys7vi	:boolean = false;
    sys7sa	:boolean = false;
    sys7do	:boolean = false;

}
export class IndicacionesGlu{
    medidfk:string = '';	
    pacidfk:string = '';	
    urgenciabaja:number = 0;
    alertaalta:number = 0;
    urgenciaalta:number	
    glu1hora:string = '';	
    glu1lu	:boolean = false;
    glu1ma	:boolean = false;
    glu1mi	:boolean = false;
    glu1ju	:boolean = false;
    glu1vi	:boolean = false;
    glu1sa	:boolean = false;
    glu1do	:boolean = false;
    glu2hora:string = '';	
    glu2lu	:boolean = false;
    glu2ma	:boolean = false;
    glu2mi	:boolean = false;
    glu2ju	:boolean = false;
    glu2vi	:boolean = false;
    glu2sa	:boolean = false;
    glu2do	:boolean = false;
    glu3hora:string = '';
    glu3lu	:boolean = false;
    glu3ma	:boolean = false;
    glu3mi	:boolean = false;
    glu3ju	:boolean = false;
    glu3vi	:boolean = false;
    glu3sa	:boolean = false;
    glu3do	:boolean = false;
    glu4hora:string = '';
    glu4lu	:boolean = false;
    glu4ma	:boolean = false;
    glu4mi	:boolean = false;
    glu4ju	:boolean = false;
    glu4vi	:boolean = false;
    glu4sa	:boolean = false;
    glu4do	:boolean = false;
    glu5hora:string = '';
    glu5lu	:boolean = false;
    glu5ma	:boolean = false;
    glu5mi	:boolean = false;
    glu5ju	:boolean = false;
    glu5vi	:boolean = false;
    glu5sa	:boolean = false;
    glu5do	:boolean = false;
    glu6hora:string = '';
    glu6lu	:boolean = false;
    glu6ma	:boolean = false;
    glu6mi	:boolean = false;
    glu6ju	:boolean = false;
    glu6vi	:boolean = false;
    glu6sa	:boolean = false;
    glu6do	:boolean = false;
    glu7hora:string = '';
    glu7lu	:boolean = false;
    glu7ma	:boolean = false;
    glu7mi	:boolean = false;
    glu7ju	:boolean = false;
    glu7vi	:boolean = false;
    glu7sa	:boolean = false;
    glu7do	:boolean = false;
    glu8hora:string = '';	
    glu8lu	:boolean = false;
    glu8ma	:boolean = false;
    glu8mi	:boolean = false;
    glu8ju	:boolean = false;
    glu8vi	:boolean = false;
    glu8sa	:boolean = false;
    glu8do :boolean = false;

}


export class NivelesCovid{
    medidfk:string = '';
    pacidfk:string = '';
    covidperiodo:number = 0;
    covidfechahora:string = '';
    covidtempmedida:number = 0;
    covidspomedida:number = 0;
    covidpulsomedida:number = 0;
}
export class NivelesPeso{
    medidfk:string = '';
    pacidfk:string = '';
    pesoperiodo:number = 0;
    pesofechahora:string = '';;
    pesomedida:number = 0;
}
export class NivelesPA{
    medidfk:string = '';
    pacidfk:string = '';
    paperiodo:number = 0;
    pafechahora:string = '';
    pasysmedida:number = 0;
    padiamedida:number = 0;
    pafcmedida:number = 0;
}
export class NivelesGlu{
   medidfk:string = '';
   pacidfk:string = '';
   gluperiodo : number = 0;
   glufechahora : string = '';
   glumedida:number = 0;
}






//FIN CLASES TELEMETRIA


export class ImagenLaboratorioView extends FileView {
    idImagenLaboratorio: number = 0;
    imageName: string = '';
}

export class DocumentoView extends FileView {
    idDocumentos: number = 0;
    documentoName: string = '';
}

// Clases empleadas en historia clinica general
/* Inicia clases correpondientes a heredoFamiliares*/

export class CamposTablaHeredoFamiliares {
    tieneEnfermedad: boolean = false;
    enfermedad: string = '';
    Padre: boolean = false;
    infoPadre: string = '';
    Madre: boolean = false;
    infoMadre: string = '';
    Hermanos: boolean = false;
    infoHermanos: string = '';
    abuPaternos: boolean = false;
    infoAbuPaternos: string = '';
    abuMaternos: boolean = false;
    infoAbuMaternos: string = '';
    tiosPaternos: boolean = false;
    infoTiosPaternos: string = '';
    tiosMaternos: boolean = false;
    infoTiosMaternos: string = '';

    constructor(enfermedad?: string) {
        if (enfermedad) {
            this.enfermedad = enfermedad;
        }
    }
}

export class PantallaHeredoFamiliares {
    datosTabla: any;
    comentarios = '';
    notas='';
}

/*Termina clases correspondientes a heredoFamiliares*/
/*Inicia clases correspondientes a personalesPatologicos*/
export class CamposTablaPersonalesPatologicos {
    tieneEnfermedad = false;
    enfermedad: string = '';
    tiempoEvolucion: string = '';
    tratamiento: string = '';
    notas='';

    constructor(enfermedad?: string) {
        if (enfermedad) {
            this.enfermedad = enfermedad
        }
    }
}

export class PantallaPersonalesPatologicos {
    datosTabla: any;
    textAlergias = '';
    textCirugias = '';
    textTransfuciones = '';
    textHospitalizacion = '';
    comentarios = '';
    notas='';
}

/*termina clases correspondientes a personalesPatologicos*/
/*Inicia clases correspondientes a NoPatologicos */

export class PersonalesNoPatologicosVivienda {
    aguaPotable = false;
    electricidad = false;
    recoleccionBasura = false;
    alcantarillado = false;
    pisoTierra = false;
    pisoAzulejo = false;
    pisoCemento = false;
    pisoOtro = false;
    techoLadrillo = false;
    techoEnjarradas = false;
    techoOtro = false;
    sinBanio = false;
    banio1 = false;
    banio2 = false;
    banioMas = false;
    habitaciones1 = false;
    habitaciones2 = false;
    habitacionesMas = false;
    cocinarGas = false;
    cocinarLenia = false;
    cocinarCarbon = false;
    productosToxicosSi = false;
    productosToxicosInput = '';
    productosToxicosNo = true;
    faunaNocivaNo = false;
    faunaAranias = false;
    faunaAlacranes = false;
    faunaSerpiente = false;
    faunaOtro = false;
    faunaOtroTxt: string = '';
}

export class PersonalesNoPatologicosMascotas {
    mascotasSi = false;
    mascotasNo = true;
    perro = false;
    gato = false;
    ave = false;
    conejo = false;
    tortuga = false;
    reptil = false;
    roedor = false;
    animalCorral = false;
    nivelConvivencia = '';
    comentarios = '';
}

export class PersonalesNoPatologicosAcDeportiva {
    acDeportivaSi = false;
    acDeportivaNo = true;
    acDeportivaFrecuencia = '';
    tipoActividadInput = '';
}

export class PersonalesNoPatologicosHabAlimenticios {
    calidad = '';
    cantidad = '';
    comentarios = '';
}

export class PersonalesNoPatologicosHabHigienicos {
    banio = '';
    aseoBucal = '';
}

export class PersonalesNoPatologicosTablaConsumo {
    droga = false;
    nombreDroga = '';
    frecuencia = '';
    inputCantidad = '';
    edadInicio: number = 0;
    edadAbandono: number = 0;

    constructor(nombreDroga?: string) {
        if (nombreDroga) {
            this.nombreDroga = nombreDroga
        }
    }
}

export class PersonalesNoPatologicosHistoriaLaboral {
    // Agregare aqui los comentarios de la pantalla anterior
    comentariosConsumo = '';
    trabajaSi = false;
    trabajaNo = false;
    jubilado: boolean = false;
    jubilacionEdad = false;
    jubilacionEnfermedad = false;
    jubilacionInput = '';
}

export class PersonalesNoPatologicosTablaLaboral {
    empresa = '';
    puesto = '';
    antiguedad: string = '';
    agentesQuimicos = '';

    constructor(empresa?: string, puesto?: string, antiguedad?: string, agentesQuimicos?: string) {
        if (empresa && puesto && antiguedad && agentesQuimicos) {
            this.empresa = empresa;
            this.puesto = puesto;
            this.antiguedad = antiguedad;
            this.agentesQuimicos = agentesQuimicos;
        }
    }
}

/*Clase general noPatologicos*/
export class PantallaPersonalesNoPatologicos {
    personalesNoPatologicosVivienda: PersonalesNoPatologicosVivienda;
    personalesNoPatologicosMascotas: PersonalesNoPatologicosMascotas;
    personalesNoPatologicosAcDeportiva: PersonalesNoPatologicosAcDeportiva;
    personalesNoPatologicosHabAlimenticios: PersonalesNoPatologicosHabAlimenticios;
    personalesNoPatologicosHabHigienicos: PersonalesNoPatologicosHabHigienicos;
    PersonalesNoPatologicosTablaConsumo: PersonalesNoPatologicosTablaConsumo[];
    personalesNoPatologicosHistoriaLaboral: PersonalesNoPatologicosHistoriaLaboral;
    personalesNoPatologicosTablaLaboral: PersonalesNoPatologicosTablaLaboral[];
    notas='';
}

/*termina clases correspondientes a NoPatologicos */
/*Inicia clases correspondientes a interrogatorio */

export class InterrogatorioOrganoSentidosVision {
    visionNormal = false;
    visionNormalOjo = '';
    visionBorrosa = false;
    visionBorrosaOjo = '';
    visionOjo: string = '';
    ceguera = false;
    cegueraOjo = '';
    cegueraderecho = false;
    cegueraizquierdo = false;
    cegueraBilateral = false;
    dolor = false;
    dolorOjo = '';
    dolorDerecho = false;
    dolorIzquierdo = false;
    fotofobia: boolean = false;
    diplopia = false;
    diplopiaOjo = '';
    diplopiaderecho = false;
    diplopiaizquierdo = false;
    prurito = false;
    pruritoOjo = '';
    pruritoderecho = false;
    pruritoizquierdo = false;
    pruritoBilateral = false;
    hipermetropia = false; // Nuevo
    miopia = false;
    astigmatismo = false;
    presbicia = false;
    lentes: boolean = false;
    // lentesSi = false;
    lentesCausa = '';
    // lentesNo = false;
    enrojecimiento = false;
    enrojecimientoOjo = '';
    enrojecimientoDerecho = false;
    enrojecimientoIzquierdo = false;
    catarata = false;
    catarataOjo = '';
    catarataBorrosa = false;
    catarataDerecho = false;
    catarataIzquierdo = false;
    catarataBilateral = false;
    resequedad = false;
    resequedadOjo = '';
    resequedadDerecho = false;
    resequedadIzquierdo = false;
    resequedadBilateral = false;
    secrecion = false;
    secrecionOjo = '';
    secrecionDerecho = false;
    secrecionzquiedo = false;
    secrecionBilateral = false;
    comentarios = '';
}

export class InterrogatorioOrganoSentidosAudicion {
    audicionNormal: boolean = false;
    audicionNormalOido = '';
    audicionHipo: boolean = false;
    audicionHipoOido: string = '';
    audicionHiper: boolean = false;
    audicionHiperOido: string = '';
    audicionAnacusia: boolean = false;
    audicionAnacusiaOido: string = '';
    audicionOtalgia: boolean = false;
    audicionOtalgiaOido: string = '';
    audicionTinitus: boolean = false;
    audicionTinitusOido: string = '';
    secrecionOtorrea: boolean = false;
    secrecionOtorreaOido: string = '';
    secrecionOtorraquia: boolean = false;
    secrecionOtorraquiaOido: string = '';
    secrecionOtorragia: boolean = false;
    secrecionOtorragiaOido: string = '';
    secrecionInput: string = '';
    comentarios: string = '';
}

export class InterrogatorioOrganoSentidosOlfato {
    normal = false;
    alterado = false;
    tiempoEvol = '';
    anosmia = false;
    cacosomia = false;
    hiposmia = false;
    parosmia = false;
    congestion = false
    rinorrea = false;
    epitaxis = false;
    pruritoNasal = false;
    comentarios = ''; 
}

export class InterrogatorioOrganoSentidosGusto {
    normal = false; // Cambio
    alterado = false; // Nuevo
    ardosa = false;
    //ardosatiempoEvol = ''; Eliminado
    //disfonia = false; Eliminado
    //afonia = false; Eliminado
    aftas = false;
    //disfoniaInput = ''; Eliminado
    disgeusia = false;
    ageusia = false;
    hipoageusia = false;
    //disgeusiaEvol = ''; Eliminado
    halitosis = false;
    gingivitis = false;
    gingivorrea = false;
    gingivorragia = false;
    glositis = false;
    // bruxismoInput = ''; Eliminado
    tiempoEvol = ''; // Nuevo
    comentarios = '';
}

export class InterrogatorioOrganoSentidosTacto {
    normal = false;
    hiposensible = false;
    hiposensibleLocalizacion = '';
    hipersensible = false;
    hipersensibleLocalizacion = '';
    localizacion: string = '';
    tactoTiempoEvol = '';
    esterognosia = false;
    esterogInput = '';
    comentarios = '';
}

export class InterrogatorioRespiratorio {
    resAsintomatico = false;
    dolorToracico = false;
    dolorToracicoEvolucion = '';
    dolorToracicoTrata = '';
    hemoptisis = false;
    hemoptisisEvolucion = '';
    hemoptisisTrata = '';
    cianosis = false;
    cianosisEvolucion = '';
    cianosisTrata = '';
    ortopnea = false;
    humpro = false;
    humnopro = false;
    toseca = false;
    hipo = false;
    silvidores = false;
    almohadasDuerme: number = 0;
    estornudos = false;
    estornudosSalva = '';
    rinitis = false;
    rinititsEvolucion = '';
    rinitisTrata = '';
    dolorMandibular = false;
    mandibularDerecha = false;
    mandibularIzquierda = false;
    diaforesis = false;
    diaforesisInput = '';
    disnea = false;
    disneaMotivo = '';
    disneaGesfuerzos = false;
    disneaMesfuerzos = false;
    disneaPesfuerzos = false;
    disneaEvolucion = '';
    usoOxigeno = false;
    oxigenoEvolucion = '';
    rinorreaSi = false;
    rinorrea = '';
    rinolaliaSi = false;
    rinolalia = '';
    disfonia = false;
    disfoniaEvolucion = '';
    disfoniaTratamiento = '';
    amigdalitis = false;
    amigdalitisFrecuencia = '';
    amigdalitisEvolucion = '';
    amigdalitisTratamiento = '';
    expectoracion = false;
    expecTipo = '';
    expecVerde = false;
    expecAmarilla = false;
    expecTransparente = false;
    expecBlanquecina = false;
    expecEvolucion = '';
    expecTratamiento = '';
    faringitis = false;
    faringitisEvolucion = '';
    faringitisTratamiento = '';
    dolorTorax = false;
    dolorToraxEvolucion = '';
    dolorToraxTratamiento = '';
    ruidos = false;
    ruidosFrecuencia = '';
    ruidosEvolucion = '';
    comentarios = '';
}

export class InterrogatorioCardiovascular {
    hipertension = false;
    hipertensionEvolucion = '';
    hipertensionTratamiento = '';
    palpitacion = false;
    palpiEvolucion = '';
    cardioAsintomatico = false;
    plapiTratamiento = '';
    bradicardia = false;
    bradicardiaEvolucion = '';
    bradicardiaTratamiento = '';
    cardiopatia = false;
    diaforesis = false;
    cardiopatiaTipo = '';
    cardiopatiaEvolucion = '';
    cardiopatiaTratamiento = '';
    dolorOpresivo = false;
    taquicardia = false;
    taquicardiaEvolucion = '';
    taquicardiaTratamiento = '';
    arritmias = false;
    arritmiasEvolucion = '';
    arritmiasTratamiento = '';
    mareos = false;
    mareosEvolucion = '';
    mareosIncorporarse = false;
    mareosflexionarse = false;
    mareosTodoMomento = false;
    cefalea = false;
    cefaleaGeneral = false;
    cefaleaFrontal = false;
    cefaleaOccipital = false;
    cefaleaBiparietal = false;
    cefaleaBitemporal = false;
    cefaleaUniDerecha = false;
    cefaleaUniIzquierda = false;
    disneaGesfuerzos = false;
    disneaMesfuerzos = false;
    disneaPesfuerzos = false;
    disneaEvolucion = '';
    disneaOxigenoterapia = false;
    sincope = false;
    sincopeEvolucion = '';
    sincopeTratamiento = '';
    cianosisPeribucal = false;
    cianosisDistales = false;
    petequiasSi = '';
    petequias = '';
    edema = false;
    edemaLocalizacion = '';
    edemaEvolucion = '';
    edemaTratamiento = '';
    soplo = false;
    soploEvolucion = '';
    soploTipo = '';
    hiperlipidemia = false;
    hiperTipo = false;
    hipercolesterol = false;
    hiperglicerol = false;
    hiperEvolucion = '';
    hiperTratamiento = '';
    comentarios = '';
}

export class InterrogatorioDigestivo {
    evacuaciones = false;
    evacuacionesNumeroConsistencia = '';
    evacuacionesCaracteristicas = '';
    evacuacuacionesPujo = false;
    evacuacionTenesmo = false;
    digesAsintomatico = false;
    constipacion = false;
    constipacionTipo = '';
    constipaSiempre = false;
    constipaOcasional = false;
    constipaRaramente = false;
    constipaNunca = false;
    flatulenciasSi = false;
    flatulencias = '';
    dolorAbdo = false;
    dolorAbdoLocalizacion = '';
    dolorAbdoTiempoEvol = '';
    dolorAbdoTipoColico = false;
    // dolorAbdoTipoEspasmo = false; Eliminado
    dolorAbdoTipoLocalizado = false;
    dolorAbdoTipoDifuso = false;
    evn = '';
    dolorAbdoTratamiento = '';

    distension: boolean = false;

    incontinenciaSi = false;

    rectorragia: boolean = false;

    hematoquecia: boolean = false;

    diarrea = false;
    diarreaFrecuencia = '';
    diarreaCaracteristicas = '';
    mixorrea = false;
    mixorreaTipo = '';
    mixorreaSiempre = false;
    mixorreaOcasional = false;
    mixorreaRaramente = false;
    mixorreaNunca = false;
    nauseas = false;
    nauseasPostPrandiales = false;
    nauseasPostTrata = false;
    nauseasCual = '';
    nauseasTiempoEvol = '';

    vomito = false;
    vomitoPostPrandiales = false;
    vomitoPostTratamiento = false;
    vomitoCual = '';
    vomitoTiempoEvol = '';
    vomitoAntiEmetico = '';

    reflujo = false;
    reflujoContinuo = false;
    reflujoIntermitente = false;
    reflujoNocturno = false;
    reflujoTiempoEvol = '';
    reflujoEndoscopia = '';
    reflujoTos: boolean = false;
    reflujoTratamiento = '';

    bocaSeca: boolean = false;

    hematemesis = false;
    hematemesisTiempoEvol = '';
    hematemesisTrata = '';

    episgas = false;
    episgasComentarios = '';
    epigasPirosis = false;
    epigasHipo = false;
    epigasTiempoEvol = '';

    sialorrea = false;
    sialorreaTiempoEvol = '';
    sialorreaTrata = '';

    xersotomia = false;
    xersotomiaTiempoEvol = '';
    xerostomiaTrata = '';

    hiporexia = false;
    hiporexiaTiempoEvol = '';
    hiporexiaTrata = '';

    hiperfagia = false;
    hiperfagiaTiempoEvol = '';
    hiperfagiaTrata = '';
    melena = false;
    melenaTiempoEvol = '';
    melenaCaracteristicas = '';
    acolia = false;
    acoliaTiempoEvol = '';
    acoliaCaracteristicas = '';
    anorexia = false;
    anorexiaTiempoEvol = '';
    anorexiaTrata = '';
    ictericia = false;
    ictericiaTiempoEvol = '';
    ictericiaTrata = '';
    ictericiaEstudios = '';
    pruritoAnal = false;
    pruritoAnalParasitos = false;
    pruritoTipo = '';
    pruritoTiempoEvol = '';
    pruritoCaracteristicas = '';
    polipos = false;
    poliposTiempoEvol = '';
    poliposCaracteristicas = '';
    poliposTratamiento = '';
    colecistitis = false;
    colecistitisTiempoEvol = '';
    colecistitisCaracteristicas = '';
    colecistitisTratamiento = '';
    odinofagia = false;
    odinofagiaTiempoEvol = '';
    odinofagiaTratamiento = '';
    anasarcaSi = false;
    anasarca = '';
    hemorroides = false;
    hemorroidesTiempoEvol = '';
    hemorroidesCaracteristicas = '';
    hemorroidesTratamiento = '';
    colelitiasis = false;
    colelitiasisTiempoEvol = '';
    colelitiasisCaracteristicas = '';
    colelitiasisTratamiento = '';
    disfagia = false;
    disfagiaTiempoEvol = '';
    disfagiaTratamiento = '';
    comentarios = '';
}

export class InterrogatorioEndocrino {
    endocriAsintomatico = false;
    gananciaPeso: boolean = false;
    gananciaPesoCuanto: number = 0;
    gananciaPesoEvol = '';
    nerviosis = false;
    diabetesTipo = '';
    diabetesTiempoEvol = '';
    diabetesTratamiento = '';
    pielseca = false;
    hipertiroiTiempoEvol = '';
    hipertiroiCaracteristicas = '';
    hipertiroiTratamiento = '';
    poliuria = false;
    enanismoCaracteristicas = '';
    enanismoFamiliares: number = 0;
    polidipsia = false;
    poliuriaTiempoEvol = '';
    poliuriaCaracteristicas = '';
    poliuriaTratamiento = '';
    perdidaPeso1: boolean = false;
    perdidaPesoCuanto: number = 0;
    perdidaPesoEvol = '';
    intoleranciaFrio: string = '';
    intoleranciaCalor: string = '';
    acumulacionGrasaDorsocervical: boolean = false;
    temblor = false;
    hipotiroiTiempoEvol = '';
    hipotiroiCaracteristicas = '';
    hipotiroiTratamiento = '';
    acromegalia = false;
    acromegaliaTiempoEvol = '';
    acromegaliaCaracteristicas = '';
    acromegaliaTratamiento = '';
    polifagia = false;
    hipofisiariosTipo = '';
    hipofisiariosTiempoEvol = '';
    hipofisiariosCaracteristicas = '';
    hipofisiariosTratamiento = '';
    comentarios = '';
    convulsiones: boolean = false;
    epilepsia: boolean = false;
    migrania: boolean = false;
    perdidaEquilibrio: boolean = false;
    perdidaConciencia: boolean = false;
    perdidaMemoria: boolean = false;
    parkinson: boolean = false;
    demencia: boolean = false;
    hiposensibilidad: boolean = false;
    hipersensibilidad: boolean = false;
    alodinia: boolean = false;
    hiperalgesia: boolean = false;
    parestesias: boolean = false;
}

export class InterrogatorioSistemaNervioso {
    nervioAsintomatico = false;
    suenioCantidad = '';
    suenioReparador = false;
    somnolencia: boolean = false;
    epilepsia = false;
    insomnioTiempoEvol = '';
    insomnioCaracteristicas = '';
    insomnioTratamiento = '';
    dolorTipoSelect = '';
    convulsionesFrecuencia = '';
    convulsionesNumero: number = 0;
    convulsionesOtro = '';
    migraniaLocalizacion = '';
    migraniaCaracteristicas = '';
    migraniaTiempoEvol = '';
    migraniaTratamiento = '';
    perdidaEquilibrioCaracteristicas = '';
    perdidaEquilibrioTiempoEvol = '';
    perdidaEquilibrioTratamiento = '';
    hiposensibilidadLocalizacion = '';
    hiposensibilidadTiempoEvol = '';
    alodiniaLocalizacion = '';
    alodiniaTiempoEvol = '';
    parestesiasLocalizacion = '';
    parestesiasTiempoEvol = '';
    parkinson = false;
    parkinsonCaracteristicas = '';
    parkinsonTiempoEvol = '';
    parkinsonTratamiento = '';
    perdidaConcienciaCaracteristicas = '';
    perdidaConcienciaTiempoEvol = '';
    perdidaConcienciaCausa = '';
    perdidaConcienciaTratamiento = '';
    hipersensibilidad = false;
    hipersensibilidadLocalizacion = '';
    hipersensibilidadTiempoEvol = '';
    hiperalgesiaLocalizacion = '';
    hiperalgesiaTiempoEvol = '';
    perdidaMemoriaCaracteristicas = '';
    perdidaMemoriaTiempoEvol = '';
    perdidaMemoriaCausa = '';
    perdidaMemoriaTratamiento = '';
    comentarios = '';
    estuporoso: boolean = false;
    mareos: boolean = false;
    vertigo: boolean = false;
    hipersomnia: boolean = false;
    hiposomnia: boolean = false;
    cefalea: boolean = false;
    movimientosInvoluntarios: boolean = false;
    tics: boolean = false;
    nistagmo: boolean = false;
    marchaInestable: boolean = false;
    temblor: boolean = false;
    calambresMusculares: boolean = false;
    debilidadMuscular: boolean = false;
    hiperestesia: boolean = false;
    hipoestesia: boolean = false;
    disestesia: boolean = false;
    hiperpatia: boolean = false;
}

export class InterrogatorioPielyAnexos {
    ulceras = '';
    ulcerasLocalizacion = '';
    ulcerasCausa = '';
    anexoAsintomatico = false;
    pielManchas = false;
    pielManchasLocalizacion = '';
    pielTiempoEvol = '';
    pielCaracteristicas = '';
    nevos = false;
    nevosComentarios = '';
    nevosEfelides = false;
    rash = false;
    rashLocalizacion = '';
    rashTiempoEvol = '';
    rashAgenteCausal = '';
    nodulos = false;
    nodulosLocalizacion = '';
    nodulosTiempoEvol = '';
    nodulosCaracteristicas = '';
    vesiculas = false;
    vesiculasLocalizacion = '';
    vesiculasTiempoEvol = '';
    vesiculasCaracteristicas = '';
    vesiculasVerrugas = false;
    vesiculasVerugasTiempoEvol = '';
    enrojecimiento = false;
    enrojecimientoLocalizacion = '';
    enrojecimientoTiempoEvol = '';
    urticaria = false;
    urticariaCausa = '';
    urticariaTiempoEvol = '';
    cicatrices = false;
    cicatricesLocalizacion = '';
    cicatricesCausa = '';
    unias = false;
    uniasOnicofagia = false;
    uniasOnicomicosis = false;
    uniasEleva = false;
    uniasManchas = false;
    uniasGruesas = false;
    uniasDelgadas = false;
    uniasBuenCrecimiento = false;
    uniasComentarios = '';
    pelo = false;
    peloAbundante = false;
    peloPoco = false;
    peloGrueso = false;
    peloDelgado = false;
    peloQuebradizo = false;
    peloSeborrea = false;
    peloAlopecia = false;
    peloCaspa = false;
    peloPrurito = false;
    peloPediculosis = false;
    peloTiniaCabeza = false;
    peloComentarios = '';
    comentarios = '';
    papulas: boolean = false;
    papulasLocalizacion: string = '';
    ampollas: boolean = false;
    ampollasLocalizacion: string = '';
    pustula: boolean = false;
    pustulaLocalizacion: string = '';
    escama: boolean = false;
    escamaLocalizacion: string = '';
    queratosis: boolean = false;
    queratosisLocalizacion: string = '';
    tuberculo: boolean = false;
    tuberculoLocalizacion: string = '';
    placa: boolean = false;
    placaLocalizacion: string = '';
    costra: boolean = false;
    costraLocalizacion: string = '';
    escara: boolean = false;
    escaraLocalizacion: string = '';
    excoriacion: boolean = false;
    excoriacionLocalizacion: string = '';
    erosion: boolean = false;
    erosionLocalizacion: string = '';
    fisura: boolean = false;
    fisuraLocalizacion: string = '';
    hiperpigmentacion: boolean = false;
    hiperpigmentacionLocalizacion: string = '';
    hipopigmentacion: boolean = false;
    hipopigmentacionLocalizacion: string = '';
}

export class InterrogatorioPsiquiatrico {
    psiquiAsintomatico = false;
    depresion = false;
    depresionTiempoEvol = '';
    depresionCaracteristicas = '';
    depresionTratamiento = '';
    trastornosAlimentacion = false;
    ingestaCompulsiva: boolean = false;
    ingestaCompulsivaTiempoEvol = '';
    ingestaCompulsivaCaracteristicas = '';
    ingestaCompulsivaTratamiento = '';
    trastornoAlimentacionOtro = false;
    trastornoAlimentacionOtroDescripcion = '';
    trastornoAlimentacionOtroTiempoEvol = '';
    trastornoAlimentacionOtroCaracteristicas = '';
    trastornoAlimentacionOtroTratamiento = '';
    bulimia = false;
    bulimiaTiempoEvol = '';
    bulimiaCaracteristicas = '';
    bulimiaTratamiento = '';
    perdidaInteresSex = false;
    perdidaInteresSexTiempoEvol = '';
    perdidaInteresSexCaracteristicas = '';
    perdidaInteresSexTratamiento = '';
    muySensible = false;
    muySensibleTiempoEvol = '';
    muySensibleCaracteristicas = '';
    muySensibleTratamiento = '';
    anorexiaNerviosa = false;
    anorexiaNerviosaTiempoEvol = '';
    anorexiaNerviosaCaracteristicas = '';
    anorexiaNerviosaTratamiento = '';
    ansiedad = false;
    ansiedadTiempoEvol = '';
    ansiedadCaracteristicas = '';
    ansiedadTratamiento = '';
    llantoFacil = false;
    llantoFacilTiempoEvol = '';
    llantoFacilCaracteristicas = '';
    llantoFacilTratamiento = '';
    irritabilidad = false;
    irritabilidadAlto = false;
    irritabilidadMedio = false;
    irritabilidadBajo = false;
    pensamientosSuicidas = false;
    pensamientosSuicidasTiempoEvol = '';
    pensamientosSuicidasCaracteristicas = '';
    pensamientosSuicidasTratamiento = '';
    pobreConcentra = false;
    alucinaciones = false;
    alucinacionesTipo = '';
    alucinacionesTiempoEvol = '';
    alucinacionesCaracteristicas = '';
    alucinacionesTratamiento = '';
    estres = false;
    estresAlto = false;
    estresMedio = false;
    estresBajo = false;
    pensamientoApresu = false;
    pensamientoApresuTiempoEvol = '';
    pensamientoApresuCaracteristicas = '';
    paranoia = false;
    paranoiaTiempoEvol = '';
    paranoiaCaracteristicas = '';
    paranoiaTratamiento = '';
    cambiosAnimoSi = false;
    cambiosAnimo = '';
    cambiosAnimoNegado: boolean = false;
    comportamientoArriesgadoSi = false;
    fobias = false;
    fobiasTipo = '';
    fobiasTiempoEvol = '';
    psicosis = false;
    psicosisTipo = '';
    psicosisTiempoEvol = '';
    psicosisCaracteristicas = '';
    psicosisTratamiento = '';
    comentarios = '';
    panico: boolean = false;
    mania: boolean = false;
    apatia: boolean = false;
    trastornosComportamiento: boolean = false;
    hiperactividad: boolean = false;
    hiposomnia: boolean = false;
    hipersomnia: boolean = false;
    parasomnia: boolean = false;
    delirio: boolean = false;
}

export class InterrogatorioGenitourinario {
    genitoAsintomatico: boolean = false;
    pujo = false;
    pujoMiccional = false;
    pujoTerminal = false;
    disuria = false;
    poliaquiria = false;
    incontinencia = false;
    incontinenciaTipo = '';
    incontinenciaTiempoEvol = '';
    incontinenciaTratamiento = '';
    colicoRenoureteral = false; // Nuevo
    colicoRenoureteralEvn =''; // Nuevo
    dolorRenal = false;
    dolorRenalCaracteristicas = '';
    dolorRenalTiempoEvol = '';
    dolorRenalTratamiento = '';
    dolorRenalEva: string = '';
    chorroInterrumpido: boolean = false;
    vaciamientoIncompleto: boolean = false;
    retencionUrinaria: boolean = false;
    ritmoMiccional: string = '';
    calibreDescripcion = '';
    prostatitis = false;
    prostatitisCaracteristicas = '';
    prostatitisTiempoEvol = '';
    prostatitisTratamiento = '';
    incontinenciaHombre = false;
    incontinenciaHombreTipo = '';
    incontinenciaHombreTiempo = '';
    incontinenciaHombreTratamiento = '';
    impotenciaHombre = false;
    impotenciaHombreTipo = '';
    impotenciaHombreTiempo = '';
    impotenciaHombreTratamiento = '';
    criptorquidia = false;
    criptorquidiaCausa = '';
    criptorquidiaTiempoEvol = '';
    priapismoSi = false;
    priapismo = '';
    tactoRectal = false;
    tactoRectalFecha: Date = new Date();
    tactoRectalNormal = false;
    tactoRectalAnormal = false;
    tactoRectalDescripcion = '';
    precoz = false;
    precozTiempoEvol = '';
    precozOtros = '';
    antigeno = false;
    antigenoFecha: Date = new Date();
    antigenoResultadoNormal = false;
    antigenoResultadoAnormal = false;
    antigenoDescripcion = '';
    polaquiuria: boolean = false;
    nicturia: boolean = false;
    urgenciaUrinaria: boolean = false;
    tenesmoVesical: boolean = false;
    incontinenciaUrgencia: boolean = false;
    chorroDebil: boolean = false;
    vacilacion: boolean = false;
    chorroIntermitente: boolean = false;
    goteoPostmiccional: boolean = false;
    retencionOrina: boolean = false;
    incontinenciaRebosamiento: boolean = false;
    coloracion: string = '';
    hematuria: boolean = false;
    olor: string = '';
    sedimento: boolean = false;
    hombresEreccionDisfuncion: string = '';
    hombresEreccionEvolucion: string = '';
    hombresEreccionCalidad: string = '';
    hombresEreccionMasturbacion: string = '';
    hombresEyaculacionDolor: boolean = false;
    hombresEyaculacionSangrado: boolean = false;
    hombresEyaculacionAneyaculacion: boolean = false;
    hombresEyaculacionRetardada: boolean = false;
    hombresEyaculacionPrecoz: boolean = false;
    hombresEyaculacionOtro: string = '';
    hombresLibido: string = '';
    hombresLesionesVerrugas: boolean = false;
    hombresLesionesUlceras: boolean = false;
    hombresLesionesVesiculas: boolean = false;
    hombresLesionesLunares: boolean = false;
    hombresLesionesCurvaturas: boolean = false;
    comentarios: string = '';
}

export class AntecedentesGinecobstetricos {
    asherman = false;
    retrodesviacion = false;
    cervicitis = false;
    polipoEndometrial=false;
    adherenciaUterina = false;
    periodosIrregulares = false;
    periodosRegulares = false;
    periodo28dias = false;
    periodo30dias = false;
    periodoOtro = '';
    periodoOtroSi = false;
    periodo = '';
    prolapsoUterino = false;
    ovarios = false;
    miomasFibromas = false;
    Endomeotriosis= false;
    hiperplasiaEndometrial = false;
    anticonTiempo ='';
    etsNombre = '';
    etsTratamiento = '';
    etsevolucion = '';
    tiempoevolucionDispareunia= '';
    frecuencia= '';
    secrecion = false;
    secrecionDescripcion= '';
    notavidasexual= '';
    amonorrea = false;
    metorragia= false;
    menorragia = false;
    dismorrea = false;
    olorvaginal =false;
    secrecionvaginal=false;
    descripcionsecrecion='';
    prurito=false;
    resequedadvaginal=false;
    duracionsintomas='';
    tratamientovaginal='';
    sindromepremenstrual= false;
    menarca = '';
    periodoTiempo = '';
    mamografiaFecha: Date = new Date();
    mamografiaResultadoNormal: boolean = false;
    mamografiaInput = '';
    menstracionCantidad = '';
    menstracionCantidadNormal = false;
    menstracionCantidadHipermenorrea = false;
    menstracionCantidadHipomonorrea = false;
    menstracionCantidadAmenorrea = false;
    menstruacion3Dias = false;
    menstruacion4Dias = false;
    menstruacion5Dias = false;
    menstruacionTiempoOtro = '';
    leucorreaCaracteristicas = '';
    leucorreaTiempoEvol = '';
    leucorreaTratamiento = '';
    fumInput = '';
    fumDisminorrea = false;
    ivsa = '';
    ivsaSexualActivo = false;
    numeroParejas: number = 0;
    anticon: boolean = false;
    anticonNombre: string = '';
    ets = false;
    etsTipo = '';
    etsTiempoEvol = '';
    dispareunia = false;
    dispareuniaInicial = false;
    dispareuniaSiempre;
    dispareuniaSangrado = false;

    papanicolauFecha: Date = new Date();
    papanicolauResultadoNormal: boolean = false;
    papanicolauInput = '';
    metrorragia = '';
    doccu = '';
    gestas: number = 0;
    cesareas: number = 0;
    orbitos: number = 0;
    partos: number = 0;
    abortos: number = 0;
    complicacionesEmbarazo = '';
    comentarios = '';
    comentariosdoccma ='';
    doccma = '';
    menopausiaEdad: number = 0;
    menopausiaBochornos = false;
    menopausiaInsomnio = false;
    menopausiaDepresion = false;
    menopausiaOtros = '';
    embarazada = false;
    embarazoDescripcion = '';
    embarazo1trimestre = '';
    embarazo2trimestre = '';
    embarazo3trimestre = '';
    embarazoParto = '';
    embarazoOtros = '';
     notas='';
}

export class Answer{
    pregunta:string="";
    respuesta:string="";
}

export class Quiz{
   // listaPreguntas: QuizQuestions = new QuizQuestions();
    idCuestionario:number = 0;
    nombre:string = '';
    creadoPor:string = '';
    createdDate:Date = new Date();
    active:boolean = false;
    sort:number = 0;
}

export class QuizQuestions{
 idPregunta: number = 0;
 idCuestionario: number = 0;
 nombreCuestionario: string = '';
 pregunta:string = '';
 respuesta:string="";
 active:boolean = false;
 createdDate:Date = new Date();
 sort: number = 0;
 tipoPregunta: number = 0;
}

export class GetRespuesta {
    idRespuesta: number;
    idCuestionario: number;
    creadoPor: string;
    json: GetPreguntas[];
    createdDate: number;
    idPaciente: string;
    active: boolean;
  }

export class GetPreguntas {
    IdPregunta?: number;  // El signo de interrogación indica que este campo es opcional
    Pregunta: string;
    Respuesta: string | null;
  }
  





export class InterrogatorioUrinario {
    disuria = false;
    hematuria = false;
    poliuria = false;
    nicturia = false;
    incontinencia = false;
    comentarios = '';
}

export class InterrogatorioReproductor {
    desechos = false;
    dolorGenital = false;
    poliuria = false;
    comentarios = '';
}

export class InterrogatorioHemolinfatico {
    hemoAsintomatico: boolean = false;
    nodulos = false;
    nodLocalizacion = '';
    petequias = false;
    astenia: boolean = false;
    adinamia: boolean = false;
    comentarios = '';
}

export class InterrogatorioMusculoEsqueletico {
    asintomatico: boolean = false;
    inflamacion = false;
    inflamacionLocalizacion = '';
    inflamacionTiempoEvol = '';
    dolor: boolean = false;
    dolorLocalizacion = '';
    dolorTiempoEvol = '';
    dolorEvn: string = '';
    debilidadMuscular: boolean = false;
    debilidadMuscularLocalizacion = '';
    debilidadMuscularTiempoEvol = '';
    secrecion: boolean = false;
    limitacionMovimientos: boolean = false;
    limitacionMovimientosLocalizacion = '';
    limitacionMovimientosNormal: boolean = false;
    limitacionMovimientosRestringido: boolean = false;
    limitacionMovimientosAumentado: boolean = false;
    deformidades = false;
    deformidadesLocalizacion = '';
    deformidadesTiempoEvol = '';
    calor: boolean = false;
    calorLocalizacion: string = '';
    eritema: boolean = false;
    eritemaLocalizacion: string = '';
    crepitaciones: boolean = false;
    crepitacionesLocalizacion: string = '';
    comentarios = '';
}

export class InterrogatorioOncologico {
    neoplasias: boolean = false;
    neoplasiasLocalizacion = '';
    neoplasiasTipo = '';
    neoplasiasTiempoEvol = '';
    neoplasiasTratamiento = '';
    neoplasiasComplicaciones = '';
    pronostico = '';
    dolorLocalizacion = '';
    dolorOncologico = false;
    dolorPorEnfermedad = false;
    dolorPorCompresion = false;
    dolorOtro = '';
    dolorEVN = '';
    estadio = '';
    conociminetoPatologia = '';
    enfermedadesInmunoCuales = '';
    enfermedadesInmunoTiempoEvol = '';
    enfermedadesInmunoTratamiento = '';
    comentarios = '';
}

export class InterrogatorioHematologico {
    anemia = false;
    anemiaTiempoEvol = '';
    anemiaCaracteristicas = '';
    sangrados = false;
    sangradosLocalizacion = '';
    sangradosTiempoEvol = '';
    sangradosCaracteristicas = '';
    coagulos = false;
    coagulosTiempoEvol = '';
    coagulosCaracteristicas = '';
    hematomas = false;
    hematomasLocalizacion = '';
    hematomasTiempoEvol = '';
    hematomasCaracteristicas = '';
    comentarios = '';
}

// Clase general del interrogatorio
export class PantallaInterrogatorioAparatos {
    interrogatorioOrganoSentidosVision: InterrogatorioOrganoSentidosVision;
    interrogatorioOrganoSentidosAudicion: InterrogatorioOrganoSentidosAudicion;
    interrogatorioOrganoSentidosOlfato: InterrogatorioOrganoSentidosOlfato;
    interrogatorioOrganoSentidosGusto: InterrogatorioOrganoSentidosGusto;
    interrogatorioOrganoSentidosTacto: InterrogatorioOrganoSentidosTacto;
    interrogatorioRespiratorio: InterrogatorioRespiratorio;
    interrogatorioCardiovascular: InterrogatorioCardiovascular;
    interrogatorioDigestivo: InterrogatorioDigestivo;
    interrogatorioEndocrino: InterrogatorioEndocrino;
    interrogatorioSistemaNervioso: InterrogatorioSistemaNervioso;
    interrogatorioPielyAnexos: InterrogatorioPielyAnexos;
    interrogatorioPsiquiatrico: InterrogatorioPsiquiatrico;
    interrogatorioGenitourinario: InterrogatorioGenitourinario;
    interrogatorioUrinario: InterrogatorioUrinario;
    interrogatorioReproductor: InterrogatorioReproductor;
    interrogatorioHemolinfatico: InterrogatorioHemolinfatico;
    interrogatorioMusculoEsqueletico: InterrogatorioMusculoEsqueletico;
    interrogatorioOncologico: InterrogatorioOncologico;
    interrogatorioHematologico: InterrogatorioHematologico;
    notas='';
}

/*termina clases correspondientes a interrogatorio */

/*Clase diagnostico*/

export class DiagnosticoHCG {
    comentarios = '';
    lstCie10: Cie10[];
    notas='';

    constructor() {
        this.lstCie10 = [];
    }
}

export class PadecimientoActual {
    motivoConsulta: string = '';
    descripcionPadecimiento: string = '';
    esVistoOtroMedico: boolean = false;
    medicamentoUsado: string = '';
    notas='';
}

export class EstudiosLaboratorioEstudio {
    tipo = '';
    descripcion = '';
    comentarios: string = '';
    id: number = 0;

}

export class EstudiosLaboratorioDocumento {
    contentType: string = '';
    nameFile: string = '';
    fileBase64: string = '';
    
}

export class EstudiosLaboratorio {
    listaEstudios: EstudiosLaboratorioEstudio[];
    listaDocumentos: EstudiosLaboratorioDocumento[];

    constructor() {
        this.listaEstudios = [];
        this.listaDocumentos = [];
    }
    notas='';
}

export class TerapeuticaEmpleada {
    comentarios: string = '';
    lstCie9: Cie9[];
    notas='';
    constructor() {
        this.lstCie9 = [];
    }
}

/** Exploración fisica  ------ >>>  */
export class TensionArterial {
    sistolica = 0;
    diastolica = 0;
}

export class EstadoConciencia {
    consciente: string = '';
    comentarios: string = '';

    constructor() {
        this.comentarios = '';
    }
}

export class HabitusExterior {
    habitus = '';
    comentarios: string = '';
}

export class SistemaNervioso {
    orientadoEn: {
        tiempo: boolean;
        espacio: boolean;
        persona: boolean;
    };
    fuerzaMuscular: {
        brazoIzq: string ,
        brazoDer: string ,
        piernaIzq: string,
        piernaDer: string,
    };
    tonoMuscular: string = '';
    reflejoOsteo: {
        brazoIzq: { estado: string, comentario: string },
        brazoDer: { estado: string, comentario: string },
        piernaIzq: { estado: string, comentario: string },
        piernaDer: { estado: string, comentario: string }
    };
    marcha: string = '';

    orientadoenTiempo: boolean = false;;
    orientadoenEspacio: boolean = false;;
    orientadoenPersona: boolean = false;;
    fuerzaMuscularBrazoIzq: string = '';
    fuerzaMuscularBrazoDer: string = '';
    fuerzaMuscularPiernaIzq: string = '';
    fuerzaMuscularPiernaDer: string = '';
    reflejoOsteoBrazoizqEstado: string = '';
    reflejoOsteoBrazoizqComentario: string = '';
    reflejoOsteoBrazoderEstado: string = '';
    reflejoOsteoBrazoderComentario: string = '';
    reflejoOsteoPiernaizqEstado: string = '';
    reflejoOsteoPiernaizqComentario: string = '';
    reflejoOsteoPiernaderEstado: string = '';
    reflejoOsteoPiernaderComentario: string = '';


    constructor() {

        this.orientadoEn = {espacio: false, tiempo: false, persona: false};

        this.fuerzaMuscular = {brazoIzq: '', brazoDer: '', piernaIzq: '', piernaDer: ''};

        this.reflejoOsteo = {
            brazoIzq: {estado: '', comentario: ''},
            brazoDer: {estado: '', comentario: ''},
            piernaDer: {estado: '', comentario: ''},
            piernaIzq: {estado: '', comentario: ''}
        };
    }
}

export class Cabeza {
    tipo: string = '';
    cueroCabelludo: string = '';
    endomorficos: boolean = false;
    ojoIzquierdo: Ojo = new Ojo();
    ojoDerecho: Ojo = new Ojo();
    narizPermeabilidad: string = '';
    narizSenoFrontal: boolean = false;
    narizSenoMaxilar: boolean = false;
    narizSecreciones: string = '';
    narizLesiones: string = '';
    narizMasas: string = '';
    narizCuerposExtranos: string = '';
    oidoPabellonAuricular: string = '';
    oidoConductoAuditivo: string = '';
    oidoConductoAuditivoDescripcion: string = '';
    oidoMembranaTimpanica: string = '';
    oidoMembranaTimpanicaDescripcion: string = '';
    boca: Boca = new Boca();
    ojoIzquierdoCejasParpadoPestana: string = '';
    ojoIzquierdoConjuntivas: string = '';
    ojoIzquierdoConjuntivasDescripcion: string = '';
    ojoIzquierdoPupilas: string = '';
    ojoIzquierdoReflejosPupulas: string = '';
    ojoIzquierdoMovimientos: string = '';
    ojoIzquierdoTonoOcular: string = '';
    ojoDerechoCejasParpadoPestana: string = '';
    ojoDerechoConjuntivas: string = '';
    ojoDerechoConjuntivasDescripcion: string = '';
    ojoDerechoPupilas: string = '';
    ojoDerechoReflejosPupulas: string = '';
    ojoDerechoMovimientos: string = '';
    ojoDerechoTonoOcular: string = '';
    bocaTrismus: boolean = false;
    bocaHalitosis: boolean = false;
    bocaMucosa: boolean = false;
    bocaMucosaTipo: string = '';
    bocaCandidiasis: boolean = false;
    bocaLengua: string = '';
    bocaOrofaringeDolor: boolean = false;
    bocaOrofaringeHiperemia: boolean = false;
    bocaOrofaringeAmigdalas: boolean = false;
    bocaOrofaringeAmigdalasTipo: string = '';
    bocaOrofaringeCuerpoExtrano: boolean = false;
    bocaOrofaringeHemorragia: boolean = false;
    bocaDientes: string = '';
    bocaEnciasGingivorragia: boolean = false;
    bocaEnciasGingivitis: boolean = false;
    conjuntiva = '';
    narinas = '';
    orofaringe = '';
    oidos = '';
    cavidadOral = '';
    dentadura = '';
    comentarios: string = '';
    pupilas1 = '';
    pupilas2 = '';
}

export class Ojo {
    cejasParpadoPestana: string = '';
    conjuntivas: string = '';
    conjuntivasDescripcion: string = '';
    pupilas: string = '';
    reflejosPupulas: string = '';
    movimientos: string = '';
    //profundidad: string = ''; Cambiado por tonoOcular:
    tonoOcular: string = '';
}

export class Boca {
    trismus: boolean = false;
    halitosis: boolean = false;
    mucosa: boolean = false;
    mucosaTipo: string = '';
    candidiasis: boolean = false;
    lengua: string = '';
    orofaringe: BocaOrofaringe = new BocaOrofaringe();
    dientes: string = '';
    encias: BocaEncias = new BocaEncias();
}

export class BocaOrofaringe {
    dolor: boolean = false;
    hiperemia: boolean = false;
    amigdalas: boolean = false;
    amigdalasTipo: string = '';
    cuerpoExtrano: boolean = false;
    hemorragia: boolean = false;
}

export class BocaEncias {
    gingivorragia: boolean = false;
    gingivitis: boolean = false;
}

export class Cuello {
    masas: boolean = false;
    movil: boolean = false;
    pulso: boolean = false;
    tiroides: string = '';
    linfaticos: string = '';
    vasos: string = '';
    acantosis: boolean = false;
    comentarios: string = '';
}

export class Torax {
    torax: string = "";
    respiracion: string = "";
    ganglios: string = '';
    ruidosCardiacos: boolean = false;
    ruidosCardiacosOtros: string = '';
    mamasSimetria: string = "";
    mamasGinecomastia: boolean = false;
    mamasMasas: string = '';
    mamasSecreciones: string = '';
    mamasOtros: string = '';
    murmulloVesicular: string = "";
    murmulloVesicularLocalizacion: string = '';
    ruidosSoplos: string = "";
    ruidosSoplosLocalizacion: string = '';
    ruidosEstertores: string = "";
    ruidosEstertoresLocalizacion: string = '';
    posteriorPulmonaresAlteraciones: string = '';
    musculosParavertebralesAtroficos: boolean = false;
    musculosParavertebralesDolor: boolean = false;
    escoliosis: boolean = false;
    cifosis: boolean = false;
    lordosis: boolean = false;
    ruidosRespiratorios: string = '';
    cardiacos = '';
    comentarios: string = '';
}

export class Abdomen {
    caracteristicas: string = "";
    ruidosPeristalticos: boolean = false;
    ruidosPeristalticosTipo: string = "";
    percusion: string = "";
    percusionLocalizacion: string;
    palpacionDolor: boolean = false;
    palpacionDolorLocalizacion: string = "";
    masas: boolean = false;
    visceromegalias: boolean = false;
    ascitis: boolean = false;
    hernias: string = '';
    signos: string = "";
    comentarios: string = '';

    forma = '';
    ruidos = '';
    dolor: boolean = false;
}

export class Piel {
    planasMacula: boolean = false;
    planasTelangiectasias: boolean = false;
    planasEsclerosis: boolean = false;
    elevadasPapula: boolean = false;
    elevadasPlaca: boolean = false;
    elevadasNodulo: boolean = false;
    elevadasVesicula: boolean = false;
    elevadasAmpolla: boolean = false;
    elevadasAbsceso: boolean = false;
    elevadasEscara: boolean = false;
    elevadasCicatriz: boolean = false;
    deprimidasAtrofia: boolean = false;
    deprimidasExcoriacion: boolean = false;
    deprimidasErosion: boolean = false;
    deprimidasUlcera: boolean = false;
    comentarios: string = '';

    manchas: boolean = false;
    masas: boolean = false;
    lesiones: boolean = false;
}

export class Genitales {
    secreciones: boolean = false;
    masas: boolean = false;
    lesiones: boolean = false;
    comentarios: string = '';
}

export class Extremidades {
    toracicosIzquierdo: boolean = false;
    toracicosDerecho: boolean = false;
    pelvicosIzquierdo: boolean = false;
    pelvicosDerecho: boolean = false;
    simetria: boolean = false;
    pulsos: Pulsos = new Pulsos();
    pulsosCarotideoPresente: boolean = false;
    pulsosCarotideoRitmo: string = '';
    pulsosCarotideoSimetria: string = '';
    pulsosCarotideoIntensidad: string = '';
    pulsosRadialPresente: boolean = false;
    pulsosRadialRitmo: string = '';
    pulsosRadialSimetria: string = '';
    pulsosRadialIntensidad: string = '';
    pulsosBraquialPresente: boolean = false;
    pulsosBraquialRitmo: string = '';
    pulsosBraquialSimetria: string = '';
    pulsosBraquialIntensidad: string = '';
    pulsosFemoralPresente: boolean = false;
    pulsosFemoralRitmo: string = '';
    pulsosFemoralSimetria: string = '';
    pulsosFemoralIntensidad: string = '';
    pulsosPopitleoPresente: boolean = false;
    pulsosPopitleoRitmo: string = '';
    pulsosPopitleoSimetria: string = '';
    pulsosPopitleoIntensidad: string = '';
    pulsosTibialPresente: boolean = false;
    pulsosTibialRitmo: string = '';
    pulsosTibialSimetria: string = '';
    pulsosTibialIntensidad: string = '';
    masasPalpables: string = '';
    tonoMuscular: string = '';
    dolor: boolean = false;
    dolorEvn: string = "";
    dolorLocalizacion: string = '';
    dolorCaraceristicas: string = '';
    crepitacion: boolean = false;
    crepitacionLocalizacion: string = '';
    deformidades: string = '';
    articulacionesEdema: boolean = false;
    articulacionesHiperemia: boolean = false;
    articulacionesMovimientos: string = "";
    articulacionesMovimientosDetalles: string = '';
    fuerza: string = "";
    edema: boolean = false;
    signosGodet: string = '';
    signosHomans: boolean = false;
    signosColumnaMusculos: string = "";
    signosColumnaEscoliosis: boolean = false;
    signosColumnaCifosis: boolean = false;
    signosColumnaLordosis: boolean = false;

    estado: string = '';
    edemaLocalizacion: string = '';
    edemaConsistencia: string = '';
    edemaGodette: string = '';
    simetricos: boolean = false;
    intensidad: boolean = false;
    comentarios: string = '';
}

export class Pulsos {
    carotideo: PulsosDatos = new PulsosDatos();
    radial: PulsosDatos = new PulsosDatos();
    braquial: PulsosDatos = new PulsosDatos();
    femoral: PulsosDatos = new PulsosDatos();
    popitleo: PulsosDatos = new PulsosDatos();
    tibial: PulsosDatos = new PulsosDatos();
    dorsalisPedis: PulsosDatos = new PulsosDatos();
}

export class PulsosDatos {
    presente: boolean = false;
    ritmo: string = "";
    simetria: string = "";
    intensidad: string = "";
}

export class ExploracionFisica {
    peso: number = 0;
    talla: number = 0;
    temperatura: string = '';
    imc: number = 0;
    tensionArterial: TensionArterial = new TensionArterial();
    frecuenciaCardiaca: string = '';
    frecuenciaRespiratoria: string = '';
    saturacionOxigeno: string = '';
    estadoConciencia: EstadoConciencia = new EstadoConciencia();
    habitusExterior: HabitusExterior = new HabitusExterior();
    sistemaNervioso: SistemaNervioso = new SistemaNervioso();
    cabeza: Cabeza = new Cabeza();
    cuello: Cuello = new Cuello();
    torax: Torax = new Torax();
    abdomen: Abdomen = new Abdomen();
    piel: Piel = new Piel();
    genitales: Genitales = new Genitales();
    extremidades: Extremidades = new Extremidades();
    notas='';

    // constructor() {
    //     this.peso=0;
    //     this.talla= 0;
    // }
}


export class OSNotification{
    app_id:string="";
    include_player_ids:any;
    data:any;
    template_id:string="";
    send_after:string="";
}

export class NotiPacientes{
idUser:any;
idDevice:string="";
idNotification:string="";
tipoNotificacion:number=0;
}