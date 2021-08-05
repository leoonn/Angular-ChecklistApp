import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Category } from '../Models/Category';

@Component({
  selector: 'app-category-form',
  templateUrl: './category-form.component.html',
  styleUrls: ['./category-form.component.css']
})
export class CategoryFormComponent implements OnInit {

  @Input() public actionName = 'Edit';
  public categoryForm!: FormGroup;
  @Output() closeModelEventEmitter: EventEmitter<boolean> = new EventEmitter<boolean>();
  @Input() public editableCategory!: Category;
  public isFormReady = false;

  constructor(private formBuilder: FormBuilder) {

  }

  ngOnInit(): void {
    this.categoryForm= this.formBuilder.group({
      name: [this.editableCategory != null ? this.editableCategory.name : "", Validators.required]
    });
    this.isFormReady = true;
  }

  public cancel(){
    this.closeModelEventEmitter.emit(false);
  }
  public Save()
  {
    console.log("save clicked");
    this.closeModelEventEmitter.emit(true);
  }


}
