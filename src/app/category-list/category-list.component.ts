import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-category-list',
  templateUrl: './category-list.component.html',
  styleUrls: ['./category-list.component.css']
})
export class CategoryListComponent implements OnInit {

  constructor() { }

  ngOnInit() { }

  private tableFieldArray: Array<any> = [];
  private newAttribute: any = {};

  onClickAddRow(index) {
    this.tableFieldArray.push(this.newAttribute)
    this.newAttribute = {};

    // console.log('ADD ROW: ', this.tableFieldArray);
  }

  onClickRemoveRow(index) {
    this.tableFieldArray.splice(index, 1);
  }

  onClickSaveCategory(index) {
    this.tableFieldArray[index].saveState = true;

    // console.log('SAVE: ', this.tableFieldArray);

    this.tableFieldArray.push(this.newAttribute)
    this.newAttribute = {};
  }
}