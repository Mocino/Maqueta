import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UsuariosComponent } from './page/usuarios/usuarios.component';
import { CajaComponent } from './page/caja/caja.component';
import { LayoutRoutingModule } from './layout-routing.module';
import { ModalComponent } from './page/modal/modal.component';
import { ContactosComponent } from './page/contactos/contactos.component';
import {MatProgressBarModule} from '@angular/material/progress-bar';
import { MatTableModule } from '@angular/material/table';
import {MatPaginatorModule} from '@angular/material/paginator';
import {MatCardModule} from '@angular/material/card';
import {   ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    ModalComponent,
    UsuariosComponent,
    CajaComponent,
    ContactosComponent,

  ],
  imports: [
    CommonModule,
    LayoutRoutingModule,
    MatProgressBarModule,
    MatTableModule,
    MatPaginatorModule,
    MatCardModule,
    ReactiveFormsModule
  ],
  exports: [

  ]
})
export class LayoutModule { }
