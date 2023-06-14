import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Etudiant } from '../../model/Etudiant.model';
import { environment } from '../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class EtudiantService {
  constructor(private http: HttpClient) {}

  getAllEtudiants(): Observable<Etudiant[]> {
    return this.http.get<Etudiant[]>(`${environment.apiUrl}/etudiants/all`);
  }

  getEtudiant(id: number): Observable<Etudiant> {
    return this.http.get<Etudiant>(`${environment.apiUrl}/etudiants/${id}`);
  }

  deleteEtudiant(id: number): Observable<void> {
    return this.http.delete<void>(`${environment.apiUrl}/etudiants/delete/${id}`);
  }

  updateEtudiant(etudiant: Etudiant): Observable<Etudiant> {
    return this.http.put<Etudiant>(`${environment.apiUrl}/etudiants/edit/${etudiant.id}`, etudiant);
  }

  createEtudiant(etudiant: Etudiant): Observable<Etudiant> {
    return this.http.post<Etudiant>(`${environment.apiUrl}/etudiants/new-etudiant`, etudiant);
  }

  searchEtudiantByCNE(cne: string): Observable<Etudiant> {
    return this.http.get<Etudiant>(`${environment.apiUrl}/etudiants/cne/${cne}`);
  }

  getEtudiantByUsername(username: string): Observable<Etudiant> {
    return this.http.get<Etudiant>(`${environment.apiUrl}/etudiants/username/${username}`);
  }
}
