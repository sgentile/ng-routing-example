import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { SearchService } from '../search.service';

@Component({
  selector: 'app-artist-track-list',
  templateUrl: './artist-track-list.component.html',
  styleUrls: ['./artist-track-list.component.scss']
})
export class ArtistTrackListComponent {
  private tracks: any[];

  constructor(private route: ActivatedRoute, searchService: SearchService) {
    this.route.parent.params.subscribe(params => {
      searchService.getTrackList(params['artistId']).then(results => this.tracks = results);
    });
   }
}
