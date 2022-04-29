import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class InfoEmpleadosService {
  private personas=['Juan','Ana','Daniel','Luis','Vanessa']
  constructor() { }
  
  public getPersona(){
    return this.personas
  }
}
