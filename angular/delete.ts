// src/app/person/person-delete.component.ts
import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { PersonService } from './person.service';

@Component({
    selector: 'app-person-delete',
    templateUrl: './person-delete.component.html',
})
export class PersonDeleteComponent {
    personId: string;

    constructor(private route: ActivatedRoute, private personService: PersonService, private router: Router) {
        this.personId = this.route.snapshot.paramMap.get('id');
    }

    delete() {
        this.personService.deletePerson(this.personId).subscribe(() => {
            this.router.navigate(['/people']);
        });
    }
}