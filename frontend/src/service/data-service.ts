import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  private createUrl = 'http://localhost:3000/api/users/add';
  private getUserUrl = 'http://localhost:3000/api/users/list';

  constructor(private http: HttpClient) {}

  createUser(userData: any) {
    return this.http.post(this.createUrl, userData);
  }

  getUsers(){
    return this.http.get(this.getUserUrl);
  }
}
