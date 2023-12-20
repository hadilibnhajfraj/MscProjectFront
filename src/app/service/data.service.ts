import { Injectable } from '@angular/core';
import{HttpClient, HttpHeaders} from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { BehaviorSubject } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class DataService {
  setToken(token: string): void {
    localStorage.setItem('token', token);
  }

  getToken(): string | null {
    return localStorage.getItem('token');
  }

  isLoggedIn() {
    return this.getToken() !== null;
  }

  constructor(private http:HttpClient) { }

  
 

  registerUser(data: any){
return this.http.post(environment.apiUrl+'/api/register/', data);
  }
  login(data:any){
  return this.http.post(`${environment.apiUrl}/api/login`, data);  
  }
  
 forget(email : string){
  return this.http.post(`${environment.apiUrl}/api/forget`, {
    email:email
  });
 }
 reset(data:any){
  return this.http.post(`${environment.apiUrl}/api/reset`, data);
 }
 user(){
  const user : any = localStorage.getItem('user');
  const userObj = JSON.parse(user);
  
  const token = userObj.token;
  const headers = new HttpHeaders({
    Authorization : `Bearer ${token}`
  });
 return  this.http.get(`${environment.apiUrl}/api/user`,{headers:headers});
 }
}
