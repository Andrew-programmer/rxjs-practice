import { fromEvent, interval,  } from 'rxjs';
import { filter, map, take, scan, switchMap, reduce, takeLast, takeWhile, tap } from 'rxjs/operators';

fromEvent(document, 'click')
  .pipe(
    switchMap(event => {
      return interval(1000)
        .pipe(
          take(5),
          reduce((acc, value) => acc + value, 0)
        );
    })
  )
  .subscribe({
    next: v => console.log('Next: ', v),
    complete: () => console.log('Complete')
  });

// const stream$ = interval(1000)
//   .pipe(
//     // tap(value => console.log('Tap: ', value)),
//     // map(value => value * 2),
//     // filter(value => value % 2 === 0),
//     take(5),
//     // takeLast(5)
//     // takeWhile(value => value < 7)
//     // scan((acc, v) => acc + v, 0)
//
//     // reduce работает с уже завершенным стримом
//     reduce((acc, v) => acc + v, 0)
//   );

// stream$.subscribe({
//   next(value) {
//     console.log('Next: ', value)
//   },
//   complete() {
//     console.log('Complete');
//   },
// })
