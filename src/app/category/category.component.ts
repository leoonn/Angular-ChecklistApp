import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { CategoryEditComponent } from '../category-edit/category-edit.component';
import { DialogComponent } from '../dialog/dialog.component';
import { Category } from '../Models/Category';
import { CategoryService } from '../services/category.service';
import { SnackBarService } from '../services/snack-bar.service';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.css']
})
export class CategoryComponent implements OnInit {
  public displayedColumns: string[] = ['id', 'name', 'actions'];
  public dataSource: Category[] = [];
  constructor(private dialog: MatDialog, private categoryservice: CategoryService, private snackbarService: SnackBarService) { }

  ngOnInit(): void {
    this.categoryservice.getallcategories().subscribe(
       (resp: Category[]) => {
         this.dataSource = resp;
       }
    );
  }

   public EditCategory(InputCategory: Category)
   {
    this.dialog.open(CategoryEditComponent, {disableClose: true,
      data: {editableCategory: InputCategory  }}).afterClosed().subscribe(
      resp => {
        if(resp)
        {
        this.snackbarService.ShowSnackBar("Category Edited", 'OK')
        }
      }
    )
   }
   public DeleteCategory(category: Category)
   {
    this.dialog.open(DialogComponent, {disableClose: true,
      data: {DialogMsg: "Are you sure you want to delete this category?", LeftButtonLabel: "No",RightButtonLabel: "Yes"  }}).afterClosed().subscribe(
      resp => {
        if(resp)
        {
        this.snackbarService.ShowSnackBar('Category was deleted with success', 'OK')
        console.log("Category deleted");
        }
        else{
          this.snackbarService.ShowSnackBar("Category wasn't deleted !", 'OK')
          console.log("Category wasn't delete !");
        }

      }
    )
   }
   public CreateNewCategory()
   {
    this.dialog.open(CategoryEditComponent, {disableClose: true,
      data: {actionName: "Create Category"  }}).afterClosed().subscribe(
      resp => {
        if(resp)
        {
        this.snackbarService.ShowSnackBar('Category Created', 'OK')
        }

      }
    )

   }
}
