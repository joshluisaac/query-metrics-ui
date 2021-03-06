import { Component, OnInit } from "@angular/core";
import { DataService } from "../../services/data.service";
import { Observable } from "rxjs";

@Component({
  selector: "app-user",
  templateUrl: "./user.component.html",
  styleUrls: ["./user.component.css"]
})
export class UserComponent implements OnInit {
  name: string;
  phoneNumber: string;
  count: number;
  posts: IPost[];

  constructor(private dataService: DataService) {}

  ngOnInit() {
    this.name = "Joshua";
    this.phoneNumber = "8907665566";
    this.count = 0;

    this.dataService.getPosts().subscribe((data: IPost[]) => {
      this.posts = data;
    });
  }

  increment() {
    this.count = this.count + 1;
  }

  decrement() {
    this.count = this.count - 1;
  }
}

interface IPost {
  id: number;
  userId: string;
  title: string;
  body: string;
}
