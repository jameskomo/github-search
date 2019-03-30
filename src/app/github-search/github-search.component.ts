import { Component, OnInit } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';
import { SearchService } from '../search.service';
import { User } from '../user';
@Component({
  selector: 'app-github-search',
  templateUrl: './github-search.component.html',
  styleUrls: ['./github-search.component.css']
})
export class GithubSearchComponent implements OnInit {
  user: User;
  search = 'Search Here...';

  constructor(private http: HttpClient, private searchService: SearchService) { }

  ngOnInit() {
    this.user = this.searchService.user;
  }

  onSearch(username: string) {
    console.log(`Searching for ${username}`);
    this.searchService.searchRequest(username).then((data: any) => {
      console.log(data);
    });
    // API
    // tslint:disable-next-line: prefer-const
    // let url = environment.apiUrl + '/users/' + username + '/repo?access_token=' + environment.access_token;
    // http.get(url)


  }
}
