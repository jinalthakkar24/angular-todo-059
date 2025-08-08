import { Component, ChangeDetectionStrategy } from '@angular/core';

//it is called decorator
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AppComponent {
  title = 'angular-crash-todolist';
}
