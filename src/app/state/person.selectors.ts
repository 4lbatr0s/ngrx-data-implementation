import { createFeatureSelector, createSelector } from "@ngrx/store";
import { Person } from "../person-list/person.model";


export const selectPersons = createFeatureSelector<Array<Person>>('persons');

export const selectPersonCollection = createSelector(
    selectPersons,
    (persons) => {
      return persons
    }
  );