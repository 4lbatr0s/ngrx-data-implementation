import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';
import { Person } from './person.model';

@Injectable({
  providedIn: 'root',
})
export class PersonService {
  constructor(private httpClient: HttpClient) {}

  getPersons(): Observable<Array<Person>> {
    return this.httpClient.get<Person[]>(
      'http://localhost:3000/persons'
    );
}

  getPerson(id: number) {
    return this.httpClient.get<Person>('http://localhost:3000/persons/' + id);
  }
}
