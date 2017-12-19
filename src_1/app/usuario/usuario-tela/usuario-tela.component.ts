import { Component, OnInit, ViewChild } from '@angular/core';
import { ModelUsuario } from '../../shared/models/model-usuario';
import { UsuarioServiceService } from '../../shared/services/usuario-service.service';
import { MatPaginator, MatSort, MatTableDataSource } from '@angular/material';

@Component({
  selector: 'app-usuario-tela',
  templateUrl: './usuario-tela.component.html',
  styleUrls: ['./usuario-tela.component.css']
})
export class UsuarioTelaComponent implements OnInit {
  ngOnInit() {
  }

  displayedColumns = ['id', 'nome', 'email'];
  dataSource: MatTableDataSource<ModelUsuario>;

  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;
  user: ModelUsuario = new ModelUsuario();

  constructor(private service: UsuarioServiceService)
  {
      const usuarios: ModelUsuario[] =[];
      const u: Array<ModelUsuario> = this.service.usuario;
      for ( let i = 0; i <= u.length-1; i++ )
      {
        usuarios.push(u[i]);
      }

      // Assign the data to the data source for the table to render
      this.dataSource = new MatTableDataSource(usuarios);
  }

  /**
   * Set the paginator and sort after the view init since this component will
   * be able to query its view for the initialized paginator and sort.
   */
  ngAfterViewInit()
  {
      this.dataSource.paginator = this.paginator;
      this.dataSource.sort = this.sort;
  }

  applyFilter(filterValue: string)
  {
      filterValue = filterValue.trim(); // Remove whitespace
      filterValue = filterValue.toLowerCase(); // Datasource defaults to lowercase matches
      this.dataSource.filter = filterValue;
  }
}