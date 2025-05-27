import {Injectable} from '@angular/core';
import {I18nService} from "../i18n";

declare var $: any;

@Injectable()
export class NotificationService {
    private _confirm1: string = this.i18n.getTranslation("Operation complete");
    private _aboutToDelete: string = this.i18n.getTranslation("You are about to delete");
    private _areYouSure: string = this.i18n.getTranslation("Are you sure?");
    private _activar: string = this.i18n.getTranslation("Activate?");
    private _confirmarActivar: string = this.i18n.getTranslation("You are about to activate the format");
    private _errorActivating: string = this.i18n.getTranslation("Error activating");
    private _desactivar: string = this.i18n.getTranslation("Deactivate?");
    private _confirmarDesactivar: string = this.i18n.getTranslation("You are about to deactivate the format");
    private _errorDeactivating: string = this.i18n.getTranslation("Error deactivating");
    private _delete: string = this.i18n.getTranslation("Delete");
    private _errorDeleting: string = this.i18n.getTranslation("Error deleting");

    constructor(private i18n: I18nService) {
        i18n.subscribe(() => {
            this._confirm1 = this.i18n.getTranslation("Operation complete");
            this._aboutToDelete = this.i18n.getTranslation("You are about to delete");
            this._areYouSure = this.i18n.getTranslation("Are you sure?");
            this._activar = this.i18n.getTranslation("Activate?");
            this._confirmarActivar = this.i18n.getTranslation("You are about to activate the format");
            this._errorActivating = this.i18n.getTranslation("Error activating");
            this._desactivar = this.i18n.getTranslation("Deactivate?");
            this._confirmarDesactivar = this.i18n.getTranslation("You are about to deactivate the format");
            this._errorDeactivating = this.i18n.getTranslation("Error deactivating");
            this._delete = this.i18n.getTranslation("Delete");
            this._errorDeleting = this.i18n.getTranslation("Error deleting");
        }, null)
    }

    smallBox(data, cb?) {
        $.smallBox(data, cb)
    }

    bigBox(data, cb?) {
        $.bigBox(data, cb)
    }

    smartMessageBox(data, cb?) {
        $.SmartMessageBox(data, cb)
    }

    smartMessageBox2(data, cb?) {
        const dialogHtml = `
          <div class="custom-smart-box-overlay">
            <div class="custom-smart-box">
              <div class="custom-smart-box-header">${data.title}</div>
              <div class="custom-smart-box-content">${data.content}</div>
              <div class="custom-smart-box-footer">
                ${data.buttons ? data.buttons.split('[').map(button => {
                  const trimmedButton = button.trim().replace(']', '');
                  return trimmedButton ? `<button class="button">${trimmedButton}</button>` : '';
                }).join(' ') : ''}
              </div>
            </div>
          </div>
        `;
      
        const $dialog = $(dialogHtml).appendTo('body');
      
        $dialog.find('.button').on('click', (event) => {
            const buttonText = $(event.currentTarget).text();
            $dialog.remove();
            if (cb) cb(buttonText);
          });
      
        // Aplica estilos directamente
        $dialog.css({
          'position': 'fixed',
          'top': 0,
          'left': 0,
          'width': '100%',
          'height': '100%',
          'background-color': 'rgba(0,0,0,0.5)',
          'display': 'flex',
          'justify-content': 'center',
          'align-items': 'center',
          'z-index': 9999
        });
      
        $dialog.find('.custom-smart-box').css({
          'max-width': '500px',
          'background-color': '#f5f5f5',
          'color': '#333',
          'border-radius': '5px',
          'box-shadow': '0 0 10px rgba(0, 0, 0, 0.1)',
          'padding': '20px',
          'text-align': 'center'
        });
      
        $dialog.find('.custom-smart-box-header').css({
          'font-size': '18px',
          'margin-bottom': '10px'
        });
      
        $dialog.find('.custom-smart-box-content').css({
          'margin-bottom': '20px'
        });
      
        $dialog.find('.custom-smart-box-footer .button').css({
          'background-color': '#3399FF',
          'color': '#fff',
          'padding': '10px 20px',
          'border': 'none',
          'cursor': 'pointer',
          'margin-right': '10px'
        });
      
        $dialog.find('.custom-smart-box-footer .button:hover').css({
          'background-color': '#3399FF'
        });
      }

    smallBoxError(data, cb?) {
        const deftopt: IPropNotifData = {
            title: 'Error',
            content: 'Error',
            color: '#df295f',
            icon: 'fa fa-warning shake animated',
            timeout: 5000
        };
        this.smallBox(Object.assign({}, deftopt, data), cb);
    }

    smallBoxSuccess(data, cb?) {
        const deftopt: IPropNotifData = {
            title: 'Hecho!',
            content: 'Ok',
            color: '#739E73',
            icon: 'fa fa-check shake animated',
            timeout: 5000
        };
        this.smallBox(Object.assign({}, deftopt, data), cb);
    }

    bigBoxSuccess(data: IPropNotifData, cb?) {
        const deftopt: IPropNotifData = {
            title: 'Operación completada',
            content: 'Ok',
            color: '#739E73',
            icon: 'fa fa-check shake animated',
            timeout: 5000
        };

        this.bigBox(Object.assign({}, deftopt, data), cb);

    }

    bigBoxError(data: IPropNotifData, cb?) {
        const deftopt: IPropNotifData = {
            title: 'Error en la operación',
            content: 'Error',
            color: '#df295f',
            icon: 'fa fa-warning shake animated',
            timeout: 5000
        };

        this.bigBox(Object.assign({}, deftopt, data), cb);

    }

    get confirm1(): string {
        return this._confirm1;
    }

    get aboutToDelete(): string {
        return this._aboutToDelete;
    }

    get areYouSure(): string {
        return this._areYouSure;
    }

    get activar(): string {
        return this._activar;
    }

    get confirmarActivar(): string {
        return this._confirmarActivar;
    }

    get errorActivating(): string {
        return this._errorActivating;
    }

    get desactivar(): string {
        return this._desactivar;
    }

    get confirmarDesactivar(): string {
        return this._confirmarDesactivar;
    }

    get errorDeactivating(): string {
        return this._errorDeactivating;
    }

    get delete(): string {
        return this._delete;
    }

    get errorDeleting(): string {
        return this._errorDeleting;
    }

}

interface IPropNotifData {
    title?: string;
    content?: string;
    color?: string;
    icon?: string;
    timeout?: number;
    number?: number;
}
