import { Injectable } from '@angular/core';
//import { GetUsersService } from '../../service/get-users.service';
import { HttpClient, HttpHeaders, HttpClientModule } from '@angular/common/http';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class UsersServiceService {

usersUrl='https://jsonplaceholder.typicode.com/users';

 httpOptions = {
    headers: new HttpHeaders({ 
      'Access-Control-Allow-Origin':'*',
      'Authorization':'authkey',
      'userid':'1'
    })
  };

  constructor(private http: HttpClient) { }
  listaUsuarios: [any];
  llamada: boolean=false;

  getUsers(){
    this.llamada;
    return this.http.get<any[]>(this.usersUrl,this.httpOptions);
  }
  guardarUsers(usuarios:[any]){
      this.listaUsuarios=usuarios;
      console.log(this.listaUsuarios);
      
  }
  agregarUsers(usuario:{}){    
    let index=0; 
      if (this.listaUsuarios.length>0) {
         index= this.listaUsuarios?.reduce((previous, current) => {
            return current.id > previous.id ? current : previous;
          }).id +1;
       
      }
      let id= {
        'id': index?index:0
    }
    usuario=Object.assign(id,usuario);
    this.listaUsuarios.push(usuario);
  }

  consultaUsers(){      
    return this.listaUsuarios;
  }
  
}
