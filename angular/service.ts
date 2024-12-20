// src/app/person/person.service.ts
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
    providedIn: 'root',
})
export class PersonService {
    private apiUrl = 'http://your-api-url.com/api/person';

    constructor(private http: HttpClient) { }

    getPeople(): Observable<any[]> {
        return this.http.get<any[]>(this.apiUrl);
    }

    getPerson(id: string): Observable<any> {
        return this.http.get<any>(`${this.apiUrl}/${id}`);
    }

    updatePerson(person: any): Observable<any> {
        return this.http.put(`${this.apiUrl}/${person.id}`, person);
    }

    deletePerson(id: string): Observable<any> {
        return this.http.delete(`${this.apiUrl}/${id}`);
    }
}