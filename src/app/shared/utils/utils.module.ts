import {NgModule} from '@angular/core';
import {MomentPipe} from './moment.pipe';
import {TimeDirective} from './time.directive';
import {FieldFilterPipe} from './field-filter.pipe';
import {BodyService} from './body.service';
import {NotificationService} from './notification.service';
import {ToggleActiveDirective} from './toggle-active.directive';
import {AvatarUrlPipe} from './avatar-image-pipe';
import {ContentTypeIconPipe} from './content-type-icon.pipe';
import {LeftPadNumberPipe} from './left-pad-number-pipe';
import {GeneroPipe} from './genero.pipe';
import {EdoCivilPipe} from './edo-civil.pipe';
import {I18nPipe} from '../i18n';
import {DeleteNullWordPipe} from './delete-null-word.pipe';
import {NumerosDirective} from './numeros.directive';
import {NumerosDirective2} from './numeros2.directive';
import {PhoneNumberPipe} from './phone-number.pipe';
import {KeyvaluePipe} from "./keyvalue.pipe";
import {CapitalizePipe} from "./capitalize.pipe";
import {UpperCaseDirective} from './upperCase.directive';
import {DashEnfermeraPipe} from './dash-enfermera.pipe';
import {HexColorFromStringPipe} from './hex-color-from-string.pipe';
import {PatientsPipe} from "./patients.pipe";

@NgModule({
    declarations: [
        ToggleActiveDirective,
        MomentPipe,
        TimeDirective,
        FieldFilterPipe,
        AvatarUrlPipe,
        ContentTypeIconPipe,
        LeftPadNumberPipe,
        DashEnfermeraPipe,
        GeneroPipe,
        EdoCivilPipe,
        DeleteNullWordPipe,
        NumerosDirective,
        NumerosDirective2,
        PhoneNumberPipe,
        KeyvaluePipe,
        CapitalizePipe,
        UpperCaseDirective,
        HexColorFromStringPipe,
        PatientsPipe
    ],
    exports: [
        ToggleActiveDirective,
        MomentPipe,
        TimeDirective,
        FieldFilterPipe,
        DashEnfermeraPipe,
        AvatarUrlPipe,
        ContentTypeIconPipe,
        LeftPadNumberPipe,
        GeneroPipe,
        EdoCivilPipe,
        DeleteNullWordPipe,
        NumerosDirective,
        NumerosDirective2,
        PhoneNumberPipe,
        KeyvaluePipe,
        CapitalizePipe,
        UpperCaseDirective,
        HexColorFromStringPipe,
        PatientsPipe
    ],
    providers: [
        BodyService,
        NotificationService,
        I18nPipe,
        CapitalizePipe
    ]
})
export class UtilsModule {
    static forRoot() {
        return {
            ngModule: UtilsModule,
            providers: [BodyService, NotificationService]
        }
    }
}
