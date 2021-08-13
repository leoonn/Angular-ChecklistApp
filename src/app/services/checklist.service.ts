import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Category } from '../Models/Category';
import { ChecklistItem } from '../Models/ChecklistItem';

export const CHECKLIST_DATA = [
  {guid: "aaa-bbb-ccc-ddd", completed: false, description: "Ir ao medico", deadline: new Date(), postDate: new Date(),
  category: {guid: 'aaa-bbb-ccc-ddd', name: 'Saúde'}},
  {guid: "aaa-bbb-ccc-ddd", completed: true, description: "Reunião", deadline: new Date(), postDate: new Date(),
  category: {guid: 'aaa-bbb-ccc-ddd', name: 'Trabalho'}}];

  @Injectable({
  providedIn: 'root'
})
export class ChecklistService {

  constructor() { }
  public getallchecklistitems(): Observable<ChecklistItem[]>{
    return of(CHECKLIST_DATA);
  }
}
