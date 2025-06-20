import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CoreRoutingModule } from './core-routing.module';
import { CoreComponent } from './core.component';
import { HeaderComponent } from '../common-component/header/header.component';
import { SidebarComponent } from '../common-component/sidebar/sidebar.component';
import { SharedModule } from '../shared/shared.module';
import { ModalComponent } from './modal/modal.component';

import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { ShaService } from '../shared/jssha/jssha.service';

@NgModule({
  declarations: [
    CoreComponent,
    HeaderComponent,
    SidebarComponent,
    ModalComponent,
  ],
  imports: [ 
    CommonModule,
    CoreRoutingModule, MatAutocompleteModule,
    MatFormFieldModule,
    MatInputModule,
    SharedModule
  ],
  exports: [],
  providers: [ShaService]
})
export class CoreModule { }
