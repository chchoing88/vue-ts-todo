let id = 0;

export default class Todo {
  id: number;
  name: string;
  isDone: boolean;
  isEdit: boolean;

  constructor(name: string) {
    this.id = id++;
    this.name = name;
    this.isDone = false;
    this.isEdit = false;
  }
}
