import { Component, OnInit } from '@angular/core';
/*import { NoveltyService } from "./novelties/novelty.service";*/

@Component({
  selector: 'fc-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor(/*private noveltyService: NoveltyService*/) { }

  ngOnInit() {

  }

}

/*
import { Component, OnInit } from '@angular/core';
import { NoveltyService } from "./novelties/novelty.service";

@Component({
  selector: 'fc-header',
  templateUrl: './header.component.html'
})
export class HeaderComponent implements OnInit {

  constructor(private noveltyService: NoveltyService) { }

  ngOnInit() {
	 onStore() {
	    this.noveltyService.storeData().subscribe(
	      data => console.log(data),
	      error => console.error(error)
	    );
	}

	onFetch() {
	    this.noveltyService.fetchData();
	}

 }

}

*/