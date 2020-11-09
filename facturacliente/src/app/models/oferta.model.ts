export class Oferta {
    constructor(
        public oferta_cliente_id: number,
        public oferta_dias_mora: number,
        public oferta_fecha_creacion: string,
        public oferta_numero_producto: number,
        public oferta_valor: number,        
        public oferta_id?: number
    ) { }
}
