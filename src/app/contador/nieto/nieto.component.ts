import { state } from '@angular/animations';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { reset } from 'src/app/state/actions/counter.action';
import { AppState } from 'src/app/state/app.state';
import { selectValueCont } from 'src/app/state/selectors/counter.selector';

@Component({
  selector: 'app-nieto',
  templateUrl: './nieto.component.html',
  styleUrls: ['./nieto.component.css'],
})
export class NietoComponent implements OnInit {
  contador$: Observable<number> = new Observable();

  constructor(private store: Store<AppState>) {}

  ngOnInit(): void {
    this.contador$ = this.store.select(selectValueCont);
  }

  reset(): void {
    this.store.dispatch(reset());
  }
}
