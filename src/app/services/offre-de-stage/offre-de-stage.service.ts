import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { OffreDeStage, OffreDeStageDetails } from '../../model/OffreDeStage';

@Injectable({
  providedIn: 'root'
})
export class OffreDeStageService {
  private apiUrl = 'http://localhost:8085/offre-de-stages';

  constructor(private http: HttpClient) { }

  getAllOffreDeStages(): Observable<OffreDeStage[]> {
    return this.http.get<OffreDeStage[]>(`${this.apiUrl}/all`);
  }

  getOffreDeStageById(id: number): Observable<OffreDeStage> {
    return this.http.get<OffreDeStage>(`${this.apiUrl}/${id}`);
  }

  getOffreDeStageDetailsById(id: number): Observable<OffreDeStageDetails> {
    return this.http.get<OffreDeStageDetails>(`${this.apiUrl}/details/${id}`);
  }

  createOffreDeStage(offreDeStage: OffreDeStage): Observable<OffreDeStage> {
    return this.http.post<OffreDeStage>(`${this.apiUrl}/create`, offreDeStage);
  }

  updateOffreDeStage(id: number, offreDeStage: OffreDeStage): Observable<OffreDeStage> {
    return this.http.put<OffreDeStage>(`${this.apiUrl}/update/${id}`, offreDeStage);
  }

  deleteOffreDeStage(id: number): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/delete/${id}`);
  }

  filterOffreDeStagesByDate(date: Date): Observable<OffreDeStage[]> {
    const formattedDate = this.formatDate(date);
    return this.http.get<OffreDeStage[]>(`${this.apiUrl}/filter?date=${formattedDate}`);
  }

  searchOffreDeStages(keyword: string): Observable<OffreDeStage[]> {
    return this.http.get<OffreDeStage[]>(`${this.apiUrl}/search?keyword=${keyword}`);
  }

  validateOffreDeStage(id: number): Observable<OffreDeStage> {
    return this.http.get<OffreDeStage>(`${this.apiUrl}/validate/${id}`);
  }

  getOffreDeStagesByEntreprise(entreprise: string): Observable<OffreDeStage[]> {
    return this.http.get<OffreDeStage[]>(`${this.apiUrl}/entreprise/${entreprise}`);
  }

  getNonValideOffresDeStage(): Observable<OffreDeStage[]> {
    return this.http.get<OffreDeStage[]>(`${this.apiUrl}/non-valide`);
  }

  private formatDate(date: Date): string {
    const year = date.getFullYear();
    const month = this.padZero(date.getMonth() + 1);
    const day = this.padZero(date.getDate());
    return `${year}-${month}-${day}`;
  }

  private padZero(value: number): string {
    return value.toString().padStart(2, '0');
  }
}
