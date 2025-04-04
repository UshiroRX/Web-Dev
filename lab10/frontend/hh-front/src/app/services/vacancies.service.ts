import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Company } from '../models/company';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class VacanciesService {
  readonly apiUrl = "http://127.0.0.1:8000/api/vacancies"
  private http = inject(HttpClient);

  getAllVacancies(): Observable<Company[]> {
    return this.http.get<Company[]>(this.apiUrl)
  }
}
