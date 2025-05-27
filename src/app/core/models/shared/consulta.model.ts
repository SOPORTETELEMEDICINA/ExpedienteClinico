// Reemplazo de util por funciones nativas
function isNullOrUndefined(value: any): boolean {
    return value === null || value === undefined;
  }
  
  function isString(value: any): boolean {
    return typeof value === 'string';
  }
  
  import {PadecimientoView} from "./padecimiento.model";
  import {ExploracionFisica} from '../shared/common.model';
  import {CatDolometroView} from "./catalog.model";
  
  export class ConsultaView {
      idConsulta: number;
      idPaciente: string;
      nombrePaciente: string;
      idMedico: string;
      nombreMedico: string;
      especialidad: string;
      idMedicoSolicitado: string;
      nombreMedicoSolicitado: string;
      especialidadMedicoSolicitado: string;
      idUsurioZoom: string;
      idMeeting: number;
      meeting: string;
      idUsuario: number;
      creadoPor: string;
      fechaCrecion: Date;
      fechaConsulta: Date;
      fechaInicio: Date;
      fechaConsultaFin: Date;
      fechaCancelacion: Date;
      feachaFin: Date;
      idMotivoEnvio: number;
      motivoEnvio: string;
      idServicio: number;
      servicio: string;
      idGroup:number;
      idEstadoConsulta: number;
      estadoConsulta: string;
      idTipoConsulta: number;
      tipoConsulta: string;
      canal: string;
      motivoConsulta: string;
      analisis: string;
      subjetivo: string;
      planTerapeutico: string;
      objetivo: string;
      numeroConsulta: string;
      pronostico: string;
      resumen: string;
      listaCatCie9: number[];
      listaCatCie10: number[];
      listaPadecimiento: PadecimientoView[];
      listaTartamiento: TratamientoView[];
      samu: boolean;
      urgente: boolean;
      signosVitales: SignosVitales = new SignosVitales();
      exploracionFisica: ExploracionFisica = new ExploracionFisica();
      catDolometroView: CatDolometroView;
      consultaHis: boolean;
      incapacidadTemporal: LaboralInhability = new LaboralInhability();
  }


export class ReferenciaView{
    folio: string="";
    vez: number=0;
    umRefClues: string=""
    regionSanitaria: number=0;
    fechaCreacion:Date;
    idPaciente: string="";
    dx1: number=0;
    dx2: number=0;
    dx3: number=0;
    dx4: number=0;
    dx5: number=0;
    dx6: number=0;
    urgente : number=0;
    unidadMedica: string="";
    espReq: number=0;
    //medico que recibe la referencia/interconsulta
    idMedicoRecibe: string="";
    refSamu: string="";
    refSamuFecha: Date;
    refMotivo: string="";
    refResClin: string="";
    refSvTaSys: number=0;
    refSvTaDia: number=0;
    refSvTemp: number=0;
    refSvFr: number=0;
    refSvFc: number=0;
    refSvPeso: number=0;
    refSvTalla: number=0;
    //medico que crea la referencia/interconsulta
    idMedicoCrea: string="";
    estado: number=0;
    activo: number=1;
    tipo: number=1;
}

export class ContraReferenciaView{
    idReferencia: string="";
    fechaCreacion: Date;
    resultadoClinico: string="";
    ingresoDx1: number;
    ingresoDx2: number;
    ingresoDx3: number;
    ingresoDx4: number;
    ingresoDx5: number;
    ingresoDx6: number;
    egresoDx1: number;
    egresoDx2: number;
    egresoDx3: number;
    egresoDx4: number;
    egresoDx5: number;
    egresoDx6: number;
    proced1: number;
    proced2: number;
    proced3: number;
    proced4: number;
    proced5: number;
    proced6: number;
    manejoPaciente: string="";
    tratamientoConc: number;
    cont: string="";
    consultaSubsecuente: string="";
    idMedicoCref: string="";
    unidadMedica: string="";
    regionSanitaria: number;
}



export class TratamientoView {
    idTratamiento: number;
    fechaCreacion: Date;
    consultaId: number;
    catCie9Id: number;
    catalogKey: string;
    proNombre: string;
}

export class SignosVitales {
    private _peso: number;
    private _talla: number;
    private _imc: number;
    private _imcClasificacion: string;
    private _tensionArterial: TAView = new TAView();
    temperatura: string;
    frecCardiaca: number;
    frecRespiratoria: number;
    saturacionOxigeno: string;
    evn: number;

    constructor() {
        this._imc = null;
        this._tensionArterial = {sistolica: null, diastolica: null};
    }

    get sistolica(): number {
        return this._tensionArterial.sistolica;
    }

    set sistolica(value: number) {
        this._tensionArterial.sistolica = value;
    }

    get diastolica(): number {
        return this._tensionArterial.diastolica;
    }

    set diastolica(value: number) {
        this._tensionArterial.diastolica = value;
    }

