import { Component, EventEmitter, Inject, Input, OnInit, Output } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

import { ChecklistItem } from '../Models/ChecklistItem';

@Component({
  selector: 'app-checklist-edit',
  templateUrl: './checklist-edit.component.html',
  styleUrls: ['./checklist-edit.component.css']
})
export class ChecklistEditComponent implements OnInit {
 @Input() public actionName = "Edit"
 @Input() public checklistItem!: ChecklistItem;
 @Output() public formCloseEvent: EventEmitter<boolean> = new EventEmitter<boolean>();
  constructor(public modalRef: MatDialogRef<ChecklistEditComponent>, @Inject(MAT_DIALOG_DATA) public data: any) {
    if(data.updatebleChecklistItem != null)
    {
      this.checklistItem = data.updatebleChecklistItem;
    }
    if(data.actionName != null)
    {
      this.actionName = data.actionName;
    }
   }

  ngOnInit(): void {
  }
  public formClose($event: any){
    this.modalRef.close($event);
    console.log("Event " + $event);
  }
}
