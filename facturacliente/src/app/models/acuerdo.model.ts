export class Acuerdo {
    constructor(
        public acuerdo_oferta_id: number,
        public acuerdo_valor: number,
        public acuerdo_estado: boolean,
        public acuerdo_id?: number,
        public acuerdo_fecha_pago?: string,
        public acuerdo_fecha_creacion?: string,
    ) { }
}
