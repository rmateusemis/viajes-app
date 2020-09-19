import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { ViajesModelService } from 'src/app/services/viajes-model.service';

@Component({
  selector: 'app-viajes-form',
  templateUrl: './viajes-form.component.html',
  styleUrls: ['./viajes-form.component.scss']
})
export class ViajesFormComponent implements OnInit {

  viajesForm: FormGroup;

  constructor(
    fb: FormBuilder,
    private viajesModel: ViajesModelService,
    private router: Router) {

    this.construirForm(fb);
  }

  ngOnInit(): void {
  }

  guardarViaje(datos: any): void {
    this.viajesModel.PostViaje(datos).subscribe(x => {
      this.router.navigate(['viajes']);
      console.log(datos);
    })
  }

  private construirForm(fb: FormBuilder): void {
    this.viajesForm = fb.group(
      {
        id: [null],
        nombre: [null],
        tipo: [null],
        duracion: [null],
        destino: [null],
        plazas: [null],
        rating: [null],
      }
    );
  }


}
