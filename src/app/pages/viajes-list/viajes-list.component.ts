import { Component, OnInit } from '@angular/core';
import { Viaje } from '../../models/viaje';
import { ViajesModelService } from '../../services/viajes-model.service';


@Component({
  selector: 'app-viajes-list',
  templateUrl: './viajes-list.component.html',
  styleUrls: ['./viajes-list.component.scss']
})
export class ViajesListComponent implements OnInit {

  viajes: Viaje[] = [];

  constructor(private viajesModel: ViajesModelService) { }

  ngOnInit(): void {
    this.cargarListadoViajes();
  }

  private cargarListadoViajes(): void {
    this.viajesModel.cargarViajes().subscribe(data => {
      this.viajes = data;
      console.log(this.viajes);
    });
  }

}