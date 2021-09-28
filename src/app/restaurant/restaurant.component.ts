
import { Restaurant } from './../models/restaurant';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-restaurant',
  templateUrl: './restaurant.component.html',
  styleUrls: ['./restaurant.component.css']
})
export class RestaurantComponent implements OnInit {
  restaurants: Restaurant[]=[];


  constructor() { }

  ngOnInit(): void {
    this.restaurants=[
    {
      "images":"../../assets/images.jpg",
      "name":"BURGER KING",
      "paragraph":"Une seule Adresse plusieurs concepts",
      "content":"Fast Food - Burger - Sandwich",
      "location":"CASABLANCA",

    },
    {
      "images":"../../assets/brunch.jpeg",
      "name":"BRUNCH A LA CARTE ",
      "paragraph":"Une seule Adresse plusieurs concepts",
      "content":"Healthy - petit déjeuner-brunch",
      "location":"CASABLANCA",
    },
    {
      "images":"../../assets/salade.jpeg",
      "name":"BAR A SALADE",
      "paragraph":"Une seule Adresse plusieurs concepts",
      "content":"Bowl - salade - végétarien",
      "location":"CASABLANCA",
    }

  
]
}
}
