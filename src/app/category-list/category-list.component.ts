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
  public saveField: boolean = false;

  onClickAddRow() {
    this.tableFieldArray.push(this.newAttribute)
    // this.newAttribute = {};
  }

  onClickRemoveRow(index) {
    this.tableFieldArray.splice(index, 1);
  }
}