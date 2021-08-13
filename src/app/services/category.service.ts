import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Category } from '../Models/Category';

export const CATEGORY_DATE = [
  {name: 'Educação', guid: 'aaa-bbb-ccc-dddd'},
  {name: 'Trabalho', guid: 'aaa-bbb-ccc-dddd'},
  {name: 'Saude', guid: 'aaa-bbb-ccc-dddd'},
  {name: 'Outros', guid: 'aaa-bbb-ccc-dddd'}
  ];
@Injectable({
  providedIn: 'root'
})
export class CategoryService {

  constructor() { }
  public getallcategories(): Observable<Category[]>{
    return  of(CATEGORY_DATE);
  }
}
