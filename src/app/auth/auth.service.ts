import { Injectable } from '@angular/core';
import { LoginRequest } from './login-request';
import { BehaviorSubject, Observable, pipe, tap } from 'rxjs';
import { LoginResponse } from './login-response';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment.development';
import { getLocaleFirstDayOfWeek } from '@angular/common';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private _authStatus = new BehaviorSubject<boolean> (false);
  public authStatus = this._authStatus.asObservable()
  private isAuthenticated():boolean{
    return localStorage.getItem('token') != null;
  };
  getToken():string|null{
    return localStorage.getItem('token');
  }
  private setAuthStatus(isAuthenticated: boolean):void{
    this._authStatus.next(isAuthenticated)
  }
  
  constructor(private http: HttpClient) { }
  login(loginRequest: LoginRequest):Observable<LoginResponse>{

   return this.http.post<LoginResponse>(`${environment.baseUrl}/api/Admin/Login/`, loginRequest)
    .pipe(tap((loginResult)=>{
      if (loginResult.success){
        localStorage.setItem('token', loginResult.token);
        this.setAuthStatus(true)
      }
   }));

  }
  logout(){
    localStorage.removeItem('token')
    this.setAuthStatus(true)
  }
}
