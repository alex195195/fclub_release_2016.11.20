
import { Component, Input  } from '@angular/core';
import { Novelty } from '../novelty';

@Component({
  selector: 'fc-novelty-item',
  templateUrl: './novelty-item.component.html'
})
export class NoveltyItemComponent {
   @Input() novelty: Novelty;
   @Input() noveltyId: number;
}

