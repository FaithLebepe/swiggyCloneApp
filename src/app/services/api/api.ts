import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class Api {

  banners = [
        {banner: 'assets/imgs/1.jpg'},
        {banner: 'assets/imgs/2.jpg'},
        {banner: 'assets/imgs/3.jpg'},
      ];

  restaurants = [
        {
          uid: '12wefdss',
          cover: 'assets/imgs/1.jpg',
          name: 'Stayfit',
          short_name: 'stayfit',
          cuisines: [
            'Italian',
            'Mexican'
          ],
          rating: 5,
          delivery_time: 25,
          distance: 2.5,
          price: 100,
          serving: "One"
        },
        {
          uid: '12wefdefsdss',
          cover: 'assets/imgs/2.jpg',
          name: 'Stayfit1',
          short_name: 'stayfit1',
          cuisines: [
            'Italian',
            'Mexican'
          ],
          rating: 5,
          delivery_time: 25,
          distance: 2.5,
          price: 200,
          serving: "Two"
        },
        {
          uid: '12wefdssrete',
          cover: 'assets/imgs/3.jpg',
          name: 'Stayfit2',
          short_name: 'stayfit2',
          cuisines: [
            'Italian',
            'Mexican'
          ],
          rating: 5,
          delivery_time: 25,
          distance: 2.5,
          price: 300,
          serving: "Three"
        },
        {
          uid: '12wefdss',
          cover: 'assets/imgs/1.jpg',
          name: 'Stayfit',
          short_name: 'stayfit',
          cuisines: [
            'Italian',
            'Mexican'
          ],
          rating: 5,
          delivery_time: 20,
          price: 400,
          serving: "Four"
        },
        {
          uid: '5678',
          cover: 'assets/imgs/2.jpg',
          name: 'Dorys',
          short_name: 'dorys',
          cuisines: [
            'Italian',
            'Mexican'
          ],
          rating: 3.7,
          delivery_time: 25,
          price: 500,
          serving: "Five"
        },
        {
          uid: '9012',
          cover: 'assets/imgs/3.jpg',
          name: 'Rocomamas',
          short_name: 'rocomamas',
          cuisines: [
            'Italian',
            'Mexican'
          ],
          rating: 3.7,
          delivery_time: 25,
          price: 600,
          serving: "Six"
        },
      ];

  allRestaurants = [
        {
          uid: '12wefdss',
          cover: 'assets/imgs/1.jpg',
          name: 'Stayfit',
          short_name: 'stayfit',
          cuisines: [
            'Italian',
            'Mexican'
          ],
          rating: 5,
          delivery_time: 20,
          price: 100,
          serving: "One"
        },
        {
          uid: '12wefdefsdss',
          cover: 'assets/imgs/2.jpg',
          name: 'Dorys',
          short_name: 'dorys',
          cuisines: [
            'Italian',
            'Mexican'
          ],
          rating: 3.7,
          delivery_time: 25,
          price: 200,
          serving: "Two"
        },
        {
          uid: '12wefdssrete',
          cover: 'assets/imgs/3.jpg',
          name: 'Rocomamas',
          short_name: 'rocomamas',
          cuisines: [
            'Italian',
            'Mexican'
          ],
          rating: 3.7,
          delivery_time: 25,
          price: 300,
          serving: "Three"
        },
  ]

  categories = [
    {
      id: "e00",
      name: "Italian",
      uid: "12wefdss"
    },
    {
      id: "e0",
      name: "Mexican",
      uid: "12wefdss"
    },
  ]; 

  allItems = [
    {
        category_id: "e00",
        cover: "assets/imgs/pizza.jpg",
        desc: "Great in taste",
        id: "i1",
        name: "Pizza",
        price: 120,
        rating: 0,
        status: true,
        uid: "12wefdss",
        variation: false,
        veg: false
    },
    {
        category_id: "e0",
        cover: "assets/imgs/salad.jpg",
        desc: "Great in taste",
        id: "i2",
        name: "Caprese Salad",
        price: 200,
        rating: 0,
        status: true,
        uid: "12wefdss",
        variation: false,
        veg: true
    },
    {
        category_id: "e00",
        cover: "assets/imgs/pasta.jpg",
        desc: "Great in taste",
        id: "i3",
        name: "Pasta",
        price: 150.50,
        rating: 0,
        status: true,
        uid: "12wefdss",
        variation: false,
        veg: false
    },
  ];

  restaurantsItems = [
        {
          uid: "12wefdss",
          cover: 'assets/imgs/1.jpg',
          name: 'Stayfit',
          short_name: 'stayfit',
          address: '123 Main St, City, Country',
          cuisines: [
            'Italian',
            'Mexican'
          ],
          rating: 5,
          delivery_time: 20,
          price: 200,
          serving: "Two"
        },
        {
          uid: '12wefdefsdss',
          cover: 'assets/imgs/2.jpg',
          name: 'Dorys',
          short_name: 'dorys',
          address: '456 Elm St, City, Country',
          cuisines: [
            'Italian',
            'Mexican'
          ],
          rating: 3.7,
          delivery_time: 25,
          price: 100,
          serving: "One"
        },
        {
          uid: '12wefdssrete',
          cover: 'assets/imgs/3.jpg',
          name: 'Rocomamas',
          short_name: 'rocomamas',
          address: '789 Oak St, City, Country',
          cuisines: [
            'Italian',
            'Mexican'
          ],
          rating: 3.7,
          delivery_time: 25,
          price: 300,
          serving: "Three"
        },
      ];
  
}
