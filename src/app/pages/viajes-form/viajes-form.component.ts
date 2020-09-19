import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Viaje } from 'src/app/models/viaje';
import { ViajesModelService } from 'src/app/services/viajes-model.service';

@Component({
  selector: 'app-viajes-form',
  templateUrl: './viajes-form.component.html',
  styleUrls: ['./viajes-form.component.scss'],
})
export class ViajesFormComponent implements OnInit {
  viajesForm: FormGroup;
  id: string = null;

  constructor(
    fb: FormBuilder,
    private viajesModel: ViajesModelService,
    private router: Router,
    activatedRoute: ActivatedRoute
  ) {
    this.construirForm(fb);

    activatedRoute.params.subscribe((x) => {
      this.id = x?.id || null;
    });
  }

  ngOnInit(): void {
    this.cargarViaje();
  }

  guardarViaje(datos: any): void {
    this.viajesModel.guardarViaje(datos).subscribe((x) => {
      this.router.navigate(['viajes']);
      console.log(x);
    });
  }

  cargarViaje(): void {
    if (this.id) {
      this.viajesModel.getViaje(this.id).subscribe((x) => {
        this.viajesForm.patchValue(x);
      });
    }
  }

  private construirForm(fb: FormBuilder): void {
    this.viajesForm = fb.group({
      id: [''],
      nombre: [null],
      tipo: [null],
      duracion: [null],
      destino: [null],
      plazas: [null],
      rating: [null],
    });
  }
}
