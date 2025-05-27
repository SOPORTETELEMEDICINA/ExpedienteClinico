export class GroupView {
    groupId: number;
    groupName: string;
    createdDate: Date;
    active: boolean;
    imagen:string;
    ticketTypeView: Array<TicketTypeView> = [];
}

export class TicketTypeView {
    idTicketType: number;
    typeTicket: string;
    ticketCategoryView: Array<TicketCategoryView> = [];
}

export class TicketCategoryView {
    idTicketCategory: number;
    categoryName: string;
}