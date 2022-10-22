import { Component, OnInit } from '@angular/core';

import {GlobalService} from "../global.service";
import {News} from "../news.model";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  allNews:News[] = []
  constructor(private globalService:GlobalService) { }

  ngOnInit(): void {
    this.globalService.getAllNews().subscribe({
      next: (value) => {
        this.allNews = value['articles']
      }
    })
  }
}
