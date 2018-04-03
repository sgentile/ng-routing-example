import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { SearchService } from '../../services/search.service';

@Component({
  selector: 'app-artist-album-list',
  templateUrl: './artist-album-list.component.html',
  styleUrls: ['./artist-album-list.component.scss']
})
export class ArtistAlbumListComponent {
  public albums: any[];

  constructor(private route: ActivatedRoute, 
              private searchService: SearchService) { 
    this.route.parent.params.subscribe(params => {
      this.searchService.getAlbums(params['artistId']).then(result => this.albums = result);
    })
  }
}
