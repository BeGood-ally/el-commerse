import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CategoriesService {

  constructor() { }
    categories = [
      {id:1, img:'https://upload.wikimedia.org/wikipedia/commons/thumb/4/41/AMD_Phenom_II_X4_840_%28HDX840WFK42GM%29_CPU-top_oblique_PNr%C2%B00373.jpg/220px-AMD_Phenom_II_X4_840_%28HDX840WFK42GM%29_CPU-top_oblique_PNr%C2%B00373.jpg', name:'Category 1', description:'Lorem ipsum dolor sit amet, consectetur adipiscing elit'},
      {id:2, img:'https://upload.wikimedia.org/wikipedia/commons/thumb/4/41/AMD_Phenom_II_X4_840_%28HDX840WFK42GM%29_CPU-top_oblique_PNr%C2%B00373.jpg/220px-AMD_Phenom_II_X4_840_%28HDX840WFK42GM%29_CPU-top_oblique_PNr%C2%B00373.jpg', name:'Category 2', description:'Lorem ipsum dolor sit amet, consectetur adipiscing elit'},
      {id:3, img:'https://upload.wikimedia.org/wikipedia/commons/thumb/4/41/AMD_Phenom_II_X4_840_%28HDX840WFK42GM%29_CPU-top_oblique_PNr%C2%B00373.jpg/220px-AMD_Phenom_II_X4_840_%28HDX840WFK42GM%29_CPU-top_oblique_PNr%C2%B00373.jpg', name:'Category 3', description:'Lorem ipsum dolor sit amet, consectetur adipiscing elit'}
    ]
  
}
