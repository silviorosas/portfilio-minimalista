import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'
import { Carrusel } from '../models/carrusel';


@Injectable({
  providedIn: 'root'
})
export class CarruselService {

  constructor(private http: HttpClient) { }
// creo servicio para traer el array json con mis fotos desde el archivo assets/carruselJson/carrusel.json 
  getCarrusel() {
    return this.http.get<any>('assets/carruselJson/carrusel.json')
      .toPromise()
      .then(res => <Carrusel[]>res.data)
      .then(data => { return data; });
    }

}
