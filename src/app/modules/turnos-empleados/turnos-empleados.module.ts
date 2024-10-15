import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { MaterialModule } from '../../material/material.module';
import { RouterModule } from '@angular/router';

import { TurnosEmpleadosListComponent } from './turnos-empleados-list/turnos-empleados-list.component';
import { TurnosEmpleadosFormComponent } from './turnos-empleados-form/turnos-empleados-form.component';

@NgModule({
  declarations: [
    TurnosEmpleadosListComponent,
    TurnosEmpleadosFormComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    MaterialModule,
    FormsModule,
    RouterModule.forChild([
      { path: '', component: TurnosEmpleadosListComponent },  // Listar turnos
      { path: 'nuevo', component: TurnosEmpleadosFormComponent },  // Añadir nuevo turno
      { path: 'editar/:id', component: TurnosEmpleadosFormComponent }  // Editar turno existente
    ])
  ]
})
export class TurnosEmpleadosModule { }
