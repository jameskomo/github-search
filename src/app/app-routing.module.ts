import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { GithubSearchComponent } from './github-search/github-search.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { AboutComponent } from './about/about.component';
import { NotFoundComponent } from './not-found/not-found.component';

const routes: Routes = [
  { path: 'github-search', component: GithubSearchComponent },
  { path: 'about', component: AboutComponent },
  { path: '', redirectTo: '/github-search', pathMatch: 'full' },
  { path: '**', component: NotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
