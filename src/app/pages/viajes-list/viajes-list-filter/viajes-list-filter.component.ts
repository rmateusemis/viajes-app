import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Viaje } from 'src/app/models/viaje';

@Component({
  selector: 'app-viajes-list-filter',
  templateUrl: './viajes-list-filter.component.html',
  styleUrls: ['./viajes-list-filter.component.scss']
})
export class ViajesListFilterComponent implements OnInit {

  filterForm: FormGroup;

  @Input() viajes: Viaje[] = [];

  @Output() filtrar = new EventEmitter();
  @Output() limpiar = new EventEmitter();

  constructor(fb: FormBuilder) {

    this.filterForm = fb.group({
      nombre: [''],
      tipo: ['']
    });
  }

  ngOnInit(): void {
  }

  filtrarClick(filterValues: any): void {
    this.filtrar.emit(filterValues);
  }

  limpiarFiltro(): void {
    this.filterForm.reset();
    this.limpiar.emit(this.viajes);
  }

}
