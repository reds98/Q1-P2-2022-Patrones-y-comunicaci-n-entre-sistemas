import { Component, OnInit } from '@angular/core';
import { InfoEmpleadosService } from 'src/app/servicios/info-empleados.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  public personas:any=[]

  constructor(private servicio:InfoEmpleadosService) { 
    servicio.getPersona().subscribe((data)=>{
      this.personas=data
      console.log("las personas son estas ",this.personas)
    })
    console.log("EL RESULTADO ES",this.personas)
  }

  ngOnInit(): void {
  }
  saludar(nombre:string){
    alert("La persona con el nombre "+nombre+" esta saludando")
  }

}
