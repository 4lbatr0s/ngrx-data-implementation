import { Component, Input, OnInit, Output } from '@angular/core';
import { Person } from './person.model';

@Component({
  selector: 'app-person-list',
  templateUrl: './person-list.component.html',
  styleUrls: ['./person-list.component.css']
})


export class PersonListComponent {

  @Input() persons: Array<Person> = [];
}
