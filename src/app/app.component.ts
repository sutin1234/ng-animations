import { Component } from "@angular/core";
import {
  trigger,
  transition,
  animate,
  style,
  state
} from "@angular/animations";
import { fadeIn, fadeOut, slide } from "./animation";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.scss"],
  animations: [fadeIn, fadeOut, slide]
})
export class AppComponent {
  title = "angular-animation";
  slideLeft = "left";
  slideRight = "right";
}
