export interface TurnoEmpleado {
    id: number;
    nombre_empleado: string;
    turno: string;  // Ejemplo: Mañana, Tarde, Noche
    fecha: Date;
    horas_trabajadas: number; // Ejemplo: 8, 6, 10 horas
  }
  