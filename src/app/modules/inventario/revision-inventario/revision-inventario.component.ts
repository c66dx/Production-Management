import { Component, OnInit } from '@angular/core';
import { MateriasPrimasService } from '../../../core/services/materias-primas.service';
import { MateriaPrima } from '../../../models/materia-prima.model';

@Component({
  selector: 'app-revision-inventario',
  templateUrl: './revision-inventario.component.html',
  styleUrls: ['./revision-inventario.component.css']
})
export class RevisionInventarioComponent implements OnInit {
  materiasPrimas: MateriaPrima[] = [];
  isLoading: boolean = true;

  constructor(private materiasPrimasService: MateriasPrimasService) {}

  ngOnInit(): void {
    this.materiasPrimasService.getMateriasPrimas().subscribe({
      next: (data) => {
        this.materiasPrimas = data;
        this.isLoading = false;
      },
      error: () => {
        console.error('Error al cargar las materias primas');
        this.isLoading = false;
      }
    });
  }

  // Método para verificar si el stock está bajo el mínimo
  isStockBajo(materiaPrima: MateriaPrima): boolean {
    return materiaPrima.cantidad < materiaPrima.stock_minimo;
  }
}
