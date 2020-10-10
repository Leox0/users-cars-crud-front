import {Component, OnInit} from '@angular/core';
import {UserWithCars} from '../../model/user-with-cars.model';
import {ActivatedRoute} from '@angular/router';
import {UsersCarsService} from '../../service/users-cars.service';


@Component({
  selector: 'app-user-detail',
  templateUrl: './user-detail.component.html',
  styleUrls: ['./user-detail.component.css']
})
export class UserDetailComponent implements OnInit {
  public user: UserWithCars = null;

  constructor(
    private route: ActivatedRoute,
    private usersCarsService: UsersCarsService
  ) {
  }

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      if (params['id']) {
        this.usersCarsService.getUser(params['id']).subscribe((user) => {
          this.user = user;
        });
      }
    });
  }

}
