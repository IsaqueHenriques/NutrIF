import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UsuarioLoginComponent } from './usuario/usuario-login/usuario-login.component';
import { UsuarioTelaComponent } from './usuario/usuario-tela/usuario-tela.component';

const routes: Routes = [
  {
    path: '', component: UsuarioLoginComponent
  },
  { path: 'usuario-tela', component: UsuarioTelaComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
