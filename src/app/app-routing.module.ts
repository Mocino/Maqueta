import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'maqueta',
    loadChildren:() => import ('./layout/layout.module').then(m=>m.LayoutModule)
  },

  {
    path: '**',
    redirectTo: 'maqueta'
  },
]

@NgModule({
  imports: [
    RouterModule.forRoot(routes),
  ],
  exports: [
    RouterModule
  ],
  declarations: [],
  providers: [],
})
export class AppRoutingModule { }
