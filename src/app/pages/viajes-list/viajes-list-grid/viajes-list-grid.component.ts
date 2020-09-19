import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Viaje } from 'src/app/models/viaje';

@Component({
  selector: 'app-viajes-list-grid',
  templateUrl: './viajes-list-grid.component.html',
  styleUrls: ['./viajes-list-grid.component.scss'],
})
export class ViajesListGridComponent implements OnInit {
  @Input() viajes: Viaje[] = [];
  @Output() borrar = new EventEmitter<Viaje>();

  constructor() {}

  ngOnInit(): void {}

  borrarViaje(viaje: Viaje): void {
    this.borrar.emit(viaje);
  }
}
