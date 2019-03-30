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
    this.user = new User('', '', '', '', '');
    this.repository = new Repository('', '', '', '');
  }
 searchRequest() {
    interface ApiResponse {
      login: string;
      name: string;
      html_url: string;
      public_repos: string;
      avatar_url: string;
    }
    const promise = new Promise((resolve, reject) => {
      this.http
        .get<ApiResponse>(environment.apiUrl)
        .toPromise()
        .then(
          response => {
            this.user.login = response[0].owner.login;
            this.user.name = response[0].owner.name;
            this.user.html_url = response[0].owner.html_url;
            this.user.public_repos = response[0].owner.public_repos;
            this.user.avatar_url = response[0].owner.avatar_url;
            console.log(response);
            resolve();
          },
          error => {
            this.user.login = 'This user name does not exist';
            reject(error);
          }
        );
    });

    return promise;
  }
}
