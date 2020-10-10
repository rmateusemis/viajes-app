export class Usuario {
    nombre: string;
    apellidos: string;
    token: string;

    constructor(item?: any) {
        this.nombre = item?.nombre || '';
        this.apellidos = item?.apellidos || '';
        this.token = item?.token || null;
    }
}
