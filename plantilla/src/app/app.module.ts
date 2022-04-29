import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './componentes/shared/navbar/navbar.component';
import { HomeComponent } from './componentes/views/home/home.component';
import { AboutComponent } from './componentes/views/about/about.component';

import { InfoEmpleadosService } from './servicios/info-empleados.service';
@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomeComponent,
    AboutComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [InfoEmpleadosService],
  bootstrap: [AppComponent]
})
export class AppModule { }
