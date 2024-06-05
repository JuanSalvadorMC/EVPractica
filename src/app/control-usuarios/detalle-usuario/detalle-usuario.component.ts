import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { UsersServiceService } from 'src/app/services/usersService/users-service.service';

@Component({
  selector: 'app-detalle-usuario',
  templateUrl: './detalle-usuario.component.html',
  styleUrls: ['./detalle-usuario.component.css']
})
export class DetalleUsuarioComponent implements OnInit {

    listaUsuarios;
    usuarioDetalle;
    idUsuario;

  constructor(
    private activatedRoute: ActivatedRoute,
    private serviceUsers: UsersServiceService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(resp => { 
        this.idUsuario=resp.id;
        if (!this.idUsuario) {
            this.router.navigate([`/`]);
        }
        console.log(resp.id);
      });


      this.listaUsuarios= this.serviceUsers.consultaUsers();


   if (!this.listaUsuarios) {
      this.serviceUsers.getUsers().subscribe((data)=> {
    this.listaUsuarios=data;
    this.serviceUsers.guardarUsers(this.listaUsuarios);
    this.llenadoInfo();
        }
        ); 
    }else{
        this.llenadoInfo();
    
   }
  

  }

  llenadoInfo(){

    this.usuarioDetalle=this.listaUsuarios.filter((e) => e.id==this.idUsuario );
    this.usuarioDetalle=this.usuarioDetalle[0];
    console.log(this.usuarioDetalle);
    this.usuarioDetalle.company.name?this.usuarioDetalle.company=this.usuarioDetalle.company.name:'';
    this.usuarioDetalle.address?this.usuarioDetalle.street=this.usuarioDetalle.address.street:'';
    this.usuarioDetalle.address?this.usuarioDetalle.suite=this.usuarioDetalle.address.suite:'';
    this.usuarioDetalle.address?this.usuarioDetalle.zipcode=this.usuarioDetalle.address.zipcode:'';
    

    /* this.usuarioDetalle.company=this.usuarioDetalle.company.name;
    this.usuarioDetalle.company=this.usuarioDetalle.company.name;
    this.usuarioDetalle.company=this.usuarioDetalle.company.name;
    this.usuarioDetalle.company=this.usuarioDetalle.company.name;
    this.usuarioDetalle.company=this.usuarioDetalle.company.name; */


    console.log(this.usuarioDetalle);
    


       

    }
 
}
