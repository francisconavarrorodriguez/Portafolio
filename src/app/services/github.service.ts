import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class GithubService {

  private username: string = 'FranciscoNavarroRodriguez';
  private baseUrl: string = "https://api.github.com";

  constructor(private http: HttpClient) { }

  getRepos(): Observable<any> {
    return this.http.get(`${this.baseUrl}/users/${this.username}/repos`);
  }
  
}
