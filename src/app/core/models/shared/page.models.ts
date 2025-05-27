// src/app/core/models/shared/page.models.ts

// TODO startDate and endDate should be Date type but request to backend requires string by now
export class PageRequest {
    active: boolean;
    name: string;
    page: number;
    size: number;
    selectGroup?: number;
    orderColumn: string;
    orderType: string;
    startDate?: Date | number;
    endDate?: Date | number;
    datosBusqueda?: string | Date;
    titulo?: string;
  }
  
  export class PageRequestCanalizado extends PageRequest {
    idUser: number;
  }
  
  export class PageRequestAtendidos extends PageRequest {
    idUser: number;
  }
  
  export class CluesRequest {
    fkEntidad: string;
    claveInstitucion: string;
  }
  
  export class PageImpl<T> {
    content: Array<T> = [];
    first: boolean;
    last: boolean;
    number: number;
    numberOfElements: number;
    size: number;
    totalElements: number;
    totalPages: number;
  }
  