import {CarView} from './car-view.model';

export interface UserWithCars {
  name: string;
  surname: string;
  age: string;
  carList: CarView[];
}
