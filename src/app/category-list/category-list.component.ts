import { Component, OnInit } from '@angular/core';

import * as $ from 'jquery';
import 'jquery-ui/ui/widgets/sortable.js';

@Component({
  selector: 'app-category-list',
  templateUrl: './category-list.component.html',
  styleUrls: ['./category-list.component.css']
})
export class CategoryListComponent implements OnInit {
  constructor() { }

  ngOnInit() {
    $("tbody").sortable({
      axis: "y",
      containment: "tbody",
      helper: (e, row) => {
        row.children().each(function () {
          $(this).width($(this).width());
        });
        return row;
      },
      items: 'tr:not(:last)'
    });
  }

  private tableFieldArray: Array<any> = [];
  private newAttribute: any = {};
  public addCategoryState: boolean = false;

  onClickAddRow() {
    this.addCategoryState = true;
    this.tableFieldArray.push(this.newAttribute)
    this.newAttribute = {};
  }

  onClickRemoveRow(i: number) {
    this.tableFieldArray.splice(i, 1);
  }

  onClickSaveCategory(i: number) {
    this.addCategoryState = false;
    this.tableFieldArray[i].saveState = true;
    this.tableFieldArray.push(this.newAttribute)
    this.newAttribute = {};
  }

  // dragStart(event: DragEvent, i: number) {
  //   const closestTableRow = $(event.target).closest('tr');
  //   console.log('closestTableRow: ', closestTableRow);
  // }

  // dragMove(event: DragEvent, i: number) {
  //   console.log('dragMove');
  // }

  // dragEnd(event: DragEvent, i: number) {
  //   console.log('dragEnd');
  // }
}