import { Component, OnInit } from '@angular/core';
import { Novelty } from "../novelty";
import { NoveltyService } from "../novelty.service";

@Component({
  selector: 'fc-novelty-list',
  templateUrl: './novelty-list.component.html'
})
export class NoveltyListComponent implements OnInit {
  novelties: Novelty[] = [];

  constructor(private noveltyService: NoveltyService) { }

  ngOnInit() {
        this.novelties = this.noveltyService.getNovelties();
    this.noveltyService.noveltiesChanged.subscribe(
      (novelties: Novelty[]) => this.novelties = novelties
    );
  }

}

