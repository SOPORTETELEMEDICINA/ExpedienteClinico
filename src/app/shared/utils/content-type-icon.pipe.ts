/**
 * Pipe para convertir el content-type enviado a un icono válido de font awesome
 */

import {Pipe, PipeTransform} from '@angular/core';
import {DomSanitizer} from '@angular/platform-browser';


@Pipe({
    name: 'iconByContentTypePipe'
})

export class ContentTypeIconPipe implements PipeTransform {
    constructor(private domSn: DomSanitizer) {}

    transform(contentType: string): any {
        switch (contentType) {
            case 'application/msword':
            case 'application/vnd.openxmlformats-officedocument.wordprocessingml.document':
            case 'application/vnd.oasis.opendocument.text':
                return 'fa fa-file-word-o';
            case 'application/vnd.ms-excel':
            case 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet':
                return 'fa fa-file-excel-o';
            case 'application/vnd.ms-powerpoint':
            case 'application/vnd.openxmlformats-officedocument.presentationml.presentation':
                return 'fa fa-file-powerpoint-o ';
            case 'text/plain':
                return 'fa fa-file-text';
            case 'application/pdf':
                return  'fa fa-file-pdf-o';
            case 'application/zip':
                return 'fa fa-file-archive-o';
            case 'image/png':
            case 'image/jpeg':
            case 'image/gif':
            case 'image/bmp':
                return 'fa fa-file-image-o';
            default: return 'fa fa-file-o';
        }
    }
}