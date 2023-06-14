import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Admin } from '../model/Admin';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AdminService {
  constructor(private http: HttpClient) {}

  getAdminById(id: number): Observable<Admin> {
    return this.http.get<Admin>(`${environment.apiUrl}/admins/${id}`);
  }

  getAdminByLogin(login: string): Observable<Admin> {
    return this.http.get<Admin>(`${environment.apiUrl}/admins/login?login=${login}`);
  }

  getAllAdmins(): Observable<Admin[]> {
    return this.http.get<Admin[]>(`${environment.apiUrl}/admins/all`);
  }
}
