// 1) შექმენით მასივი,რომელიც შეიცავს როგორც დადებით ასევე უარყოფით რიცხვებს.გაფილტრეთ მოცემული მასივი
// შემდეგ კი დაითვალეთ მხოლოდ დადებითი რიცხვების ჯამი. გამოიყენეთ მასივის filter და reduce მეთოდები.

// const array = [1, -3, 4, 6, -13, 12, -6]

// const arr1 = array.filter(x => x > 0)

// console.log(arr1)

// const totalNumbers = arr1.reduce((total, curr) => {
//     return total + curr
// }, 0)

// console.log(totalNumbers)

// // მოკლე ჩანაწერი
// const arr2 = array.filter(x => x > 0).reduce((total, curr) => {
//     return total + curr
// }, 0)

// console.log(arr2)

// 2) შექმენით მასივი,რომელიც შედგება სტრინგებისგან(რომლებიც შეიძლება განმეორდეს). დაწერეთ კოდი,რომელიც დაითვლის  რამდენჯერ მეორდება თითოეული სტრინგი მასივში და დააბრუნეთ ობიექტის სახით, მაგ: { a:1 , b: 6, c : 2}. გამოიყენეთ მასივის reduce მეთოდი.

// const array = [
//   "nino",
//   "giorgi",
//   "nino",
//   "sandro",
//   "gurami",
//   "nino",
//   "giorgi",
//   "ana",
//   "nino",
//   "sandro",
//   "mariami",
// ];

// const initialValue = {};
// const convertArrayToObject = array.reduce((obj, item) => {
//   if (obj[item]) {
//     obj[item]++;
//   } else {
//     obj[item] = 1;
//   }
//   return obj;
// }, initialValue);

// console.log(convertArrayToObject);

// 3) შექმენით კლასი car, რომელსაც ექნება 4 ფროფერთი (brand,model, speed,motion).  ბრენდი და მოდელი კლასს კონსტრუქტორში გადაეცემა, ხოლო speed კონსტრუქტორში დიფოლტად ინიციალიზდება და მისი მნიშვნელობა არის 0.
// ასევე დიფოლტად ინიციალიზდება motion,რომლის საწყისი მნიშვნელობაა “The car is not moving”.
// // კლასს უნდა ჰქონდეს შემდეგი მეთოდები:

// check_motion - მანქანის სიჩქარის მიხედვით ცვლის motion ცვლადს: თუ მანქანა მოძრაობს-”მანქანა მოძრაობს”,წინააღმდეგ შემთხვევაში- “მანქანა გაჩერებულია”.
// accelerate - იღებს პარამეტრად სიჩქარეს და მანქანის სიჩქარეს ზრდის შესაბამისი მნიშვნელობით.
// brake - იღებს პარამეტრად სიჩქარეს და მანქანის სიჩქარეს ამცირებს შესაბამისი მნიშვნელობით(გაითვალისწინეთ,რომ გადაცემული სიჩქარე არსებულ სიჩქარეს შეიძლება აღემატებოდეს).
// emergency_brake - ავტომატურად ხდის მანქანის სიჩქარეს 0-ს.
// status - ფუნქცია,რომელიც აბრუნებს შემდეგ სტრინგს:
//  მანქანა ${ბრენდის სახელი} ${მოდელი} მოძრაობს ${მანქანის სიჩქარე} კმ/სთ სიჩქარით და სტატუსია: ${motion}.
// მაგალითად: მანქანა Ford Mustang მოძრაობს 80 კმ/სთ სიჩქარით და სტატუსია: მანქანა მოძრაობს

// მითითება: ფუნქცია check_motion უნდა გამოიძახებოდეს accelerate,brake და emergency_brake ფუნქციებში, რათა motion ცვლადი სწორად ასახავდეს მანქანის სტატუსს.
// ჩაატარეთ სხვადასხვა ოპერაციები მანქანაზე (accelerate,brake და ა.შ) და
// თითოეული ცვლილების შემდეგ კონსოლში გამოიტანეთ სტატუსი.

class Car {
  constructor(brand, model) {
    this.brand = brand;
    this.model = model;
    this.speed = 0;
    this.motion = "The car is not moving";
  }
  checkMotion = () => {
    if (this.speed > 0) {
      return (this.motion = "The car is moving");
    } else {
      return (this.motion = "The car is not moving");
    }
  };
  accalarate = (speed) => {
    this.speed = this.speed + speed;
    return this.speed;
  };
  brake = (speed) => {
    if (speed > this.speed) {
      return (this.speed = 0);
    } else {
      return this.speed -= speed;
    }
  };
  emergencyBrake = () => (this.speed = 0);
  status = () => {
    return `მანქანა ${this.brand} ${this.model} მოძრაობს ${
      this.speed
    } კმ/სთ სიჩქარით და სტატუსია: ${this.checkMotion()}`;
  };
}

const car1 = new Car("Tesla", "model 3");
console.log(car1);
console.log(car1.accalarate(80));
console.log(car1.checkMotion());
console.log(car1.brake(100));
console.log(car1.checkMotion());
console.log(car1.status());
console.log(car1.emergencyBrake());
console.log(car1.checkMotion());

// 4)  შექმენით ფუნქცია addAsync,რომელიც იღებს ორ პარამეტრს და აბრუნებს პრომისს.
//     თუ ორივე პარამეტრი გადაეცემა(undefined არ არის და ორივე პარამეტრი რიცხვია) პრომისი უნდა დარიზოლვდეს(resolve),
//     წინააღმდეგ შემთხვევაში დარიჯექთდეს(reject). გამოიძახეთ ფუნქცია რამდენიმეჯერ,
//     სხვადასხვა პარამეტრით და კონსოლში გამოიტანეთ შედეგი.

// const addAsync = (value1, value2) => {
//   return new Promise((resolve, reject) => {
//     if (value1 && value2 && typeof value1 === 'number' && typeof value2 === 'number') {
//       resolve(value1 + value2);
//     } else {
//       reject("error");
//     }
//   });
// };

// addAsync(10, 12)
//   .then((value) => console.log(value))
//   .catch((error) => console.log(error));
