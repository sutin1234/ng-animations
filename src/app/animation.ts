import {
  trigger,
  transition,
  animate,
  style,
  state
} from "@angular/animations";

export let fadeIn = trigger("fadeIn", [
  transition(":enter", [
    style({ opacity: 0 }),
    animate("1000ms ease-in", style({ opacity: 1 }))
  ])
]);

export let fadeOut = trigger("fadeOut", [
  transition(":enter", animate("1000ms ease-out", style({ opacity: 0 })))
]);

export let slide = trigger("slide", [
  state("left", style({ transform: "translateX(-50%)" })),
  state("right", style({ transform: "translateX(50%)" })),
  transition("* => *", animate(3000))
]);
