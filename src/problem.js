import { interval, pipe } from 'rxjs';
import { filter, map, take, scan } from 'rxjs/operators';

const btn = document.getElementById('interval');
const rxjsBtn = document.getElementById('rxjs');
const display = document.querySelector('#problem .result');

const people = [
  {
    name: 'Vladilen',
    age: 25
  },
  {
    name: 'Elena',
    age: 17
  },
  {
    name: 'Ivan',
    age: 18
  },
  {
    name: 'Igor',
    age: 14
  },
  {
    name: 'Lisa',
    age: 32
  },
  {
    name: 'Irina',
    age: 23
  },
  {
    name: 'Oleg',
    age: 20
  }
];

const handleBtnClick = (event) => {
  event.target.disabled = true;

  let i = 0;
  const canDrink = [];

  const interval = setInterval(() => {
    if (people[i]) {
      if (people[i].age >= 18) {
        canDrink.push(people[i].name);
      }
      display.textContent = canDrink.join(' ');
      i++;
    } else {
      clearInterval(interval);
      event.target.disbled = false;
    }
  }, 1000);
};

const handleRxJsClick = (event) => {
  event.target.disabled = true;

  interval(1000)
    .pipe(
      take(people.length),
      filter(value => people[value].age >= 18),
      map(value => people[value].name),
      scan((acc, value) => acc.concat(value), [])
    )
    .subscribe(res => {
        display.textContent = res.join(' ');
      }, null, () => {
        event.target.disabled = false;
      }
    );
};

btn.addEventListener('click', handleBtnClick);
rxjsBtn.addEventListener('click', handleRxJsClick);
