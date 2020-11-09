import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { BehaviorSubject, Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Cliente } from '../models/cliente.model';

@Injectable({
  providedIn: 'root'
})
export class LoginsesionService {
  private currentClienteSubject: BehaviorSubject<Cliente>;
  public currentCliente: Observable<Cliente>;

  constructor(private router: Router) {
    this.currentClienteSubject = new BehaviorSubject<Cliente>(JSON.parse(localStorage.getItem('cliente')));
    this.currentCliente = this.currentClienteSubject.asObservable();
  }

  public get currentClienteValue(): Cliente {
    return this.currentClienteSubject.value;
  }
  login(cliente: Cliente){
    this.currentClienteSubject.next(cliente);
  }

  logout() {
    localStorage.removeItem('cliente');
    localStorage.removeItem('acuerdos');
    this.currentClienteSubject.next(null);
    this.router.navigate(['/factura/login']);
  }

}
