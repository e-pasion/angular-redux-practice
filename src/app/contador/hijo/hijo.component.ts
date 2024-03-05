import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { divide, multiply, reset } from 'src/app/state/actions/counter.action';
import { AppState } from 'src/app/state/app.state';
import { selectValueCont } from 'src/app/state/selectors/counter.selector';

@Component({
  selector: 'app-hijo',
  templateUrl: './hijo.component.html',
  styleUrls: ['./hijo.component.css'],
})
export class HijoComponent implements OnInit {
  contador$: Observable<number> = new Observable();

  constructor(private store: Store<AppState>) {}

  ngOnInit(): void {
    this.contador$ = this.store.select(selectValueCont);
  }

  multiply(): void {
    this.store.dispatch(multiply());
  }
  divide(): void {
    this.store.dispatch(divide());
  }
}
