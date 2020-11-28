import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({providedIn: 'root'})
export class GlobalService {
  constructor(private httpClient: HttpClient) { }

  // functions to call the API
  fetchBeer() {
    const fetchBeerUrl = 'https://s3-ap-southeast-1.amazonaws.com/he-public-data/beercraft5bac38c.json';
    return this.httpClient.get(fetchBeerUrl);
  }

  fetchImg() {
    const fetchImgUrl = 'https://s3-ap-southeast-1.amazonaws.com/he-public-data/beerimages7e0480d.json';
    return this.httpClient.get(fetchImgUrl);
  }
}