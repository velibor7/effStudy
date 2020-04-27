import { Component, OnInit, ViewChild, ElementRef } from "@angular/core";

@Component({
  selector: "app-checklist",
  templateUrl: "./checklist.component.html",
  styleUrls: ["./checklist.component.scss"],
})
export class ChecklistComponent implements OnInit {
  @ViewChild("searchInput") searchInput: ElementRef;

  tasks = [];
  newTaskName = "";

  constructor() {}

  ngOnInit(): void {}

  onEdit() {}

  onDelete() {}

  onAddTask() {
    this.tasks.push({ name: this.newTaskName });
    this.searchInput.nativeElement.value = "";
  }
}
