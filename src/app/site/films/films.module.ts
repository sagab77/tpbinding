import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FilmsComponent } from './films.component';
import { ReactiveFormsModule,FormsModule} from '@angular/forms';
import { Routes,RouterModule} from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { SearchformComponent } from './searchform/searchform.component';
import { SearchmovieService } from './services/searchmovie.service';
import { ListDirective } from './directives/list.directive';


const routes: Routes = [
   { path:'films',component:FilmsComponent}
];



@NgModule({
  declarations: [FilmsComponent, SearchformComponent, ListDirective],
  providers : [SearchmovieService],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    RouterModule.forChild(routes)
  ]
})
export class FilmsModule { }
