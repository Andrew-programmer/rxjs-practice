import { of, from, Observable, fromEvent, range, timer, interval } from 'rxjs';
import { map, scan } from 'rxjs/operators';

// const stream$ = of(1, 2, 3, 4);
//
// stream$.subscribe(value => {
//   console.log('Value: ', value);
// })

// const arr$ = from([1, 2, 3, 4])
//   .pipe(
//     scan((acc, value) => acc.concat(value), []),
//   )
// ;
//
// arr$.subscribe(value => {
//   console.log(value);
// })

// const stream$ = new Observable(observer => {
//   observer.next('First value');
//
//   setTimeout(() => {
//     observer.next('After 1000 ms');
//   }, 1000)
//
//   setTimeout(() => {
//     observer.complete('Complete');
//   }, 1500)
//
//   setTimeout(() => {
//     observer.error('Something went wrong');
//   }, 2000)
//
//   setTimeout(() => {
//     observer.next('After 3000 ms');
//   }, 3000)
// })

// stream$.subscribe(
//   (value) => console.log(value),
//   (err) => console.log(err),
//   () => console.log('complete')
// )
//
// stream$.subscribe({
//   next(val) {
//     console.log(val);
//   },
//   error(val) {
//     console.log(val);
//   },
//   complete() {
//     console.log('Complete');
//   },
// })

// fromEvent(document.querySelector('canvas'), 'mousemove')
//   .pipe(
//     map(event => ({
//       x: event.offsetX,
//       y: event.offsetY,
//       ctx: event.target.getContext('2d'),
//     }))
//   )
//   .subscribe(pos => {
//     pos.ctx.fillRect(pos.x, pos.y, 2, 2);
//   });
//
// const clear$ = fromEvent(document.getElementById('clear'), 'click');
//
// clear$.subscribe(() => {
//   const canvas = document.querySelector('canvas');
//   canvas.getContext('2d')
//     .clearRect(0, 0, canvas.width, canvas.height);
// })

// const sub = interval(500)
//   .subscribe(value => console.log(value));
//
// setTimeout(() => {
//   sub.unsubscribe();
// }, 4000)

// timer(2500)
//   .subscribe(value => console.log(value));

// range(42, 10)
//   .subscribe(value => console.log(value));
