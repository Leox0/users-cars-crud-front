import { Component, OnInit } from '@angular/core';
import {UserWithoutCars} from '../../model/user-without-cars.model';
import {UsersCarsService} from '../../service/users-cars.service';

@Component({
  selector: 'app-users-list',
  templateUrl: './users-list.component.html',
  styleUrls: ['./users-list.component.css']
})
export class UsersListComponent implements OnInit {

  public usersList: UserWithoutCars[] = [];

  constructor(
    private usersCarsService: UsersCarsService
  ) {
  }

  ngOnInit(): void {
    this.usersCarsService.getUsers().subscribe((usersList) => {
      this.usersList = usersList;
    });
  }

}
