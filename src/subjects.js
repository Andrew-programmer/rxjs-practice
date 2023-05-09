import {Subject, BehaviorSubject, ReplaySubject} from 'rxjs';
import { readableStreamLikeToAsyncGenerator } from 'rxjs/internal/util/isReadableStreamLike';

document.addEventListener('click', () => {
  // const stream$ = new Subject();
  //
  // stream$.subscribe(value => console.log(value));
  //
  // stream$.next('Hello!');

  // const stream$ = new BehaviorSubject('First!');
  //
  // stream$.subscribe(value => console.log(value));
  //
  // stream$.next('Hello!')

  const stream$ = new ReplaySubject(2);

  stream$.next('Hello');
  stream$.next('World');
  stream$.next('!');

  stream$.subscribe(value => console.log(value));
})
