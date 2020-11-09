import { Component, OnInit } from '@angular/core';

import { FacturaService } from "../../services/factura.service"
import { Oferta } from "../../models/oferta.model"
import { MatDialog } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Cliente } from "../../models/cliente.model";
import { Acuerdo } from "../../models/acuerdo.model";
import { DialogoComponent } from "../dialogo/dialogo.component";
import { Router } from '@angular/router';
import { LoginsesionService } from 'src/app/services/loginsesion.service';

@Component({
  selector: 'app-listafactura',
  templateUrl: './listafactura.component.html',
  styleUrls: ['./listafactura.component.scss']
})
export class ListafacturaComponent implements OnInit {

  public ofertas: Oferta[] = [
  ];
  public cliente: Cliente;
  public currentCliente: Cliente;
  public acuerdos: Acuerdo[]= [
  ];
  public acuerdosregistro: Acuerdo[]= [
  ];
  public total: number = 0;

  constructor(private facturaService: FacturaService,
     private loginsesionService: LoginsesionService,
     private dialogo: MatDialog,
     private snackBar: MatSnackBar,
     private router: Router) { 
      this.currentCliente = this.loginsesionService.currentClienteValue;
      if(!this.currentCliente){
        this.router.navigate(['/factura/login']); 
      }
     }


  ngOnInit() {
    this.obtenerOfertas();
  }

  obtenerOfertas() {
    var j = 0;
    this.cliente =JSON.parse(localStorage.getItem('cliente'));
    return this.facturaService
      .getOfertas(this.cliente.cliente_id)
      .subscribe((ofertas: Oferta[]) => {
        this.ofertas = ofertas
        for (j = 0; j < this.ofertas.length; j++) {
          this.total=this.total + this.ofertas[j].oferta_valor*1;
        }
      
      });
  }

  aceptaAcuerdo(){
    this.dialogo
      .open(DialogoComponent, {
        data: `¿Quiere realizar este pago?`
      })
      .afterClosed()
      .subscribe((confirmado: Boolean) => {
        if (!confirmado) return;
        this.enviaAcuerdo();
             

      })
  }

  enviaAcuerdo(){
    var j=0;
    let acuerdo: Acuerdo;
    for (j = 0; j < this.ofertas.length; j++) {
      acuerdo= new Acuerdo(this.ofertas[j].oferta_id,
        this.ofertas[j].oferta_valor,
        true);
      this.acuerdos.push(acuerdo);      
    }
    console.log('acuerdos:',this.acuerdos);
    this.facturaService
    .addAcuerdo(this.acuerdos)
    .subscribe((acuerdos: Acuerdo[]) => {
      this.acuerdosregistro = acuerdos
      console.log('acuerdos registrados:',this.acuerdosregistro);
      localStorage.setItem('acuerdos',JSON.stringify(this.acuerdosregistro));  
      alert('Acuerdo registrado');  
      this.router.navigate(['/factura/pagos']); 
    });
  }

  niegaAcuerdo(){
    this.dialogo
      .open(DialogoComponent, {
        data: `¿Esta seguro que no puede realizar el pago?`
      })
      .afterClosed()
      .subscribe((confirmado: Boolean) => {
        if (!confirmado) return;
        this.router.navigate(['/factura/encuesta']);     

      })
  }
}
