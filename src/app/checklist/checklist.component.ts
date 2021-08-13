import { Component, OnInit } from '@angular/core';
import { DialogComponent } from '../dialog/dialog.component';
import { ChecklistItem } from '../Models/ChecklistItem';
import { MatDialog } from '@angular/material/dialog';
import { ChecklistEditComponent } from '../checklist-edit/checklist-edit.component';
import { ChecklistService } from '../services/checklist.service';
import { SnackBarService } from '../services/snack-bar.service';


@Component({
  selector: 'app-checklist',
  templateUrl: './checklist.component.html',
  styleUrls: ['./checklist.component.css']
})
export class ChecklistComponent implements OnInit {


  constructor(private dialog: MatDialog, private checklistService: ChecklistService, private snackBar: SnackBarService) { }

  public dataSource:  ChecklistItem[] = [];
  public displayedColumns: string[] = ['id', 'completed', 'description', 'deadline', 'postDate', 'category','actions' ];

  ngOnInit(): void {
    this.checklistService.getallchecklistitems().subscribe(
      (resp: ChecklistItem[])=>{
        this.dataSource = resp;
      }
    );
  }
  public CreateNewItem()
  {
    this.dialog.open(ChecklistEditComponent, {disableClose: true,
      data: { ctionName: "Create"}
    }).afterClosed().subscribe(resp =>{
      console.log("modal create closed");
      if(resp)
      {
        this.snackBar.ShowSnackBar("Item Created with success", "OK");
      }

    });
  }
  public UpdateCompleteStatus(status: boolean)
  {
    console.log('Status alterado $(status)');
  }
  public UpdateChecklistItem(checklist : ChecklistItem)
  {
    this.dialog.open(ChecklistEditComponent, {disableClose: true,
      data: {updatebleChecklistItem: checklist, actionName: "Edit"}
    }).afterClosed().subscribe(resp =>{
       console.log("modal update closed");
       if(resp)
       {
         this.snackBar.ShowSnackBar("Item Updated with success", "OK");
       }
    });
  }
  public DeleteChecklistItem(checklist : ChecklistItem)
  {
    this.dialog.open(DialogComponent, {disableClose: true,
      data: {msg: 'Voce deseja  realmente apagar este item?', leftButtonLabel: "Cancel", rightButtonLabel: "yes"}
    }).afterClosed().subscribe(resp =>{
       console.log("janela fechada");
       if(resp)
       {
         this.snackBar.ShowSnackBar("Item Deleted with success", "OK");
       }
    });
  }

}
