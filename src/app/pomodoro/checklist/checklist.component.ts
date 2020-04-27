import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-checklist",
  templateUrl: "./checklist.component.html",
  styleUrls: ["./checklist.component.sass"],
})
export class ChecklistComponent implements OnInit {
  tasks = [];
  newTaskName = "";

  constructor() {}

  ngOnInit(): void {}

  onEdit() {}

  onDelete() {}

  onAddTask() {
    this.tasks.push({ name: this.newTaskName });
  }
}
