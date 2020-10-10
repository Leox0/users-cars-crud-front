import { NgModule } from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {HomeComponent} from './component/home/home.component';
import {UsersListComponent} from './component/users-list/users-list.component';
import {UserAddComponent} from './component/user-add/user-add.component';
import {CarAddComponent} from './component/car-add/car-add.component';
import {PageNotFoundComponent} from './component/page-not-found/page-not-found.component';
import {UserDetailComponent} from './component/user-detail/user-detail.component';
import {CarsListComponent} from './component/cars-list/cars-list.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent
  },
  {
    path: 'users',
    component: UsersListComponent
  },
  {
    path: 'user-add',
    component: UserAddComponent
  },
  {
    path: 'users/:id',
    component: UserDetailComponent
  },
  {
    path: 'car-add',
    component: CarAddComponent
  },
  {
    path: 'cars',
    component: CarsListComponent
  },
  {
    path: '**',
    component: PageNotFoundComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
