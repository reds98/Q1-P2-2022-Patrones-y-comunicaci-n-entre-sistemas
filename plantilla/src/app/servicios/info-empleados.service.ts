import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http"
@Injectable({
  providedIn: 'root'
})
export class InfoEmpleadosService {
  private personas=[
    {nombre:"Juan",edad:24},
    {nombre:"Ana",edad:30},
    {nombre:"Daniel",edad:25},
    {nombre:"David",edad:35}
  ]
  public baseUrl='https://random-data-api.com/api/'
  constructor(private http:HttpClient) { }
  
  public getPersona(){
    return this.http.get(this.baseUrl+'/users/random_user?size=3')//observable
  }
  
}
