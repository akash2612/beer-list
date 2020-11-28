import { Component } from '@angular/core';
import { GlobalService } from './global.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  public beerList:any = [];
  public beerImg:any = [];
  public p:number = 1;
  public searchText:string = '';

  constructor(private ds:GlobalService){}

  getBeerList() {
    this.ds.fetchBeer().subscribe(res=> {
      this.beerList = res;
    })
  }

  getBeerImg() {
    this.ds.fetchImg().subscribe(res=> {
      this.beerImg = res;
    })
  }

  ngOnInit() {
    this.getBeerList();
    this.getBeerImg();
  }
}
