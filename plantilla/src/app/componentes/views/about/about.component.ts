import { Component, OnInit } from '@angular/core';
import { InfoEmpleadosService } from 'src/app/servicios/info-empleados.service';
@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {
  public nombrePersonas:string[]=[];
  constructor(private servicio:InfoEmpleadosService) { 
    this.nombrePersonas=servicio.getPersona()
    console.log(this.nombrePersonas)
  }

  ngOnInit(): void {
  }

}
