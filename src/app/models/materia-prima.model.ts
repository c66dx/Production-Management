export interface MateriaPrima {
  id: number;
  nombre: string;
  tipo: string;  // Podría ser Unidad o Kilo, dependiendo del tipo
  cantidad: number;
  stock_minimo: number;
  unidad: string;  // Esta propiedad es clave, asegúrate de que exista
  fecha_ingreso: Date;
  fecha_vencimiento: Date;
}
