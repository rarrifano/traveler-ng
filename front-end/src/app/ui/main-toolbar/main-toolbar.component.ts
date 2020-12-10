import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-main-toolbar',
  templateUrl: './main-toolbar.component.html',
  styleUrls: ['./main-toolbar.component.scss']
})
export class MainToolbarComponent implements OnInit {
    // Atributos @Input() servem para receber valores do componente pai
    @Input() appName : string

  constructor() { }

  ngOnInit(): void {
  }

}
