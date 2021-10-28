import { Movie } from './../movie.model';
import { MovieService } from './../movie.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router'


@Component({
  selector: 'app-movie-create',
  templateUrl: './movie-create.component.html',
  styleUrls: ['./movie-create.component.css']
})
export class MovieCreateComponent implements OnInit {

  movie: Movie = {
    id: '',
    MovieNumber: '',
    name: '',
    genre: '',
    year: '',
    mainAct: '',
    director: '',
    producer: '',
    language: '',
    priceRent: '',
    dateRent: '',
    posterURL: '',
    description: '',
  }

  constructor(private movieService: MovieService,
    private router: Router) { }

  ngOnInit(): void {
  }

  createMovie(): void {
    this.movieService.create(this.movie).subscribe(() => {
      this.movieService.showMessage('Success! Movie saved!!')
      this.router.navigate(['/register'])
    })
  }

  cancel(): void {
    this.router.navigate(['/register'])
  }
}
