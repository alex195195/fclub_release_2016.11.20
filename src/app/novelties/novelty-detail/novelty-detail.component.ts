import { Component, OnInit,  OnDestroy } from '@angular/core';
import { Router, ActivatedRoute } from "@angular/router";
import { Subscription } from "rxjs/Rx";
import { Novelty } from "../novelty";
import { NoveltyService } from "../novelty.service";

@Component({
  selector: 'fc-novelty-detail',
  templateUrl: './novelty-detail.component.html',
})
export class NoveltyDetailComponent implements OnInit, OnDestroy {
  selectedNovelty: Novelty;
  private noveltyIndex: number;
  private subscription: Subscription;

  constructor(private router: Router,
              private route: ActivatedRoute,
              private noveltiesService: NoveltyService) {}


  ngOnInit() {
    this.subscription = this.route.params.subscribe(
      (params: any) => {
        this.noveltyIndex = params['id'];
        this.selectedNovelty = this.noveltiesService.getNovelty(this.noveltyIndex);
      }
    );
  }

  onEdit() {
    this.router.navigate(['/novelties', this.noveltyIndex, 'edit']);
  }

  onDelete() {
    this.noveltiesService.deleteNovelty(this.selectedNovelty);
    this.router.navigate(['/novelties']);
  }

  /*onAddToShoppingList() {
    this.sls.addItems(this.selectedNovelty.ingredients);
  }*/

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

}








/*import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'fc-novelty-detail',
  templateUrl: './novelty-detail.component.html'
})
export class NoveltyDetailComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}*/
