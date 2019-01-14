import {Component, OnInit} from '@angular/core';
import {Food} from '../../model';
import {FoodService} from '../../services';

@Component({
  selector: 'flogz-food-list',
  templateUrl: './food-list.component.html',
  styleUrls: ['./food-list.component.scss']
})
export class FoodListComponent implements OnInit {

  public foods: Food[] = [];

  constructor(private foodService: FoodService) {
    this.refreshFoods();
  }

  ngOnInit() {
  }

  public refreshFoods(): void {
    this.foodService.findAll()
      .subscribe(response => {
        this.foods = response;
      });
  }

}
