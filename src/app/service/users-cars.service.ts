import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {UserWithoutCars} from '../model/user-without-cars.model';
import {environment} from '../../environments/environment';
import {CarView} from '../model/car-view.model';
import {CarDto} from '../model/car-dto.model';

@Injectable({
  providedIn: 'root'
})
export class UsersCarsService {

  constructor(private http: HttpClient) {
  }

  public getUsers(): Observable<UserWithoutCars[]> {
    return this.http.get<UserWithoutCars[]>(`${environment.API_USERS}`);
  }

  public addUser(user: UserWithoutCars): Observable<UserWithoutCars> {
    return this.http.post<UserWithoutCars>(`${environment.API_USERS}`, user);
  }

  public getCars(): Observable<CarView[]> {
    return this.http.get<CarView[]>(`${environment.API_CARS}`);
  }

  public addCar(car: CarDto): Observable<CarDto> {
    return this.http.post<CarDto>(`${environment.API_CARS}`, car);
  }
}
