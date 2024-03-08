import { Component } from '@angular/core';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { EtudiantService } from '../etudiant.service';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { CommonModule } from '@angular/common';
import { Observable } from 'rxjs';


@Component({
  selector: 'app-form',
  standalone: true,
  imports: [ReactiveFormsModule,CommonModule],
  templateUrl: './form.component.html',
  styleUrl: './form.component.css'
})
export class FormComponent {
  formEtudiant=this.fb.group({
    "id":['',Validators.required],
    "nom":['',Validators.required],
    "age":['',Validators.required],
    "filiere":[,Validators.required]
  })
  file:File | undefined
  obsFilieres:Observable<any> | undefined;
constructor(private fb:FormBuilder,private etudianService:EtudiantService, private activeModal:NgbActiveModal){}
ajouterEtudiant(){
  const formData=new FormData()
  formData.append('id',this.formEtudiant.get('id')?.value+"")
  formData.append('nom',this.formEtudiant.get('nom')?.value+"")
  formData.append('age',this.formEtudiant.get('age')?.value+"")
  if (this.file!=null) formData.append('file',this.file)
  const idFiliere=this.formEtudiant.get('filiere')?.value+""
  this.etudianService.addEtudiant(formData,idFiliere)

  this.activeModal.close()
}
fermer() {
  this.activeModal.close()
  }
ngOnInit() {
  this.obsFilieres=this.etudianService.getFilieres()
  console.log(this.etudianService.getFilieres())
}

fileSelected(event:any){
  this.file=event.target.files[0]
}
}
