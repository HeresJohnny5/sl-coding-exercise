import { Component, OnInit } from '@angular/core';

import 'jquery-ui/ui/widgets/sortable.js';
import * as $ from 'jquery';

@Component({
  selector: 'app-category-list',
  templateUrl: './category-list.component.html',
  styleUrls: ['./category-list.component.css']
})
export class CategoryListComponent implements OnInit {
  constructor() { }

  ngOnInit() { }

  public tableFieldArray: Array<any> = [];
  private newAttribute: any = {};
  public addCategoryState: boolean = false;

  onClickAddRow() {
    this.addCategoryState = true;
    this.tableFieldArray.push(this.newAttribute)
    this.newAttribute = {};

    $("tbody").sortable({
      axis: "y",
      containment: "tbody",
      helper: (e, row) => {
        row.children().each(function () {
          $(this).width($(this).width());
        });
        return row;
      },
      items: "tr:not(:last)"
    });
  }

  onClickRemoveRow(i: number) {
    this.tableFieldArray.splice(i, 1);
  }

  onClickSaveCategory(i: number) {
    const inputField = $(`#tb-row-${i + 1} input`);
    inputField.prop("disabled", true);
    inputField.css("border", "none");

    this.addCategoryState = false;
    this.tableFieldArray[i].saveState = true;
    this.tableFieldArray.push(this.newAttribute)
    this.newAttribute = {};
  }
}