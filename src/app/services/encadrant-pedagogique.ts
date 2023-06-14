import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { EncadrantPedagogique } from '../model/EncadrantPedagogique';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class EncadrantPedagogiqueService {
  constructor(private http: HttpClient) {}

  getAllEncadrants(): Observable<EncadrantPedagogique[]> {
    return this.http.get<EncadrantPedagogique[]>(`${environment.apiUrl}/encadrant-pedagogique`);
  }

  getEncadrantById(id: number): Observable<EncadrantPedagogique> {
    return this.http.get<EncadrantPedagogique>(`${environment.apiUrl}/encadrant-pedagogique/${id}`);
  }

  getEncadrantByUsername(username: string): Observable<EncadrantPedagogique> {
    return this.http.get<EncadrantPedagogique>(`${environment.apiUrl}/encadrant-pedagogique/username?username=${username}`);
  }
}
