import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UsersServiceService } from 'src/app/services/usersService/users-service.service';

@Component({
  selector: 'app-tablero-usuario',
  templateUrl: './tablero-usuario.component.html',
  styleUrls: ['./tablero-usuario.component.css']
})
export class TableroUsuarioComponent implements OnInit {

  constructor(
    private serviceUsers: UsersServiceService,
    private router: Router) { 

  }

  listaUsuarios;

  ngOnInit(): void {
   this.listaUsuarios= this.serviceUsers.consultaUsers();
      if (!this.listaUsuarios) {
          this.serviceUsers.getUsers().subscribe((data)=> {
        this.listaUsuarios=data;
        this.serviceUsers.guardarUsers(this.listaUsuarios);
        }
    );
      }
    
      


      
  }

  borrarUsuario(index:number){

   //var {this.listaUsuarios[0],...this.listaUsuarios} = this.listaUsuarios;
  this.listaUsuarios.splice(index, 1);
   console.log(this.listaUsuarios);
   
  }

  detalleUsuario(id:number){
      console.log('jbsjh');
      
    this.router.navigate([`/detalle-usuario/${id}`]);
  }
  

}
