import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class StageService {
  private apiUrl = 'http://localhost:8085/stages';

  constructor(private http: HttpClient) {}

  getStagesCountByEntreprise(): Observable<{ entreprise: string, count: number }[]> {
    return this.http.get<{ entreprise: string, count: number }[]>(`${this.apiUrl}/countByEntreprise`);
  }
}
