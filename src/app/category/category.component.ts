import { Component, OnInit } from '@angular/core';
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
  constructor() { }

  ngOnInit(): void {
  }
   public EditCategory(category: Category)
   {
    console.log("Edit new Category clicked");
   }
   public DeleteCategory(category: Category)
   {
    console.log("Delete new Category clicked");
   }
   public CreateNewCategory()
   {
    console.log("Create new Category clicked");

   }
}
