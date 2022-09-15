import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-intro-section',
  templateUrl: './intro-section.component.html',
  styleUrls: ['./intro-section.component.css'],
})
export class IntroSectionComponent implements OnInit {
  statuses: string[] = [];
  totalOrders!: number;
  receivedOrders!: number;
  pendingOrders!: number;
  cancelledOrders!: number;
  constructor() {}

  ngOnInit(): void {}
}
