import { Component, OnInit } from '@angular/core';
import { DemoService } from '../demo.service';

@Component({
  selector: 'app-total',
  templateUrl: './total.component.html',
  styleUrl: './total.component.scss',
})
export class TotalComponent implements OnInit {
  constructor(private demoService: DemoService) {}

  ngOnInit(): void {
    this.demoService.saludo();
  }
}
