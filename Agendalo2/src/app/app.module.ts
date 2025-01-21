import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule} from '@angular/material/icon'
import { FormsModule } from '@angular/forms';
import { MatDialogModule } from '@angular/material/dialog';


import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { BannerimageComponent } from './components/bannerimage/bannerimage/bannerimage.component';
import { LandingPageComponent } from './modulos/LandingPage/landing-page/landing-page.component';
import { EnSitioComponent } from './modulos/En-Sitio/en-sitio/en-sitio.component';
import { FooterComponent } from './components/footer/footer/footer.component';
import { SucursalComponent } from './modulos/Sucursales/sucursal/sucursal.component';
import { AyudaComponent } from './modulos/Ayuda/ayuda/ayuda.component';
import { SeguridadComponent } from './modulos/Seguridad/seguridad/seguridad.component';
import { PoliticasComponent } from './modulos/Politicas/politicas/politicas.component';
import { ManualComponent } from './modulos/Manual/manual/manual.component';
import { ManualEmpresaComponent } from './modulos/Manual/manualEmpresa/manual-empresa/manual-empresa.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { TerminosPoliticasComponent } from './modulos/Manual/terminos-politicas/terminos-politicas.component';
import { RegistroUsuarioComponent } from './modulos/registro-usuario/registro-usuario.component';
import { RegistroEmpresaComponent } from './modulos/registro-empresa/registro-empresa.component';
import { AgendarComponent } from './modulos/agendar/agendar.component';
import { MensajeUserComponent } from './components/shared/mensaje-user/mensaje-user/mensaje-user.component';
import { HttpClientModule } from '@angular/common/http';
import { LoginComponent } from './modulos/login/login/login.component';
import { PerfilUsuarioComponent } from './modulos/perfil-usuario/perfil-usuario/perfil-usuario.component';
import { DialogErrorComponent } from './components/shared/dialog-error/dialog-error/dialog-error.component';
import { AdministradorComponent } from './modulos/administrador/administrador/administrador.component';
import { EditarUsuarioComponent } from './modulos/editarUsuario/editar-usuario/editar-usuario.component';
import { ClimaComponent } from './modulos/clima/clima/clima.component';
import { ComentariosComponent } from './modulos/cometarios/comentarios/comentarios.component';
import { EditarServiciosComponent } from './modulos/editarServicios/editar-servicios/editar-servicios.component';



@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    BannerimageComponent,
    LandingPageComponent,
    EnSitioComponent,
    FooterComponent,
    SucursalComponent,
    AyudaComponent,
    SeguridadComponent,
    PoliticasComponent,
    ManualComponent,
    ManualEmpresaComponent,
    TerminosPoliticasComponent,
    RegistroUsuarioComponent,
    RegistroEmpresaComponent,
    AgendarComponent,
    MensajeUserComponent,
    LoginComponent,
    PerfilUsuarioComponent,
    DialogErrorComponent,
    AdministradorComponent,
    EditarUsuarioComponent,
    ClimaComponent,
    ComentariosComponent,
    EditarServiciosComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatInputModule,
    MatFormFieldModule,
    MatButtonModule,
    MatIconModule,
    FormsModule,
    MatDialogModule,
    HttpClientModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
