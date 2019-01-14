import {FoodType} from './food-type';

export class Food {

  constructor(public id?: string,
              public foodType?: FoodType,
              public name?: string,
              public plantFat?: number,
              public plantProtein?: number,
              public plantNetCarbs?: number,
              public plantFiber?: number,
              public animalFat?: number,
              public animalProtein?: number,
              public animalCarbs?: number) {
  }

}
