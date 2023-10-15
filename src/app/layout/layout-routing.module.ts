import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { UsuariosComponent } from './page/usuarios/usuarios.component';
import { CajaComponent } from './page/caja/caja.component';
import { ContactosComponent } from './page/contactos/contactos.component';
const routes: Routes = [
  {
    path: 'usuarios',
    component: UsuariosComponent,
  },
  {
    path: 'cajas',
    component: CajaComponent,
  },
  {
    path: 'contactos',
    component: ContactosComponent,
  }
]

@NgModule({
  imports: [
    RouterModule.forChild(routes)
  ],
  exports: [
    RouterModule
  ],
})
export class LayoutRoutingModule { }
