export class Viaje {
  id: string;
  nombre: string;
  tipo: string;
  duracion: number;
  destino: string;
  plazas: number;
  color: string;
  estado: number;
  rating: number;

  constructor(item?: any) {
    this.id = item?.id || '';
    this.nombre = item?.nombre || '';
    this.tipo = item?.tipo || '';
    this.duracion = item?.duracion || 7;
    this.destino = item?.destino || '';
    this.plazas = item?.plazas || 20;
    this.color = item?.precio || '#2271b3';
    this.estado = item?.estado || 1;
    this.rating = item?.rating || 5;
  }
}
