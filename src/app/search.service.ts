import { Injectable } from '@angular/core';
import { SearchItem } from './search-item';
import { Jsonp, Response } from '@angular/http';

import {Observable} from 'rxjs';
import 'rxjs/add/operator/toPromise';

@Injectable()
export class SearchService {
  apiRoot: string = 'https://itunes.apple.com/search';
  results: SearchItem[];

  constructor(private jsonp: Jsonp) { 
    this.results = [];
  }

  search(term: string) {
    return new Promise((resolve, reject) => {
      this.results = [];      
      let apiURL = `${this.apiRoot}?term=${term}&media=music&limit=20&callback=JSONP_CALLBACK`;
      this.jsonp.request(apiURL)
        .toPromise()
        .then(res => { //success
          this.results = res.json().results.map(item => {
            return new SearchItem(
              item.trackName,
              item.artistName,
              item.trackViewUrl,
              item.artworkUrl30,
              item.artistId
            );
          });
          resolve();
        }, 
        msg => { // Error
          reject(msg);
        }
      );
    })
  }

  getTrackList(artistId: string) {
    return this.jsonp.request(`https://itunes.apple.com/lookup?id=${artistId}&entity=song&callback=JSONP_CALLBACK`)
      .toPromise()
      .then(res => {
        console.log(res.json());
        return res.json().results.slice(1);
      })
  }

  getAlbums(artistId: string) {
    return this.jsonp.request(`https://itunes.apple.com/lookup?id=${artistId}&entity=album&callback=JSONP_CALLBACK`)
      .toPromise()
      .then(res => {
        console.log(res.json());
        return res.json().results.slice(1);
      })
  }

  getArtist(artistId: string) {
    return this.jsonp.request(`https://itunes.apple.com/lookup?id=${artistId}&callback=JSONP_CALLBACK`)
      .toPromise()
      .then(res => {
        console.log(res.json());
        return res.json().results[0];
      })
  }
}
