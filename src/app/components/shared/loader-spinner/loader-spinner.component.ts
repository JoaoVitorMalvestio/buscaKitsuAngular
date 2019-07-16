import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-loader-spinner',
  templateUrl: './loader-spinner.component.html',
  styleUrls: ['./loader-spinner.component.css']
})
export class LoaderSpinnerComponent implements OnInit {
  @Input() buscando: boolean;

  constructor() { }

  ngOnInit() {
  }

}
