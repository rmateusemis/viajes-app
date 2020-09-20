import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Viaje } from '../../models/viaje';
import { ViajesModelService } from '../../services/viajes-model.service';

@Component({
  selector: 'app-viajes-list',
  templateUrl: './viajes-list.component.html',
  styleUrls: ['./viajes-list.component.scss'],
})
export class ViajesListComponent implements OnInit {
  viajes: Viaje[] = [];

  ViajesCompletos = {...this.viajes};
  viajesFiltrados: Viaje[] = [];

  constructor(
    private viajesModel: ViajesModelService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.cargarListadoViajes();
    console.log(this.ViajesCompletos);

  }

  private cargarListadoViajes(): void {
    this.viajesModel.cargarViajes().subscribe((data) => {
      this.viajes = data;
      console.log(this.viajes);
    });
  }

  borrarViaje(viaje: any): void {
    this.viajesModel.deleteViaje(viaje.id).subscribe((x) => {
      this.cargarListadoViajes();
    });
  }

  editarViaje(viaje: Viaje): void {
    this.router.navigate(['viajes/edit', viaje.id]);
  }


  filtrarViajes(filterValues: any): void {
    this.viajes = this.filtrar(this.viajes, filterValues);
  }

  filtrar(viajes: Viaje[], filterValues: any): Viaje[] {
    if (filterValues.nombre) {
      this.viajesFiltrados = viajes.filter((x) =>
        x.nombre.toLowerCase().includes(filterValues.nombre.toLowerCase()));
    }
    if (filterValues.tipo) {
      this.viajesFiltrados = this.viajesFiltrados.filter((x) =>
        x.tipo.toLowerCase().includes(filterValues.tipo.toLowerCase()));
    }

    return this.viajesFiltrados;
  }

  limpiarFiltro(viajes: any): void {
    this.viajesFiltrados = this.ViajesCompletos;
  }
}
