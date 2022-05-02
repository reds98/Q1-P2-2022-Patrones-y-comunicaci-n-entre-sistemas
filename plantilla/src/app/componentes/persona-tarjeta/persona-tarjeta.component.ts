import { Component, OnInit,Input,Output,EventEmitter } from '@angular/core';

@Component({
  selector: 'app-persona-tarjeta',
  templateUrl: './persona-tarjeta.component.html',
  styleUrls: ['./persona-tarjeta.component.css']
})
export class PersonaTarjetaComponent implements OnInit {
  @Input()nombre:string="Juan"
  @Input()edad:number=23
  @Input() imagen=''
  @Output() personaSeleccionada = new EventEmitter<string>();
  constructor() { }

  ngOnInit(): void {
  }
  seleccionar(){
    this.personaSeleccionada.emit(this.nombre)
  }

}
