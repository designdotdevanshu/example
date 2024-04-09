const isPrime = (number) => {
  if (number <= 1) return false;
  for (let i = 2; i <= Math.sqrt(number); i++) {
    if (number % i === 0) {
      return false;
    }
  }
  return true;
};

const listPrimes = () => {
  const primes = [];
  for (let i = 1; i <= 100; i++) {
    if (isPrime(i)) {
      primes.push(i);
    }
  }
  return primes;
};

const num = listPrimes();
// console.log(num);
const currentDate = new Date("2024-04-07T06:09:01.747Z");
const currentDay = currentDate.getDate();

if (currentDay === 6) {
  setTimeout(() => {
    console.log("Prime Numbers (if date is 6): ", num);
  }, 10000);
} else if (currentDay === 5) {
  console.log("Prime Numbers (if date is 5): ", num);
} else {
  console.log("Something Went Wrong");
}

// 2 variable -> static dates
// condition -> if 5th, april, 2024 -> i
// condition -> if 6th, april, 2024 -> after 30sec

// 2024-04-03T06:09:01.747Z

// pyramid of dom
