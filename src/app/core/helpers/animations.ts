import { trigger, transition, style, animate, animateChild } from '@angular/animations';

const fadeInitial = { opacity: 0, transform: 'translateY(-4px)' };
const fadeFinal = { opacity: 1, transform: 'none' };
const fadeAnimation = '0.3s 0s ease-in-out';
export const fade = trigger('fade', [
  transition(':enter', [
    style(fadeInitial),
    animate(fadeAnimation, style(fadeFinal))
  ]),
  transition(':leave', [
    style(fadeFinal),
    animate(fadeAnimation, style(fadeInitial))
  ])
]);
