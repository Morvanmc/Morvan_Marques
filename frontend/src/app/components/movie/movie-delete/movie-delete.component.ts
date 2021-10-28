import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Movie } from '../movie.model';
import { MovieService } from '../movie.service';

@Component({
  selector: 'app-movie-delete',
  templateUrl: './movie-delete.component.html',
  styleUrls: ['./movie-delete.component.css']
})
export class MovieDeleteComponent implements OnInit {

  movie!: Movie;

  constructor(private movieService: MovieService, private router: Router, private route: ActivatedRoute) { }

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id') as any;
    this.movieService.readById(id).subscribe(movie => {
      this.movie = movie;
    });
  }

  deleteMovie(): void {
    this.movieService.delete(this.movie.id as any).subscribe(() => {
      this.movieService.showMessage("Success!");
      this.router.navigate(["/register"]);
    });
  }

  cancel(): void {
    this.router.navigate(["/register"]);
  }
}
