import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UsuariosComponent } from './page/usuarios/usuarios.component';
import { CajaComponent } from './page/caja/caja.component';
import { LayoutRoutingModule } from './layout-routing.module';
import { ModalComponent } from './page/modal/modal.component';


@NgModule({
  declarations: [
    UsuariosComponent,
    CajaComponent,
    ModalComponent,

  ],
  imports: [
    CommonModule,
    LayoutRoutingModule,
  ]
})
export class LayoutModule { }
