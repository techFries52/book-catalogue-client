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
    body.set('username', 'fries');
    body.set('password', '12345');

    let options = {
      headers: new HttpHeaders().set('Content-Type', 'application/x-www-form-urlencoded').set('withCredentials', 'true')
    }

    console.log(body);
    this.http.post<any>('Http://localhost:8080/api/login', body.toString() ,options)
    .subscribe(
      () => {
        this.router.navigate(['/home']);
      }
    );
  }
}
