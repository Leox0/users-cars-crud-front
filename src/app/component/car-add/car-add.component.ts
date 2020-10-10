import {Component, OnInit} from '@angular/core';
import {UsersCarsService} from '../../service/users-cars.service';
import {Router} from '@angular/router';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {UserWithoutCars} from '../../model/user-without-cars.model';
import {CarDto} from '../../model/car-dto.model';

@Component({
  selector: 'app-car-add',
  templateUrl: './car-add.component.html',
  styleUrls: ['./car-add.component.css']
})
export class CarAddComponent implements OnInit {
  public carForm = new FormGroup({
    brand: new FormControl('', Validators.required),
    model: new FormControl('', Validators.required),
    year: new FormControl('', Validators.required),
    userId: new FormControl('', Validators.required),
  });
  constructor(
    private usersCarsService: UsersCarsService,
    private router: Router
  ) {
  }

  ngOnInit(): void {

  }
  onSubmit(): void {
    const car: CarDto = this.carForm.value;
    this.usersCarsService.addCar(car).subscribe(() => {
      this.router.navigate(['/', 'cars']);
    });
  }
}
