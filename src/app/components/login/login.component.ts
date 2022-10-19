import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  form!: FormGroup;
  
  constructor(
    private formBuilder: FormBuilder,
    private http: HttpClient,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.form = this.formBuilder.group({
      username:'',
      password:''
    })
  }

  

  submit(): void{
    let body = new URLSearchParams();
    const formValues = this.form.value;

    for(const key in formValues){
      body.append(key, formValues[key]);
    }

    let options = {
      headers: new HttpHeaders().set('Content-Type', 'application/x-www-form-urlencoded').set('withCredentials', 'true')
    }

    this.http.post<any>('Http://localhost:8080/api/login', body ,options)
    .subscribe(
      response => {        
        this.router.navigate(['/home']);
      }
    );
  }
}
