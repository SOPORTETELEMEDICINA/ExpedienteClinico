import {Pipe, PipeTransform} from "@angular/core";
import {PatientView} from "../../+paciente/paciente.classes";

@Pipe({
    name: "patientsFilter"
})
export class PatientsPipe implements PipeTransform {
    transform(patients: PatientView[], filter: string): PatientView[] {
        if (filter) {
            return patients
                .filter((patient) => {
                    return patient.nombre && patient.nombre.toLowerCase().includes(filter.toLowerCase())
                        || patient.apellidoPaterno && patient.apellidoPaterno.toLowerCase().includes(filter.toLowerCase())
                        || patient.apellidoMaterno && patient.apellidoMaterno.toLowerCase().includes(filter.toLowerCase());
                });
        }

        return patients;
    }
}