    get tensionArterial(): TAView {
        return this._tensionArterial
    }

    set tensionArterial(value: TAView) {
        this._tensionArterial = value;
    }

    get imc(): number {
        return this._imc;
    }

    set imc(value: number) {
        this._imc = value;
    }

    get talla(): number {
        return this._talla;
    }

    set talla(value: number) {
        this._talla = value;
        this.calcIMC();
    }

    get peso(): number {
        return this._peso;
    }

    set peso(value: number) {
        this._peso = value;
        this.calcIMC();
    }

    private calcIMC() {
        if (this._peso && this._peso > 0 && this._talla && this._talla > 0) {
            let TALLA_CUAD = (this._talla / 100) * (this._talla / 100);
            this._imc = Math.round(((this._peso) / (TALLA_CUAD)) * 100) / 100;
        }
    }

    get imcClasificacion(): string {
        let IMC = this._imc;
        switch (true) {
            case (IMC === 0 || IMC === null):
                this._imcClasificacion = ``;
                break;
            case (IMC < 18):
                this._imcClasificacion = `Peso bajo. Necesario valorar signos de desnutrición`;
                break;
            case (IMC < 25):
                this._imcClasificacion = `Normal`;
                break;
            case (IMC < 27):
                this._imcClasificacion = `Sobrepeso`;
                break;
            case (IMC < 30):
                this._imcClasificacion = `Obesidad grado I. Riesgo relativo alto para desarrollar enfermedades cardiovasculares`;
                break;
            case (IMC < 40):
                this._imcClasificacion = `Obesidad grado II. Riesgo relativo muy alto para el desarrollo de enfermedades cardiovasculares`;
                break;
            case (IMC >= 40):
                this._imcClasificacion = `Obesidad grado III Extrema o Mórbida. Riesgo relativo extremadamente alto para el desarrollo de enfermedades cardiovasculares`;
                break;
        }
        return this._imcClasificacion;
    }

    set imcClasificacion(value: string) {

    }

