import { CategoriesService } from './../../services/categories.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.css']
})
export class CategoriesComponent implements OnInit {
  categories;
  constructor(private categoryService:CategoriesService) {

    this.categoryService.getCategories().subscribe(data=>{
      this.categories=data;
    })
  }

  ngOnInit(): void {

  }
  deleteCategory(id){

  }
}
