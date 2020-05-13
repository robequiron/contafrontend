import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ConfigService {
  //TODO:Establecer configuración general y por usuario
  //TODO:Grabar grupos contables por defecto


  public limit:number=5;

  constructor() { }


  public getLimitTable() {
    return this.limit;
  }
}
