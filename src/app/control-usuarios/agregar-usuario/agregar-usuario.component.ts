import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { UsersServiceService } from 'src/app/services/usersService/users-service.service';

@Component({
  selector: 'app-agregar-usuario',
  templateUrl: './agregar-usuario.component.html',
  styleUrls: ['./agregar-usuario.component.css']
})
export class AgregarUsuarioComponent implements OnInit {

formEditUser: FormGroup;
listaUsuarios;
  constructor(private serviceUsers: UsersServiceService) { }

  ngOnInit(): void {
       this.initForm();

      /*  this.serviceUsers.getUsers().subscribe((data)=> {
           this.listaUsuarios=data;
           this.serviceUsers.guardarUsers(this.listaUsuarios);
           console.log(this.listaUsuarios);
           
       }); */
       this.listaUsuarios= this.serviceUsers.consultaUsers();
       if (!this.listaUsuarios) {
           this.serviceUsers.getUsers().subscribe((data)=> {
         this.listaUsuarios=data;
         this.serviceUsers.guardarUsers(this.listaUsuarios);
         }
     );
        }
  }

  initForm(){
    this.formEditUser = new FormGroup ({
        nombre: new FormControl('', [Validators.required]),
        email: new FormControl('', [Validators.required]),
        userName: new FormControl('', [Validators.required]),
        telefono: new FormControl(''),
        sitioWeb: new FormControl(''),
        compania: new FormControl(''),
        calle: new FormControl(''),
        suite: new FormControl(''),
        ciudad: new FormControl(''),
        codigoPostal: new FormControl('')
      
    })   
    
  }

  registrarUsuario(){
      let request = this.formEditUser.getRawValue();
      console.log(this.formEditUser);
      console.log(this.formEditUser.valid);
      console.log(request);
      let obj={
          'name':request.nombre,
          'email':request.email,
          'username':request.userName,
          'phone':request.telefono,
          'website':request.sitioWeb,
          'company':request.compania,
          'city':request.ciudad,
          'street':request.calle,
          'suite':request.suite,
          'zipcode':request.codigoPostal,
          
      }
      console.log(obj);
      this.serviceUsers.agregarUsers(obj);
      



  }


}