    /**
     * Evaluación de la Tensión Arterial
     * @param fhNacimiento Date | string | number para calcular la edad
     */
    getEvalTA(fhNacimiento: number | Date | string): EvalTAView {
        if (isNullOrUndefined(fhNacimiento)) {
            return {evalSistolica: '', evalDiastolida: '', edadSegmentada: new SegmentedAgeView()}
        }

        let catalogarTA = (data: SegmentedAgeView, TA: TAView): EvalTAView => {
            let res = {evalSistolica: 'Normal', evalDiastolida: 'Normal', edadSegmentada: data};
            if (isNullOrUndefined(TA.sistolica)) {
                return {evalSistolica: '', evalDiastolida: '', edadSegmentada: data};
            }

            if (isNullOrUndefined(TA.diastolica)) {
                return {evalSistolica: '', evalDiastolida: '', edadSegmentada: data};
            }

            TA.sistolica = (isString(TA.sistolica) ? Number(TA.sistolica).valueOf() : TA.sistolica);
            TA.diastolica = (isString(TA.diastolica) ? Number(TA.diastolica).valueOf() : TA.diastolica);

            if (data.anios <= 1) {
                switch (true) {
                    case (data.semanas <= 6):
                        if (TA.sistolica < 70) {
                            res.evalSistolica = 'Fuera de rango : Menor a 70 ';
                        } else if (TA.sistolica > 100) {
                            res.evalSistolica = 'Fuera de rango : Mayor de 100';
                        }

                        if (TA.diastolica < 50) {
                            res.evalDiastolida = 'Fuera de rango : Menor a 50 ';
                        } else if (TA.diastolica > 68) {
                            res.evalDiastolida = 'Fuera de rango : Mayor a 68 ';
                        }
                        break;
                    case (data.anios <= 1):

                        if (TA.sistolica < 84) {
                            res.evalSistolica = 'Fuera de rango : Menor a 84 ';
                        } else if (TA.sistolica > 106) {
                            res.evalSistolica = 'Fuera de rango : Mayor de 106';
                        }

                        if (TA.diastolica < 56) {
                            res.evalDiastolida = 'Fuera de rango : Menor a 56 ';
                        } else if (TA.diastolica > 70) {
                            res.evalDiastolida = 'Fuera de rango : Mayor a 70 ';
                        }

                        break;
                }
                return res;
            } else if (data.anios <= 16) {
                switch (true) {
                    case (data.anios <= 2):
                        if (TA.sistolica < 98) {
                            res.evalSistolica = 'Fuera de rango : Menor a 98 ';
                        } else if (TA.sistolica > 106) {
                            res.evalSistolica = 'Fuera de rango : Mayor de 106';
                        }

                        if (TA.diastolica < 58) {
                            res.evalDiastolida = 'Fuera de rango : Menor a 58 ';
                        } else if (TA.diastolica > 70) {
                            res.evalDiastolida = 'Fuera de rango : Mayor a 70 ';
                        }
                        break;
                    case (data.anios <= 6):

                        if (TA.sistolica < 99) {
                            res.evalSistolica = 'Fuera de rango : Menor a 99 ';
                        } else if (TA.sistolica > 112) {
                            res.evalSistolica = 'Fuera de rango : Mayor de 112';
                        }

                        if (TA.diastolica < 64) {
                            res.evalDiastolida = 'Fuera de rango : Menor a 64 ';
                        } else if (TA.diastolica > 70) {
                            res.evalDiastolida = 'Fuera de rango : Mayor a 70 ';
                        }

                        break;
                    case (data.anios <= 13):

                        if (TA.sistolica < 104) {
                            res.evalSistolica = 'Fuera de rango : Menor a 104 ';
                        } else if (TA.sistolica > 124) {
                            res.evalSistolica = 'Fuera de rango : Mayor de 124';
                        }

                        if (TA.diastolica < 64) {
                            res.evalDiastolida = 'Fuera de rango : Menor a 64 ';
                        } else if (TA.diastolica > 86) {
                            res.evalDiastolida = 'Fuera de rango : Mayor a 86 ';
                        }

                        break;
                    case (data.anios <= 16):

                        if (TA.sistolica < 118) {
                            res.evalSistolica = 'Fuera de rango : Menor a 118 ';
                        } else if (TA.sistolica > 132) {
                            res.evalSistolica = 'Fuera de rango : Mayor de 132';
                        }

                        if (TA.diastolica < 70) {
                            res.evalDiastolida = 'Fuera de rango : Menor a 70 ';
                        } else if (TA.diastolica > 82) {
                            res.evalDiastolida = 'Fuera de rango : Mayor a 82 ';
                        }

                        break;
                }
                return res;
            } else if (data.anios > 16) {
                if (TA.sistolica < 110) {
                    res.evalSistolica = 'Fuera de rango : Menor a 110 ';
                } else if (TA.sistolica > 140) {
                    res.evalSistolica = 'Fuera de rango : Mayor de 140';
                }

                if (TA.diastolica < 70) {
                    res.evalDiastolida = 'Fuera de rango : Menor a 70 ';
                } else if (TA.diastolica > 90) {
                    res.evalDiastolida = 'Fuera de rango : Mayor a 90 ';
                }
                return res;

            } else {
                return {evalSistolica: '** ERROR **', evalDiastolida: '** ERROR **', edadSegmentada: data}
            }
        };

        if (!(fhNacimiento instanceof Date)) {
            fhNacimiento = new Date("" + fhNacimiento);
        }

        let mili = (new Date().getTime() - fhNacimiento.getTime()) / 864e5,
            semanas = mili / 7,
            meses = mili / 30.4375;
        let anios = Math.floor(mili / 365.24);
        let restoMeses: number = (mili - 365.24 * anios) / 30.4375;

        mili = Math.round(10 * mili) / 10;
        semanas = Math.round(10 * semanas) / 10;
        meses = Math.round(10 * meses) / 10;
        restoMeses = Math.round(10 * restoMeses) / 10;

        let segmentedAge: SegmentedAgeView = {
            dias: mili,
            semanas: semanas,
            meses: meses,
            restMeses: restoMeses,
            anios: anios
        };

        let resData = catalogarTA(segmentedAge, this._tensionArterial);
        return resData;
    }
}

export class SegmentedAgeView {
    dias: number;
    semanas: number;
    meses: number;
    restMeses: number;
    anios: number
}

export class TAView {
    sistolica: number;
    diastolica: number
}

export class EvalTAView {
    evalSistolica: string;
    evalDiastolida: string;
    edadSegmentada: SegmentedAgeView;

    toString() {
        return `Sistólica: ${this.evalSistolica} / Diastólica: ${this.evalDiastolida}`;
    }
}

export class CanalConsulta {
    id: number;
    descripcion: string;
}

export class TipoConsulta {
    id: number;
    descripcion: string;
}

export const ConsultTypes: TipoConsulta[] = [
    {id: 1, descripcion: 'Nueva'},
    {id: 2, descripcion: 'Interconsulta'},
    {id: 3, descripcion: 'Referencia'},
    {id: 4, descripcion: 'Subsecuente'},
    {id: 10, descripcion: 'RAPIDA'}
];

export class EstadoConsulta {
    id: number;
    descripcion: string;
}

export class EstatusConsulta {
    id: number;
    descripcion: string;
}

export class LaboralInhability {
    folio: number;
    days: number;
    insuranceType: string;
    startDate: Date;
    reason: string;
    type: string;
    accumulatedDays: number;
    attendingPhysician: PhysicianMedical = new PhysicianMedical();
    authorizerPhysician: PhysicianMedical = new PhysicianMedical();
}

export class PhysicianMedical {
    name: string;
    license: string;
}
