import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppState } from '../state/app.state';
import { changeFactor } from '../state/actions/counter.action';

@Component({
  selector: 'app-switch-value',
  templateUrl: './switch-value.component.html',
  styleUrls: ['./switch-value.component.css']
})
export class SwitchValueComponent implements OnInit {

  factor:number=2;

  constructor(private store:Store<AppState>){}

  ngOnInit(): void {
    this.store.select('count').subscribe(state=> this.factor=state.factor)
  }

  onSliderChange(value:number){
    this.store.dispatch(changeFactor({newFactor:value}));
  }

}
