// src/app/person/person-edit.component.ts
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { PersonService } from './person.service';

@Component({
    selector: 'app-person-edit',
    templateUrl: './person-edit.component.html',
})
export class PersonEditComponent implements OnInit {
    person: any;

    constructor(private route: ActivatedRoute, private personService: PersonService, private router: Router) { }

    ngOnInit() {
        const id = this.route.snapshot.paramMap.get('id');
        this.personService.getPerson(id).subscribe(data => {
            this.person = data;
        });
    }

    save() {
        this.personService.updatePerson(this.person).subscribe(() => {
            this.router.navigate(['/people']);
        });
    }
}