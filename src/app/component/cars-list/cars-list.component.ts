import { Component, OnInit } from '@angular/core';
import {CarView} from '../../model/car-view.model';
import {UsersCarsService} from '../../service/users-cars.service';

@Component({
  selector: 'app-cars-list',
  templateUrl: './cars-list.component.html',
  styleUrls: ['./cars-list.component.css']
})
export class CarsListComponent implements OnInit {
  public carsList: CarView[] = [];

  constructor(
    private usersCarsService: UsersCarsService
  ) {
  }

  ngOnInit(): void {
    this.usersCarsService.getCars().subscribe((carsList) => {
      this.carsList = carsList;
    });
  }
}
