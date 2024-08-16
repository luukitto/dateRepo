import {Component, ElementRef, Renderer2, ViewChild} from '@angular/core';
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

  @ViewChild('noButton', { static: false }) noButton!: ElementRef;

  constructor(private renderer: Renderer2) {}

  onYesClick() {
    this.showEmoji = true;
  }

  onNoClick() {
    const randomX = Math.floor(Math.random() * (window.innerWidth - 100));
    const randomY = Math.floor(Math.random() * (window.innerHeight - 100));

    this.renderer.setStyle(this.noButton.nativeElement, 'position', 'absolute');
    this.renderer.setStyle(this.noButton.nativeElement, 'left', `${randomX}px`);
    this.renderer.setStyle(this.noButton.nativeElement, 'top', `${randomY}px`);
  }
}
