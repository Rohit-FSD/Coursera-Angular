import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DishService } from '../services/dish.service';
import { Dish } from '../shared/dish';
import { Location } from '@angular/common';

@Component({
  selector: 'app-dishdetail',
  templateUrl: './dishdetail.component.html',
  styleUrls: ['./dishdetail.component.scss']
})
export class DishdetailComponent implements OnInit {

  menuDish:Dish;

  constructor(
    private dishservice: DishService,
    private route: ActivatedRoute,
    private location: Location
  ) { }

  ngOnInit(): void {
    let id=this.route.snapshot.params['id'];
    this.menuDish=this.dishservice.getDish(id);
  }

  
  goBack(): void {
    this.location.back();
  }

}
