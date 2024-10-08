import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormControl } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ProduccionDiariaService } from '../../../core/services/produccion-diaria.service';
import { TipoProductoService } from '../../../core/services/tipo-producto.service';
import { MateriasPrimasService } from '../../../core/services/materias-primas.service';
import { ProduccionDiaria } from '../../../models/produccion-diaria.model';
import { TipoProducto } from '../../../models/tipo-producto.model';
import { MateriaPrima } from '../../../models/materia-prima.model';

@Component({
  selector: 'app-produccion-diaria-form',
  templateUrl: './produccion-diaria-form.component.html',
  styleUrls: ['./produccion-diaria-form.component.css']
})
export class ProduccionDiariaFormComponent implements OnInit {
  produccionForm: FormGroup;
  tiposProducto: TipoProducto[] = [];
  materiasPrimas: MateriaPrima[] = [];
  materiasPrimasUtilizadas: any[] = [];  // Lista para materias primas usadas
  produccionId: number | null = null;

  constructor(
    private fb: FormBuilder,
    private produccionDiariaService: ProduccionDiariaService,
    private tipoProductoService: TipoProductoService,
    private materiasPrimasService: MateriasPrimasService,
    private route: ActivatedRoute,
    private router: Router
  ) {
    // Inicialización del formulario
    this.produccionForm = this.fb.group({
      tipo_producto_id: ['', Validators.required],
      materia_prima: ['', Validators.required],  // Selección de la materia prima
      cantidad_usada: ['', [Validators.required, Validators.min(1)]],  // Cantidad usada
      cantidad_producida: ['', [Validators.required, Validators.min(1)]],
      fecha_produccion: ['', [Validators.required, this.validateFechaProduccion]]
    });
  }

  ngOnInit(): void {
    // Cargar tipos de producto
    this.tipoProductoService.getTiposProducto().subscribe(data => {
      this.tiposProducto = data;
    });

    // Cargar materias primas
    this.materiasPrimasService.getMateriasPrimas().subscribe(data => {
      this.materiasPrimas = data;
    });

    // Verificar si es edición (tiene un ID de producción)
    this.produccionId = this.route.snapshot.params['id'];
    if (this.produccionId) {
      this.produccionDiariaService.getProduccionDiariaById(this.produccionId).subscribe(data => {
        this.produccionForm.patchValue(data);  // Rellenar el formulario con los datos
        this.materiasPrimasUtilizadas = data.materiasPrimasUtilizadas || [];
      });
    }
  }

  // Función para añadir materia prima a la lista de utilizadas
  addMateriaPrima(): void {
    const materiaId = this.produccionForm.get('materia_prima')?.value;
    const cantidadUsada = this.produccionForm.get('cantidad_usada')?.value;
  
    const materia = this.materiasPrimas.find(m => m.id === materiaId);
    if (materia && cantidadUsada > 0) {
      this.materiasPrimasUtilizadas.push({
        id: materia.id,
        nombre: materia.nombre,
        cantidadUsada,
        unidad: materia.unidad
      });
  
      // Limpiar los campos del formulario después de añadir
      this.produccionForm.get('materia_prima')?.reset();
      this.produccionForm.get('cantidad_usada')?.reset();
    }
  }

  // Función para eliminar una materia prima de la lista
  removeMateriaPrima(index: number): void {
    this.materiasPrimasUtilizadas.splice(index, 1);
  }

  // Validación de la fecha de producción
  validateFechaProduccion(control: FormControl) {
    const fechaSeleccionada = new Date(control.value);
    const hoy = new Date();
    return fechaSeleccionada > hoy ? { fechaInvalida: true } : null;
  }

  // Método para manejar el envío del formulario
  onSubmit(): void {
    if (this.produccionForm.valid) {
      const produccionData = {
        ...this.produccionForm.value,
        materiasPrimasUtilizadas: this.materiasPrimasUtilizadas  // Añadir materias primas utilizadas
      };

      // Actualizar o crear nueva producción
      if (this.produccionId) {
        this.produccionDiariaService.updateProduccionDiaria(this.produccionId, produccionData).subscribe(() => {
          this.router.navigate(['/produccion-diaria']);
        });
      } else {
        this.produccionDiariaService.addProduccionDiaria(produccionData).subscribe(() => {
          this.router.navigate(['/produccion-diaria']);
        });
      }
    }
  }
}
