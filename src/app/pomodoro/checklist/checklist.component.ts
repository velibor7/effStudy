import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-checklist",
  templateUrl: "./checklist.component.html",
  styleUrls: ["./checklist.component.sass"],
})
export class ChecklistComponent implements OnInit {
  newTaskName: string = "";

  constructor() {}

  ngOnInit(): void {}

  onEditChecklistElem() {}

  onDeleteChecklistElem() {}

  onAddTask() {}
}
