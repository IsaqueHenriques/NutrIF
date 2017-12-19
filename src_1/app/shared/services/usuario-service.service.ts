import { Injectable } from '@angular/core';
import { ModelUsuario } from '../models/model-usuario';

@Injectable()
export class UsuarioServiceService {

  usuario: Array<ModelUsuario> = [];
  pesquisado: Array<ModelUsuario> = [];
  usuario_que_logou: ModelUsuario;

  constructor() { 
    this.usuario = [{nome: 'John', email: 'john@gmail.com', senha: '123', data_de_nascimento: new Date(2000, 9, 22) }];
    this.usuario = [{nome: 'Nancy', email: 'nancy@gmail.com', senha: '1234', data_de_nascimento: new Date(2002, 3, 21) }];
  }

  usuario_adicionar(mais_um: ModelUsuario) {
    if (this.usuario.push(mais_um))
      return true;
  }

  usuario_login(quem_entra: ModelUsuario) {
    for(let i = this.usuario.length - 1; i >=0; i--){
      if(this.usuario[i].email == quem_entra.email && this.usuario[i].senha == quem_entra.senha){
        this.usuario_que_logou = quem_entra;
        return true;
      }
    }
  }

  usuario_editar(quem_muda: ModelUsuario, mudado_ja: ModelUsuario ){
    for(let i = this.usuario.length - 1; i >= 0; i--){
      if(this.usuario[i].nome == quem_muda.nome && this.usuario[i].email == quem_muda.email && 
        this.usuario[i].senha == quem_muda.senha){
          this.usuario.splice(i,1);
          this.usuario.push(mudado_ja);
          return true;
        }
    }
  }

  usuario_apagar(excluido: ModelUsuario){
    for(let i = this.usuario.length - 1; i >= 0; i--){
      if(this.usuario[i].nome == excluido.nome && this.usuario[i].email == excluido.email && 
        this.usuario[i].senha == excluido.senha){
          this.usuario.splice(i,1);
          return true;
        }
    }
  }

  usuario_pesquisar(pesquisa: string){
    
    for(let i = this.usuario.length - 1; i >= 0; i--){
      if(this.usuario[i].nome == pesquisa){
          this.pesquisado.push(this.usuario[i]);
        }
    }
    return this.pesquisado;
  }

}
