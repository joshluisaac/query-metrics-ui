import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-user",
  templateUrl: "./user.component.html",
  styleUrls: ["./user.component.css"]
})
export class UserComponent implements OnInit {
  name: string;
  phoneNumber: string;
  count: number;

  constructor() {}

  ngOnInit() {
    this.name = "Joshua";
    this.phoneNumber = "8907665566";
  }

  increment() {
    this.count = this.count + 1;
  }

  decrement() {
    this.count = this.count - 1;
  }
}
