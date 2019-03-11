import { Component, OnInit, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  @Output() selectPage = new EventEmitter<string>();

  constructor() { }

  ngOnInit() {
  }

  onSelect(pageName: string) {
    this.selectPage.emit(pageName);
  }

}
