import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ControlUsuariosComponent } from './control-usuarios/control-usuarios.component';
import { TableroUsuarioComponent } from './control-usuarios/tablero-usuario/tablero-usuario.component';
import { AgregarUsuarioComponent } from './control-usuarios/agregar-usuario/agregar-usuario.component';
import { EliminarUsuarioComponent } from './control-usuarios/eliminar-usuario/eliminar-usuario.component';

import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { DetalleUsuarioComponent } from './control-usuarios/detalle-usuario/detalle-usuario.component';


@NgModule({
  declarations: [
    AppComponent,
    ControlUsuariosComponent,
    TableroUsuarioComponent,
    AgregarUsuarioComponent,
    EliminarUsuarioComponent,
    DetalleUsuarioComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],
  exports: [
    ReactiveFormsModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
