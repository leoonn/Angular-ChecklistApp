import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { CategoryEditComponent } from '../category-edit/category-edit.component';
import { DialogComponent } from '../dialog/dialog.component';
import { Category } from '../Models/Category';

export const CATEGORY_DATE = [
{name: 'Educação', guid: 'aaa-bbb-ccc-dddd'},
{name: 'Trabalho', guid: 'aaa-bbb-ccc-dddd'},
{name: 'Saude', guid: 'aaa-bbb-ccc-dddd'},
{name: 'Outros', guid: 'aaa-bbb-ccc-dddd'}
];

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.css']
})
export class CategoryComponent implements OnInit {
  public displayedColumns: string[] = ['id', 'name', 'actions'];
  public dataSource: Category[] = CATEGORY_DATE;
  constructor(private dialog: MatDialog) { }

  ngOnInit(): void {
  }
   public EditCategory(InputCategory: Category)
   {
    this.dialog.open(CategoryEditComponent, {disableClose: true,
      data: {editableCategory: InputCategory  }}).afterClosed().subscribe(
      resp => {
        console.log("modal edit Closed");
      }
    )
   }
   public DeleteCategory(category: Category)
   {
    this.dialog.open(DialogComponent, {disableClose: true,
      data: {DialogMsg: "Are you sure you want to delete this category?", LeftButtonLabel: "No",RightButtonLabel: "Yes"  }}).afterClosed().subscribe(
      resp => {
        if(resp)
        console.log("Category deleted");
        else
        console.log("Category wasn't delete !");
      }
    )
   }
   public CreateNewCategory()
   {
    this.dialog.open(CategoryEditComponent, {disableClose: true,
      data: {actionName: "Create Category"  }}).afterClosed().subscribe(
      resp => {
        console.log("modal create Closed");
      }
    )

   }
}
