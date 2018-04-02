import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { SearchService } from '../search.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent {
  public loading: boolean = false;

  constructor(public itunes: SearchService,
              private router: Router,
              private route: ActivatedRoute) { 
    this.route.params.subscribe(params => {
      if(params['term']){
        this.doSearch(params['term'])
      }
    });
  }

  onSearch(term: string) {    
    this.router.navigate(['search', term]);
  }

  doSearch(term: string) {
    this.loading = true;
    this.itunes.search(term).then(() => this.loading = false)
  }  
}
