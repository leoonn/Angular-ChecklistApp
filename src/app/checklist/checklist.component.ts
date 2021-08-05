import { Component, OnInit } from '@angular/core';
import { CATEGORY_DATE } from '../category/category.component';
import { DialogComponent } from '../dialog/dialog.component';
import { ChecklistItem } from '../Models/ChecklistItem';
import { MatDialog } from '@angular/material/dialog';

export const CHECKLIST_DATA = [
  {guid: "aaa-bbb-ccc-ddd", completed: false, description: "Ir ao medico", deadline: Date.now(), postDate: Date.now(),
  category: CATEGORY_DATE.find(x => x.name == 'Saude')},
  {guid: "aaa-bbb-ccc-ddd", completed: true, description: "Reunião", deadline: Date.now(), postDate: Date.now(),
  category: CATEGORY_DATE.find(x => x.name == 'Trabalho')}
]
@Component({
  selector: 'app-checklist',
  templateUrl: './checklist.component.html',
  styleUrls: ['./checklist.component.css']
})
export class ChecklistComponent implements OnInit {


  constructor(private dialog: MatDialog) { }
  public dataSource = CHECKLIST_DATA ;
  public displayedColumns: string[] = ['id', 'completed', 'description', 'deadline', 'postDate', 'category','actions' ];

  ngOnInit(): void {
  }
  public CreateNewItem()
  {
    this.dialog.open(ChecklistComponent, {disableClose: true,
      data: {actionName: 'Create' },
    }).afterClosed().subscribe(resp =>{
       console.log("fechando modal de criação");
    });
  }
  public UpdateCompleteStatus(status: boolean)
  {
    console.log('Status alterado $(status)');
  }
  public UpdateChecklistItem(checklist : ChecklistItem)
  {

  }
  public DeleteChecklistItem(checklist : ChecklistItem)
  {
    this.dialog.open(DialogComponent, {disableClose: true,
      data: {msg: 'Voce deseja  realmente apagar este item?', leftButtonLabel: "Cancel", rightButtonLabel: "yes"}
    }).afterClosed().subscribe(resp =>{
       console.log("janela fechada");
    });
  }

}
