import { Component,OnInit} from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-todolist',
  imports: [CommonModule,FormsModule],
  templateUrl: './todolist.component.html',
  styleUrl: './todolist.component.css'
})
export class TodolistComponent implements OnInit {
  list: any = []
  task: string = "";
  ngOnInit(): void {
    this.GetAll();
  }
  Add() {
    let obj = {
      TaskName: this.task,
      IsComplete: false
    };
    this.list.push(obj);
    this.Save();
    this.task = '';
  }
  ChangeStatus(index: number, currentValue: boolean) {
    if (this.list.length > index) {
      let obj = this.list[index];
      if (obj != null && typeof obj != "undefined") {
        obj.IsComplete = !currentValue;
        this.list[index] = obj;
        this.Save();
      }
    }
  }
  Delete(index: number) {
    if (this.list.length > index) {
      this.list.splice(index, 1);
      this.Save();
    }
  }
  DeleteAll() {
    this.list = [];
    this.Save();
  }
  Save() {
    localStorage.setItem("todo", JSON.stringify(this.list));
  }
  GetAll() {
    let value = localStorage.getItem("todo");
    if (value != '' && value != null && typeof value != "undefined") {
      this.list = JSON.parse(value!);
    }
  }
} 