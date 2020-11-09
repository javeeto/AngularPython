import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormControl } from '@angular/forms';
import { Router } from '@angular/router';
import { Cliente } from 'src/app/models/cliente.model';
import { SidenavService } from 'src/app/services/sidenav.service';
import { LoginsesionService} from '../../services/loginsesion.service';


@Component({
  selector: 'app-encuesta',
  templateUrl: './encuesta.component.html',
  styleUrls: ['./encuesta.component.scss']
})
export class EncuestaComponent implements OnInit {
  public myForm: FormGroup;
  public currentCliente: Cliente;
  constructor(private formBuilder: FormBuilder,
    private loginsesionService: LoginsesionService,
    private router: Router,
    private sidenav: SidenavService) {
      this.currentCliente = this.loginsesionService.currentClienteValue;
      if(!this.currentCliente){
        this.router.navigate(['/factura/login']); 
      }
     }

  ngOnInit(): void {
    this.formValida();
  }
  formValida() {
    this.myForm = this.formBuilder.group({
      razonnopago: [null, [Validators.required]],
    });
  }
  onSubmit() {
    alert("Gracias por su atención");
    this.sidenav.close();
    this.loginsesionService.logout();
  }

}
