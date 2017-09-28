import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { Routes, RouterModule} from '@angular/router';

import {MoviesService} from './services/movies.service';

import { AppComponent } from './app.component';
import { HomeComponent } from './pages/home/home.component';
import { MoviesComponent } from './pages/movies/movies.component';

const myRoutes: Routes = [
  {path: '', component: HomeComponent },
  {path: 'movies', component: MoviesComponent },
];


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    MoviesComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot(myRoutes),
  ],
  providers: [MoviesService],
  bootstrap: [AppComponent]
})
export class AppModule { }
