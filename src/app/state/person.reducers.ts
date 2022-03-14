import { createReducer, on } from '@ngrx/store';
import { Person } from '../person-list/person.model';
import { retrievedPersonList } from './person.actions';



export const initialState: Array<Person> = [];

export const personsReducer = createReducer(
  initialState,
  on(retrievedPersonList, (state, { persons }) => persons)
);

