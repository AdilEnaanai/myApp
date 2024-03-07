import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormBuilder, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-signup',
  standalone: true,
  imports: [ReactiveFormsModule, HttpClientModule],
  templateUrl: './signup.component.html',
  styleUrl: './signup.component.css'
})
export class SignupComponent {
  formData=this.fb.group({
    username:[],
    password:[]
  })
  constructor(private fb:FormBuilder, private http:HttpClient){}

  signup(){
    const username=this.formData.controls.username.value
    const password=this.formData.controls.password.value
    const role="ROLE_USER"
    let user={"username":username,"password":password,"role":role,"active":true}
    
    console.log(JSON.stringify(user))
    this.http.post("http://localhost:8080/api/users/signup",user).subscribe()
  }
}
