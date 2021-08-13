import { Category } from "./Category";

export class ChecklistItem{

  public guid!: string;
  public completed!: Boolean;
  public description!: string;
  public deadline!: Date;
  public postDate!: Date;
  public category!: Category;

}
