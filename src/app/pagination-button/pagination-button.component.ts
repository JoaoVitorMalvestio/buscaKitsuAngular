import { Button } from './../button';
import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-pagination-button',
  templateUrl: './pagination-button.component.html',
  styleUrls: ['./pagination-button.component.css']
})
export class PaginationButtonComponent implements OnInit {
  @Input() buttons: Button[];

  constructor() { }

  ngOnInit() {
  }

}
