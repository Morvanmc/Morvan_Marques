import { Movie } from 'src/app/components/movie/movie.model';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { MovieService } from '../movie.service';

@Component({
  selector: 'app-movie-update',
  templateUrl: './movie-update.component.html',
  styleUrls: ['./movie-update.component.css']
})
export class MovieUpdateComponent implements OnInit {

  movie!: Movie;

  constructor(private movieService: MovieService, private router: Router, private route: ActivatedRoute) { }

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id') as any;
    this.movieService.readById(id).subscribe(movie => {
      this.movie = movie;
    });
  }

  updateMovie(): void {
    this.movieService.update(this.movie).subscribe(() => {
      this.movieService.showMessage("Success!");
      this.router.navigate(["/register"]);
    });
  }

  cancel(): void {
    this.router.navigate(["/register"]);
  }

}
