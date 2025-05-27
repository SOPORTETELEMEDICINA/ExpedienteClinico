// especialidad.model.ts
export class EspecialidadView {
    cedula: string;
    especialidad: string;
    fechaCreacion: Date;
    fechaValidacion: Date;
    idEspecialidad: string;
    imagenCedula: string;
    imagenDiploma: string;
    universidad: string;
    validado: boolean;
    imgCedula64: string;
    imgTitulo64: string;
    nombreImagenCedula: string;
    nombreImagenDiploma: string;
  }
  export class EspecialidadViewPlus extends EspecialidadView {
    imgCedula: FormData;
    override imgCedula64: string;
    imgCedulaFile: File;
    imgTituloFile: File;
    imgTitulo: FormData;
    override imgTitulo64: string;

    constructor(esp?: EspecialidadView) {
        super();
        this.imgCedula = new FormData();
        this.imgCedula64 = '';
        this.imgTitulo = new FormData();
        this.imgTitulo64 = '';
        if (esp) {
            for (const i in esp) {
                super[i] = esp[i];
            }
        } else {
            this.idEspecialidad = null;
            this.cedula = null;
            this.especialidad = null;
            this.imagenCedula = null;
            this.imagenDiploma = null;
            this.universidad = null;
        }
    }

    getEspecialidad(): EspecialidadView {
        return <EspecialidadView> this;
    }
}
