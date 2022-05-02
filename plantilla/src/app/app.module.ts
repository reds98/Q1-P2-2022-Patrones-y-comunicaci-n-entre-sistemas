import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './componentes/shared/navbar/navbar.component';
import { HomeComponent } from './componentes/views/home/home.component';
import { AboutComponent } from './componentes/views/about/about.component';

import { InfoEmpleadosService } from './servicios/info-empleados.service';
import { PersonaTarjetaComponent } from './componentes/persona-tarjeta/persona-tarjeta.component';
@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomeComponent,
    AboutComponent,
    PersonaTarjetaComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [InfoEmpleadosService],
  bootstrap: [AppComponent]
})
export class AppModule { }
