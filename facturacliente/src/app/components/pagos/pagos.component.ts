import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { SidenavService } from 'src/app/services/sidenav.service';
import { Acuerdo } from "../../models/acuerdo.model";
import { Cliente } from "../../models/cliente.model";
import { LoginsesionService } from "../../services/loginsesion.service";

@Component({
  selector: 'app-pagos',
  templateUrl: './pagos.component.html',
  styleUrls: ['./pagos.component.scss']
})
export class PagosComponent implements OnInit {

  public acuerdos: Acuerdo[]= [
  ];
  public cliente: Cliente;
  public currentCliente: Cliente;
  public total: number = 0;

  constructor(private loginsesionService: LoginsesionService,
    private router: Router,
    private sidenav: SidenavService) {
    this.currentCliente = this.loginsesionService.currentClienteValue;
    if(!this.currentCliente){
      this.router.navigate(['/factura/login']); 
    }
   }

  ngOnInit(): void {
    var j=0;
    this.cliente =JSON.parse(localStorage.getItem('cliente'));
    this.acuerdos =JSON.parse(localStorage.getItem('acuerdos'));
    for (j = 0; j < this.acuerdos.length; j++) {
      this.total=this.total + this.acuerdos[j].acuerdo_valor*1;
    }
    
  }
  logout() {
    this.sidenav.close();
    this.loginsesionService.logout();

  }

}
