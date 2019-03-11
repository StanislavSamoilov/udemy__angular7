import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'udemy-angular7';
  pageName = 'recipes';

  onPageChange(selectedPage: string) {
    this.pageName = selectedPage;
  }
}
