import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ProduccionDiaria } from '../../models/produccion-diaria.model';
import { MateriasPrimasService } from './materias-primas.service';
import { MateriaPrima } from '../../models/materia-prima.model';

@Injectable({
  providedIn: 'root'
})
export class ProduccionDiariaService {
  private apiUrl = 'http://localhost:3000/produccion_diaria'; // Asegúrate de que la URL sea correcta

  constructor(private http: HttpClient, private materiasPrimasService: MateriasPrimasService) { }

  getProduccionDiaria(): Observable<ProduccionDiaria[]> {
    return this.http.get<ProduccionDiaria[]>(this.apiUrl);
  }

  getProduccionDiariaById(id: number): Observable<ProduccionDiaria> {
    return this.http.get<ProduccionDiaria>(`${this.apiUrl}/${id}`);
  }

  addProduccionDiaria(produccionDiaria: ProduccionDiaria): Observable<ProduccionDiaria> {
    return this.http.post<ProduccionDiaria>(this.apiUrl, produccionDiaria);
  }
  
  updateProduccionDiaria(id: number, produccionDiaria: ProduccionDiaria): Observable<ProduccionDiaria> {
    return this.http.put<ProduccionDiaria>(`${this.apiUrl}/${id}`, produccionDiaria);
  }  

  deleteProduccionDiaria(id: number): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/${id}`);
  }
}
