import {trigger, state, transition, style, animate, stagger} from '@angular/animations'


export function flyInOut(){
     return trigger('flyInOut', [
         state('show', style({
            opacity: 1,
            transform: "translateX(0)"
         })),
         state('hide', style({
             opacity: 0,
             transform: "translateX(-100%)"
         })),
         transition('show => hide', animate('750ms {delay: 500ms} ease-out')),
         transition('* => show', animate('750ms  ease-in'))
     ])
}