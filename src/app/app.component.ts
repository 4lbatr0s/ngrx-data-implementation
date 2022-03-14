import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { catchError, map, of, tap } from 'rxjs';
import { PersonService } from './person-list/person-list.service';
import { Person } from './person-list/person.model';
import { retrievedPersonList } from './state/person.actions';
import { selectPersonCollection, selectPersons } from './state/person.selectors';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent implements OnInit{
  persons$ = this.store.select(selectPersons);
  personCollection$ = this.store.select(selectPersonCollection);
 

  constructor(
    private personService: PersonService,
    private store: Store
  ) {}
 
  ngOnInit() {
    this.personService
      .getPersons()
      .pipe(
        tap((person:Person[]) => this.store.dispatch(retrievedPersonList({persons:person}))),
        catchError(err => {
          console.warn(err);
          return of(err);
        })
      ).subscribe();
  }
}
