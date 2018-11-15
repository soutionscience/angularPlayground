import {trigger, state, transition, style, animate, stagger} from '@angular/animations'


export function flyInOut(){
     return trigger('flyInOut', [
         state('show', style({
            opacity: 1
           })),
         state('hide', style({
             opacity: 0,
             transform: "translateX(-100%)"
         })),
         transition('show => hide', animate('750ms ease-out')),
         transition('* => show', animate('750ms ease-in', style({opacity: 1, transform:"translateX(0)"})))
     ])
}

export function expand(){
    return trigger('expand', [
        state('show', style({
            opacity: 1
        })),
        state('hide', style({
            transform: 'scale(0.5)',
            opacity: 0
        })),
        transition('hide=>show', animate('700ms 200ms ease-in', style({opacity:1, transform: 'scale(1)',})))
    ])
}


export function flyFromRight(){
    return trigger('flyFromRight', [
        state('show', style({
           opacity: 1
          })),
        state('hide', style({
            opacity: 0,
            transform: "translateX(100%)"
        })),
        transition('show => hide', animate('750ms ease-out')),
        transition('* => show', animate('750ms ease-in', style({opacity: 1, transform:"translateX(0)"})))
    ])
}