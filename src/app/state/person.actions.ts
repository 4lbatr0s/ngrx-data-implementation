import { createAction, props } from "@ngrx/store";
import { Person } from "../person-list/person.model";

export const PersonActionTypes = {
  LOAD_PERSON:'[Person] Retrieve Persons Success'
}


export const retrievedPersonList = createAction(
    '[Person List/API] Retrieve Persons Success',
    props<{ persons: Array<Person> }>()
  );