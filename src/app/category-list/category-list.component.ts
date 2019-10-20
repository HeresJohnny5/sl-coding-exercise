import { Component, OnInit } from '@angular/core';

import * as $ from 'jquery';

@Component({
  selector: 'app-category-list',
  templateUrl: './category-list.component.html',
  styleUrls: ['./category-list.component.css']
})
export class CategoryListComponent implements OnInit {

  constructor() { }

  ngOnInit() { }

  onClickAddCategory() {
    const tbRowCount = $("tbody tr").length + 1;
    const draggableIcon = "../../assets/images/icon/icon-draggable/Group 11070.svg";

    $('tbody').append(`
      <tr id="tb-row-${tbRowCount}">
        <td class="category category-col-1">
          <span>
            <img src="../../assets/images/icon/icon-draggable/Group 11070.svg" class="remove-category" alt="Remove Category">
          </span>
        </td>
        <td class="category category-col-2">
          <input type="text" name="category" placeholder="category">
        </td>
        <td class="category category-col-3">
          <span>1</span>
        </td>
        <td class="category category-col-4">
          <span>
            <img src="../../assets/images/icon/icon-remove/Group 15571.svg" class="remove-category" alt="Remove Category">
          </span>
        </td>
      </tr>
    `);
  }
}

// <tr id="tb-row-1">
//   <td class="category category-col-1">
//     <span>
//       <img src="../../assets/images/icon/icon-draggable/Group 11070.svg" class="draggable-icon" alt="Draggable Category Icon">
//     </span>
//   </td>
//   <td class="category category-col-2">
//     <span>Category 1</span>
//   </td>
//   <td class="category category-col-3">
//     <span>1</span>
//   </td>
//   <td class="category category-col-4">
//     <span>
//       <img src="../../assets/images/icon/icon-remove/Group 15571.svg" class="remove-category" alt="Remove Category">
//     </span>
//   </td>
// </tr>