import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Enseignant } from '../model/Enseignant';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class EnseignantService {
  constructor(private http: HttpClient) {}

  getAllEnseignants(): Observable<Enseignant[]> {
    return this.http.get<Enseignant[]>(`${environment.apiUrl}/enseignants`);
  }

  getEnseignantById(id: number): Observable<Enseignant> {
    return this.http.get<Enseignant>(`${environment.apiUrl}/enseignants/${id}`);
  }

  getEnseignantByUsername(username: string): Observable<Enseignant> {
    return this.http.get<Enseignant>(`${environment.apiUrl}/enseignants/username?username=${username}`);
  }
}
