import { Component, OnInit } from '@angular/core';
import { Action, Store } from '@ngrx/store';
import { plus, substract } from './state/actions/counter.action';
import { AppState } from './state/app.state';
import { Observable } from 'rxjs';
import { selectValueCont } from './state/selectors/counter.selector';



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  contador$: Observable<number>= new Observable();
  constructor(private store:Store<AppState>){}

  ngOnInit(): void {
    this.contador$= this.store.select(selectValueCont);
  }

  
  increment():void{
    this.store.dispatch( plus() );
  }
  decrement():void{
    this.store.dispatch( substract() );
  }
}
