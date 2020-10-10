import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {UsersCarsService} from '../../service/users-cars.service';
import {Router} from '@angular/router';
import {UserWithoutCars} from '../../model/user-without-cars.model';

@Component({
  selector: 'app-user-add',
  templateUrl: './user-add.component.html',
  styleUrls: ['./user-add.component.css']
})
export class UserAddComponent implements OnInit {
  public userForm = new FormGroup({
    name: new FormControl('', Validators.required),
    surname: new FormControl('', Validators.required),
    age: new FormControl('', Validators.required),
  });

  constructor(
    private usersCarsService: UsersCarsService,
    private router: Router
  ) {
  }

  ngOnInit(): void {
  }

  onSubmit(): void {
    const user: UserWithoutCars = this.userForm.value;
    this.usersCarsService.addUser(user).subscribe(() => {
      this.router.navigate(['/', 'users']);
    });
  }
}
