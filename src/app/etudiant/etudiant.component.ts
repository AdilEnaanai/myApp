import { Component } from '@angular/core';
import { ListComponent } from "./list/list.component";
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { FormComponent } from './form/form.component';
import { HttpClientModule } from '@angular/common/http';

@Component({
    selector: 'app-etudiant',
    standalone: true,
    templateUrl: './etudiant.component.html',
    styleUrl: './etudiant.component.css',
    imports: [ListComponent,HttpClientModule]
})
export class EtudiantComponent {
    constructor(private modal:NgbModal){}
    openModal(){
        this.modal.open(FormComponent)
    }
}
