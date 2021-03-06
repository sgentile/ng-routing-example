import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { SearchService } from '../../services/search.service';


@Component({
  selector: 'app-artist',
  templateUrl: './artist.component.html',
  styleUrls: ['./artist.component.scss']
})
export class ArtistComponent {
  public artist: any;

  constructor(private route: ActivatedRoute,
              private searchService: SearchService) { 
    this.route.params.subscribe(params => {
      return this.searchService.getArtist(params['artistId']).then(result => this.artist = result);
    });
  }

}
