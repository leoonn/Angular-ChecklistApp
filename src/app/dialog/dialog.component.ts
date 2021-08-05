import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-dialog',
  templateUrl: './dialog.component.html',
  styleUrls: ['./dialog.component.css']
})
export class DialogComponent implements OnInit {

  constructor(public dialogRef: MatDialogRef<DialogComponent>,@Inject(MAT_DIALOG_DATA) public data: any) {
    if(data.LeftButtonLabel != null)
    {
      this.LeftButtonLabel = data.LeftButtonLabel;
    }
    if(data.RightButtonLabel != null)
    {
      this.RightButtonLabel = data.RightButtonLabel;
    }
    if(data.DialogMsg != null)
    {
      this.DialogMsg = data.DialogMsg;
    }
  }

  ngOnInit(): void {

  }

  public DialogMsg = "Do you wish continue with this action?";
  public LeftButtonLabel = "Cancel";
  public RightButtonLabel = "Ok";

  public ClickedLeftButton()
  {
    this.dialogRef.close(false);
  }
  public ClickedRightButton()
  {
    this.dialogRef.close(true);
  }


}
