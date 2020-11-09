import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Oferta } from "../models/oferta.model"
import { Acuerdo } from "../models/acuerdo.model"
import { environment } from "../../environments/environment"

@Injectable({
  providedIn: 'root'
})
export class FacturaService {

  baseUrl = environment.baseUrl

  constructor(private http: HttpClient) { }

  getOfertas(id: string | number) {
    return this.http.get(`${this.baseUrl}/oferta/${id}`);
  }

  getCliente(id: string | number) {
    return this.http.get(`${this.baseUrl}/cliente/${id}`);
  }

  addAcuerdo(acuerdo: Acuerdo[]) {
    return this.http.post(`${this.baseUrl}/acuerdo`, acuerdo);
  }

  getMascota(id: string | number) {
    return this.http.get(`${this.baseUrl}/get.php?idMascota=${id}`);
  }

  addMascota(mascota: Oferta) {
    return this.http.post(`${this.baseUrl}/post.php`, mascota);
  }

  /*deleteMascota(mascota: Oferta) {
    return this.http.delete(`${this.baseUrl}/delete.php?idMascota=${mascota.id}`);
  }*/

  updateMascota(mascota: Oferta) {
    return this.http.put(`${this.baseUrl}/update.php`, mascota);
  }
}
