import { Component } from '@angular/core';
import {NgIf} from "@angular/common";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  standalone: true,
  imports: [
    NgIf
  ],
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  showEmoji = false;

  onYesClick() {
    this.showEmoji = true;
  }
}
