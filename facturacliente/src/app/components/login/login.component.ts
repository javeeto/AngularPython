import { Component, OnInit } from '@angular/core';

import { FacturaService } from "../../services/factura.service"
import { Cliente } from "../../models/cliente.model"
import { MatDialog } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { FormGroup, FormBuilder, Validators, FormControl } from '@angular/forms';
import { LoginsesionService } from 'src/app/services/loginsesion.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  public clientes: Cliente[] = [
  ];
  public myForm: FormGroup;
  public intentoFallido: number=0;

  clienteModel = new Cliente("", 0, "", "");

  constructor(private facturaService: FacturaService,
    private loginsesionService: LoginsesionService,
    private dialogo: MatDialog,
    private formBuilder: FormBuilder,
    private snackBar: MatSnackBar,
    private router: Router) { }


  ngOnInit() {
    this.formValida();
  }

  onSubmit() {
    let id: string | number;

    return this.facturaService
      .getCliente(this.clienteModel.cliente_identificacion)
      .subscribe((clientes: Cliente[]) => {
        this.clientes = clientes;
        console.log('Clientes', this.clientes);
        if (this.clientes[0]) {
          this.snackBar.open('Bienvenido '+this.clientes[0].cliente_nombre, undefined, {
            duration: 1500,
          });          
          alert('Bienvenido '+this.clientes[0].cliente_nombre);
          localStorage.setItem('cliente',JSON.stringify(this.clientes[0]));
          this.loginsesionService.login(this.clientes[0]);
          this.router.navigate(['/factura/lista']);   

        } else {
          alert("Cliente no encontrado");
          this.intentoFallido++;
          if(this.intentoFallido>=3){
            this.router.navigate(['/factura/falloverifica']);
          }
        }
      });
  }

  formValida() {
    this.myForm = this.formBuilder.group({
      identificacion: [null, [Validators.required, Validators.minLength(4), Validators.pattern(/^[0-9]{5,20}$/)]],

    });
  }

}
