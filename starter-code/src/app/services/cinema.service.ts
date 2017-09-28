import { Injectable } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { MoviesService } from './movies.service';

@Injectable()
export class CinemaService {

  movies: any = {};

  constructor(
      private  movieThang: MoviesService,
      private  activatedThang: ActivatedRoute
  ) { }

  getMovies () {}
  getMovie(id) {}

}
