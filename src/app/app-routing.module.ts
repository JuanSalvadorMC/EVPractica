import { Injectable } from '@angular/core';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TableroUsuarioComponent } from './control-usuarios/tablero-usuario/tablero-usuario.component';
import { AgregarUsuarioComponent } from './control-usuarios/agregar-usuario/agregar-usuario.component';
import { EliminarUsuarioComponent } from './control-usuarios/eliminar-usuario/eliminar-usuario.component';
import { ControlUsuariosComponent } from './control-usuarios/control-usuarios.component';
import { DetalleUsuarioComponent } from './control-usuarios/detalle-usuario/detalle-usuario.component';
const rutasMain: Routes = [
    {
        path:'',component:TableroUsuarioComponent,
    },
    {
        path:'agregar',component: AgregarUsuarioComponent,
    },
    {
        path:'detalle-usuario/:id',component: DetalleUsuarioComponent,
    },
    {
        path:'**',
        redirectTo:'auth/login'
    },
];

@NgModule({
  imports: [
      RouterModule.forRoot(rutasMain)
    ],
  exports: [
      RouterModule
    ]
})
export class AppRoutingModule { }
