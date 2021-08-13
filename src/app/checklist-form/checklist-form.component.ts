import { Component, EventEmitter, Input, OnInit, Output, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, FormGroupDirective, Validators } from '@angular/forms';
import { Category } from '../Models/Category';
import { ChecklistItem } from '../Models/ChecklistItem';
import { CategoryService } from '../services/category.service';

@Component({
  selector: 'app-checklist-form',
  templateUrl: './checklist-form.component.html',
  styleUrls: ['./checklist-form.component.css']
})
export class ChecklistFormComponent implements OnInit {
  @Input() public actionName = "Edit";
  @Input() public checklistItem!: ChecklistItem;
  @Output() public formCloseEvent: EventEmitter<boolean> = new EventEmitter<boolean>();

  @ViewChild(FormGroupDirective) checklistFormGroupDirective!: FormGroupDirective;
  public checklistform!: FormGroup;
  public categories: Category[] = [];
  constructor(private formBuilder: FormBuilder, private categoryService: CategoryService) { }

  ngOnInit(): void {
    this.categoryService.getallcategories().subscribe(
      (resp: Category[]) =>{
        this.categories = resp;
        this.CreateForm();
      }
    )

  }

  private CreateForm()
  {
    this.checklistform = this.formBuilder.group(
      {
        completed: [this.checklistItem != null ? this.checklistItem.completed : false, Validators.required ],
        description: [this.checklistItem != null ? this.checklistItem.description : '', Validators.required ],
        deadline: [this.checklistItem != null ? this.checklistItem.deadline : new Date(), Validators.required ],
        category: [this.checklistItem != null ? this.checklistItem.category : null, Validators.required ]
      }
    )
  }
  public CloseForm()
  {

  }
  public cancel()
  {
    this.formCloseEvent.emit(false);
  }
  public Save()
  {
    this.ClearForm();
    this.formCloseEvent.emit(true);

  }

  private ClearForm()
  {
    this.checklistform.reset();
    this.checklistFormGroupDirective.resetForm();

  }

}
