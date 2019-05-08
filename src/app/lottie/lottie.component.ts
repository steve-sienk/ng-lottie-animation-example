import { Component, OnInit } from '@angular/core';
import { LottieAnimationViewModule } from 'ng-lottie';
import {
  trigger,
  state,
  style,
  animate,
  transition
} from '@angular/animations';

@Component({
  selector: 'app-lottie-component',
  animations: [
    trigger('fadeOnHover', [
      state('open', style({
        opacity: 1
      })),
      state('closed', style({
        opacity: 0.1
      })),
      transition('open=>closed', [
        animate('1s')
      ]),
      transition('closed=>open', [
        animate('0.5s')
      ])
    ])
  ],
  templateUrl: './lottie.component.html',
  styleUrls: ['./lottie.component.scss']
})
export class LottieComponent implements OnInit {
    public isMouseOver: any = false;
    public lottieBlocks: Object;
    public lottieDeadpool: Object;
    private lotties: any[] = [];
    private animationSpeed: number = 0.2;


    constructor() {
        this.lottieBlocks = {
            path: 'https://labs.nearpod.com/bodymovin/demo/al_boardman/articulation/articulation.json',
            renderer: 'canvas',
            autoplay: true,
            loop: true
        };
        this.lottieDeadpool = {
            path: 'https://assets1.lottiefiles.com/datafiles/uIqOUNaohkgyRYQ/data.json',
            renderer: 'canvas',
            autoplay: true,
            loop: true
        };
    }

    handleAnimation(anim: any) {
        this.lotties.push(anim)
    }

    ngOnInit() {
    }

    mouseEnter() {
      this.isMouseOver = true;
      this.lotties.forEach( function(lottie) {
        lottie.setSpeed(0.2)
      })
    }

    mouseLeave() {
      this.isMouseOver = false;
      this.lotties.forEach( function(lottie) {
        lottie.setSpeed(2.0)
      });
    }
}
