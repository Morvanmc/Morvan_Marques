import { MovieCreateComponent } from './components/movie/movie-create/movie-create.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from './views/home/home.component';
import { MoviesCrudComponent } from './views/movies-crud/movies-crud.component';
import { MovieUpdateComponent } from './components/movie/movie-update/movie-update.component';
import { MovieDeleteComponent } from './components/movie/movie-delete/movie-delete.component';


const routes: Routes = [
  {
    path: "",
    component: HomeComponent
  },
  {
    path: "register",
    component: MoviesCrudComponent
  },
  {
    path:"register/create",
    component: MovieCreateComponent
  },
  {
    path:"register/update/:id",
    component: MovieUpdateComponent
  },
  {
    path:"register/delete/:id",
    component: MovieDeleteComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
