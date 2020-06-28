import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-edit-category',
  templateUrl: './edit-category.component.html',
  styleUrls: ['./edit-category.component.css'],
})
export class EditCategoryComponent implements OnInit {
  categoryForm = new FormGroup({
    name: new FormControl('', Validators.required),
  });
  constructor() {}

  ngOnInit(): void {}

  save(){
    console.log(this.categoryForm.value);
  }
}
