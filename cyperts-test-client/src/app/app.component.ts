import { Component, OnInit,Inject } from '@angular/core';
import { WikipediaSearchService } from './services/wikipedia-search.service';
import { Subject } from 'rxjs/Subject';

//application wide shared Rx Operatos
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/debounceTime';
import 'rxjs/add/operator/distinctUntilChanged';
import 'rxjs/add/operator/mergeMap';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
  title = 'app';
  items:Array<string>;
  term$ = new Subject<string>();

  constructor(private wikipediaSearchService: WikipediaSearchService, @Inject('mail') private mail){

  }

  ngOnInit(){
    this.term$
        .debounceTime(400)
        .distinctUntilChanged()
        .flatMap(term => this.wikipediaSearchService.search(term))
        .subscribe(results => this.items = results)
        
  }

  onUpdate(id, text){
    // console.log(event);    
    console.log(text);
    console.log(id);
    
    this.mail.update(id, text);
  }

}
