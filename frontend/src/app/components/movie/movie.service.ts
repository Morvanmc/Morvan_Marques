import { Movie } from './movie.model';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { EMPTY, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MovieService {

  baseURL = "http://localhost:3001/movies"

  constructor(private snackBar: MatSnackBar, private http: HttpClient) { }

  showMessage(msg: string): void {
    this.snackBar.open(msg, 'X', {
      duration: 3000,
      horizontalPosition: 'right',
      verticalPosition: 'top'
    })
  }

  create(movie: Movie): Observable<Movie> {
    return this.http.post<Movie>(this.baseURL, movie)
  }

  read(): Observable<Movie[]> {
    return this.http.get<Movie[]>(this.baseURL)
  }

  readById(id: number): Observable<Movie> {
    const url = `${this.baseURL}/${id}`;
    return this.http.get<Movie>(url)
  }

  update(movie: Movie): Observable<Movie> {
    const url = `${this.baseURL}/${movie.id}`;
    return this.http.put<Movie>(url, movie)
  }

  delete(id: number): Observable<Movie> {
    const url = `${this.baseURL}/${id}`;
    return this.http.delete<Movie>(url)
  }
}

