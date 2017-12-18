import { Component, OnInit } from '@angular/core';
import { ModelUsuario } from '../../shared/models/model-usuario';
import { UsuarioServiceService } from '../../shared/services/usuario-service.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-usuario-login',
  templateUrl: './usuario-login.component.html',
  styleUrls: ['./usuario-login.component.css']
})
export class UsuarioLoginComponent implements OnInit {

  usuario: ModelUsuario = new ModelUsuario();

  constructor(private service: UsuarioServiceService, private rotear: Router) { }

  ngOnInit() {
  }

  logar(){
    if(this.service.usuario_login(this.usuario))
      console.log('Logado com sucesso');
      this.rotear.navigate(['/usuario-tela']);
  }

}
