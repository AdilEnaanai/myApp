import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class EtudiantService {
  backEndURL="http://localhost:8080/api/"
  etudiants:any
  constructor(private http:HttpClient) {}
  getEtudiants(){
    this.http.get(this.backEndURL+"etudiants").subscribe(data=>{
      this.etudiants=data
    })
    return this.etudiants
  }
  addEtudiant(etudiant:any,idFil:string){
    const backEndURL=this.backEndURL+"filieres/"+idFil+"/etudiants"
    console.log(backEndURL)

    this.http.post(backEndURL,etudiant).subscribe((data)=>{
    this.etudiants.push(data)
   })
  }
  deleteEtudiant(idEtudiant:string){
    this.http.delete(this.backEndURL+"etudiants/"+idEtudiant).subscribe()
  }
  filterEtudiantsByNom(nom:string){
    if ((nom!="")&&(nom!=undefined)){
     return this.etudiants.filter((
      etudiant: { nom: string; })=>etudiant.nom.toLowerCase().startsWith(nom.toLowerCase())
      )
     }
    return this.etudiants
}
getFilieres():Observable<any>{
 return this.http.get("http://localhost:8080/api/filieres")
}
}
