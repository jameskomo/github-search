import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from './../environments/environment';
import { User } from './user';
import { Repository } from './repository';
@Injectable({
  providedIn: 'root'
})
export class SearchService {
  user: User;
  repository: Repository;

  constructor(private http: HttpClient) {
    this.user = new User('', '', '');
    this.repository = new Repository('', '', '', '', '');
  }
 searchRequest() {
    interface ApiResponse {
      name: string;
      repository: string;
    }
    const promise = new Promise((resolve, reject) => {
      this.http
        .get<ApiResponse>(environment.apiUrl)
        .toPromise()
        .then(
          response => {
            this.user.userName = response.name;
            this.repository.repoName = response.repository;

            resolve();
          },
          error => {
            this.user.userName = 'jameskomo';
            this.repository.repoName = 'James Komo';
            reject(error);
          }
        );
    });

    return promise;
  }
}
