import { Component, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { LoginsesionService } from "./services/loginsesion.service";
import { Cliente } from "./models/cliente.model";
import { MatSidenav } from '@angular/material/sidenav';
import { SidenavService } from './services/sidenav.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  @ViewChild('cajon') public cajon: MatSidenav;

  title = 'facturacliente';
  currentCliente: Cliente;  

  constructor(private router: Router,
    private loginsesionService: LoginsesionService,
    private sidenavService: SidenavService) { 
      this.loginsesionService.currentCliente.subscribe(x => this.currentCliente = x);
    }
    ngAfterViewInit(): void {
      this.sidenavService.setSidenav(this.cajon);
    }
  logout() {   
    this.loginsesionService.logout();
    this.cajon.close();      
  }
}
