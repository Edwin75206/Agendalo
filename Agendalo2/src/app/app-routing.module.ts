import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LandingPageComponent } from './modulos/LandingPage/landing-page/landing-page.component';
import { EnSitioComponent } from './modulos/En-Sitio/en-sitio/en-sitio.component';
import { SucursalComponent } from './modulos/Sucursales/sucursal/sucursal.component';
import { AyudaComponent } from './modulos/Ayuda/ayuda/ayuda.component';
import { SeguridadComponent } from './modulos/Seguridad/seguridad/seguridad.component';
import { ManualComponent } from './modulos/Manual/manual/manual.component';
import { PoliticasComponent } from './modulos/Politicas/politicas/politicas.component';
import { ManualEmpresaComponent } from './modulos/Manual/manualEmpresa/manual-empresa/manual-empresa.component';
import {MatDialogModule} from '@angular/material/dialog';
import { TerminosPoliticasComponent } from './modulos/Manual/terminos-politicas/terminos-politicas.component';
import { RegistroUsuarioComponent } from './modulos/registro-usuario/registro-usuario.component';
import { RegistroEmpresaComponent } from './modulos/registro-empresa/registro-empresa.component';
import { AgendarComponent } from './modulos/agendar/agendar.component';
import { LoginComponent } from './modulos/login/login/login.component';
import { PerfilUsuarioComponent } from './modulos/perfil-usuario/perfil-usuario/perfil-usuario.component';
import { AdministradorComponent } from './modulos/administrador/administrador/administrador.component';
import { EditarUsuarioComponent } from './modulos/editarUsuario/editar-usuario/editar-usuario.component';
import { ClimaComponent } from './modulos/clima/clima/clima.component';
import { EditarServiciosComponent } from './modulos/editarServicios/editar-servicios/editar-servicios.component';

const routes: Routes = [
  {path:'landing', component:LandingPageComponent},
  {path:'enSitio', component:EnSitioComponent},
  {path:'sucursal', component:SucursalComponent},
  {path:'ayuda', component:AyudaComponent},
  {path:'seguridad', component:SeguridadComponent},
  {path:'manualUsuario', component:ManualComponent},
  {path:'politicas', component:PoliticasComponent},
  {path:'manualEmpresa', component:ManualEmpresaComponent},
  {path: 'terminos-politicas', component:TerminosPoliticasComponent},
  {path: 'registroUsuario', component:RegistroUsuarioComponent},
  {path: 'registroEmpresa', component:RegistroEmpresaComponent},
  {path: 'agendar', component:AgendarComponent},
  {path: 'login', component:LoginComponent},
  {path: 'perfil-usuario', component:PerfilUsuarioComponent},
  {path: 'administrador', component:AdministradorComponent},
  { path: 'editar-usuario/:id', component: EditarUsuarioComponent },
  {path: 'clima', component:ClimaComponent},
  { path: 'editar-servicio/:id', component: EditarServiciosComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule,MatDialogModule]
})
export class AppRoutingModule { }
