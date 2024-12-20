// src/app/person/person-list.component.ts
import { Component, OnInit } from '@angular/core';
import { PersonService } from './person.service';

@Component({
    selector: 'app-person-list',
    templateUrl: './person-list.component.html',
})
export class PersonListComponent implements OnInit {
    people: any[] = [];

    constructor(private personService: PersonService) { }

    ngOnInit() {
        this.personService.getPeople().subscribe(data => {
            this.people = data;
        });
    }
}