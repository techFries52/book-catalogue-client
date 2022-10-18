import { HttpClient, HttpContext, HttpContextToken } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http:HttpClient) { }

  _accessToken = ""
  _refreshToken = ""

  context:HttpContext = {
    map: undefined,
    set: function <T>(token: HttpContextToken<T>, value: T): HttpContext {
      throw new Error('Function not implemented.');
    },
    get: function <T>(token: HttpContextToken<T>): T {
      throw new Error('Function not implemented.');
    },
    delete: function (token: HttpContextToken<unknown>): HttpContext {
      throw new Error('Function not implemented.');
    },
    has: function (token: HttpContextToken<unknown>): boolean {
      throw new Error('Function not implemented.');
    },
    keys: function (): IterableIterator<HttpContextToken<unknown>> {
      throw new Error('Function not implemented.');
    }
  }

  userLogin(username:string, password:string) {
    return this.http.post<any>('http://localhost:9999/api/login',{
      username: username,
      password: password
  }, {withCredentials: true});
    }
  
}
