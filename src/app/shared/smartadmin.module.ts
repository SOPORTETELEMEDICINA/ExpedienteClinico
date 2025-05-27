import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormsModule} from '@angular/forms';
import {RouterModule} from '@angular/router';
import {
    ModalModule,
    ButtonsModule,
    TooltipModule,
    BsDropdownModule,
    ProgressbarModule,
    AlertModule,
    TabsModule,
    AccordionModule
} from 'ngx-bootstrap'
import {PopoverModule} from 'ngx-popover';
import {NiomedicLayoutModule} from './layout'
import {I18nModule} from './i18n/i18n.module';
import {VoiceControlModule} from './voice-control/voice-control.module';
import {NiomedicWidgetsModule} from './widgets/smartadmin-widgets.module';
import {UtilsModule} from './utils/utils.module';
import {ChatModule} from './chat/chat.module';
import {StatsModule} from './stats/stats.module';
import {InlineGraphsModule} from './graphs/inline/inline-graphs.module';
import {SmartadminFormsLiteModule} from './forms/smartadmin-forms-lite.module';
import {SmartProgressbarModule} from './ui/smart-progressbar/smart-progressbar.module';
import {HasPermissionDirective} from './haspermission/hasPermission.directive';
import {SharedModule} from './shared.module';
import {NioPaginationModule} from "./nio-pagination/nio-pagination.module";

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        RouterModule,
        SharedModule,
        // AgGridModule.withComponents([])
    ],
    declarations: [],
    exports: [
        CommonModule,
        FormsModule,
        RouterModule,
        SharedModule,
        ModalModule,
        ButtonsModule,
        AccordionModule,
        AlertModule,
        TabsModule,
        TooltipModule,
        BsDropdownModule,
        ProgressbarModule,
        PopoverModule,
        NiomedicLayoutModule,
        I18nModule,
        UtilsModule,
        SmartadminFormsLiteModule,
        SmartProgressbarModule,
        InlineGraphsModule,
        NiomedicWidgetsModule,
        ChatModule,
        StatsModule,
        VoiceControlModule,
        HasPermissionDirective,
        NioPaginationModule
    ]
})
export class SmartadminModule {
}