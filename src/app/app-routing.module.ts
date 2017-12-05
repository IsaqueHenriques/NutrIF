import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginUsuarioComponent } from './login-usuario/login-usuario.component';
import { TelaPrincipalComponent } from './tela-principal/tela-principal.component';

const routes: Routes = [
  {
  path: 'telaprincipal', component: TelaPrincipalComponent
  },
  {
    path:'', component: LoginUsuarioComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
