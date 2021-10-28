import { MovieService } from './../../components/movie/movie.service';
import { Component, OnInit } from '@angular/core';
import { Movie } from 'src/app/components/movie/movie.model';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  movies!: Movie[];

  constructor(private movieService: MovieService) { }

  ngOnInit(): void {
    this.movieService.read().subscribe(movies => {
      this.movies = movies
      console.log(movies)
    })
  }

}
