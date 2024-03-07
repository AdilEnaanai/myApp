import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class EtudiantService {
  backEndURL="http://localhost:8080/api/etudiants"
  etudiants:any
  constructor(private http:HttpClient) {}
  getEtudiants(){
    this.http.get(this.backEndURL).subscribe(data=>{
      this.etudiants=data
    })
    return this.etudiants
  }
  addEtudiant(etudiant:any){
    this.http.post(this.backEndURL,etudiant).subscribe(()=>{
      this.etudiants.push(etudiant)
    })
  }
  deleteEtudiant(idEtudiant:string){
    this.http.delete(this.backEndURL+"/"+idEtudiant).subscribe()
  }
  filterEtudiantsByNom(nom:string){
    if ((nom!="")&&(nom!=undefined)){
     return this.etudiants.filter((
      etudiant: { nom: string; })=>etudiant.nom.toLowerCase().startsWith(nom.toLowerCase())
      )
     }
    return this.etudiants
}
}
