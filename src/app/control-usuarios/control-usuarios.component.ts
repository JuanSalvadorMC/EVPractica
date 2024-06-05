import { Component, OnInit } from '@angular/core';
import { UsersServiceService } from '../services/usersService/users-service.service';

@Component({
  selector: 'app-control-usuarios',
  templateUrl: './control-usuarios.component.html',
  styleUrls: ['./control-usuarios.component.css']
})
export class ControlUsuariosComponent implements OnInit {


    listaUsuarios:[any];

  constructor(private serviceUsers: UsersServiceService) { }

  ngOnInit(): void {
   
        this.serviceUsers.consultaUsers();
  
  }

}
