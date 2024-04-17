


class User {
  private static count: number = 0;
  private name: string;
  private login: string;
  private password: string;
  private grade: number;

  constructor(name: string, login: string, password: string, grade: number) {
    this.name = name;
    this.login = login;
    this.password = password;
    this.grade = grade;
    User.count++;
  }

  getName(): string {
    return this.name;
  }

  setName(name: string): void {
    this.name = name;
  }

  getLogin(): string {
    return this.login;
  }

  getPassword(): string {
    return '*'.repeat(this.password.length);
  }

  setPassword(password: string): void {
    this.password = password;
  }

  getGrade(): string {
    return 'Неизвестное свойство grade';
  }

  setGrade(grade: number): void {

  }

  showInfo(): void {
    console.log(`Name: ${this.name}, Login: ${this.login}`);
  }

  eq(user: User): boolean {
    return this.grade === user.grade;
  }

  lt(user: User): boolean {
    return this.grade < user.grade;
  }

  gt(user: User): boolean {
    return this.grade > user.grade;
  }
}

class SuperUser extends User {
  private static count: number = 0;
  private role: string;

  constructor(name: string, login: string, password: string, role: string) {
    super(name, login, password, 0);
    this.role = role;
    SuperUser.count++;
  }

  getRole(): string {
    return this.role;
  }

  setRole(role: string): void {
    this.role = role;
  }

  showInfo(): void {
    console.log(`Name: ${this.name}, Login: ${this.login}, Role: ${this.role}`);
  }
}

const user1 = new User('Vlad Aksenov', 'vlad', '5361', 3);
const user2 = new User('denis Vlasov', 'denis', '0543', 2);
const user3 = new User('Zahar Sovenski', 'zahar', '2312', 3);
const admin = new SuperUser('Igor Gulter', 'Igor', '4343', 'admin');

user1.showInfo();
admin.showInfo();

const users = User.count;
const admins = SuperUser.count;

console.log(`Всего пользователей: ${users}`);
console.log(`Всего супер-пользователей: ${admins}`);

console.log(user1.lt(user2));
console.log(admin.gt(user3));
console.log(user1.eq(user3));

user3.name = 'Denis Denisovich';
user1.password = 'Pa$$w0rd';

console.log(user3.name);
console.log(user2.password);
console.log(user2.login);

user2.login = 'den';

console.log(user2.grade);
admin.grade = 10;

























// class ClassName {}
// class Point { x: number; y: number; }
// let point : Point= new Point();
// function  rt (){
//     point.x = 1;
//     point.y = 2;
// }
// rt()
// console.log(point)
// class Point2{width:number; height:number }
// let point2:  Point2=new Point2()
// function er(){
//     point2.height=1
//     point2.width=2
// }

// class Rect{
//         public x1: number
//         public x2:number;
//         public y1:number; 
//         public y2:number
//         private readonly MAX_COORD  = 1000;
//         constructor(x1?:number,x2?:number, y1?:number,  y2?:number){
//             this.x1
//             this.x2
//             this.y1
//             this.y2
//         }
//         square () {
//             return Math.abs( this.x1 - this.x2) * Math.abs( this.y1 - this.y2)
//             }
// }

//  let a: Rect= new Rect(10,3 ,5 , 9)
// let b: Rect=new Rect()
//  console.log(a, b)
//  console.log(a.square())
// a.x1 = 4
// a.x2= 5


// class Temp {
//     private x: number
//     public y: number
//     constructor(val1?: number, val2?: number) {
//         val1 ? this.x = val1 : this.x = 1
//         val2 ? this.y = val2 : this.y = 2
//     }
//     private get getX(){
//         return this.x
//     }
//     public set setX(value: number){
//         this.x = value
//     }
// }
// let temp2 = new Temp(10,20)

// temp2.setX=6
// console.log(temp2.getX)


// //контрольная точка!!!!!
// class ClassName {}
// class Point { x: number; y: number; }
// let point : Point= new Point();
// function  rt (){
//     point.x = 1;
//     point.y = 2;
// }
// rt()
// console.log(point)
// class Point2{width:number; height:number }
// let point2:  Point2=new Point2()
// function er(){
//     point2.height=1
//     point2.width=2
// }

// class Rect{
//         public x1: number
//         public x2:number;
//         public y1:number; 
//         public y2:number
//         private readonly MAX_COORD  = 1000;
//         constructor(x1?:number,x2?:number, y1?:number,  y2?:number){
//             this.x1
//             this.x2
//             this.y1
//             this.y2
//         }
//         square () {
//             return Math.abs( this.x1 - this.x2) * Math.abs( this.y1 - this.y2)
//             }
// }

//  let a: Rect= new Rect(10,3 ,5 , 9)
// let b: Rect=new Rect()
//  console.log(a, b)
//  console.log(a.square())
// a.x1 = 4
// a.x2= 5


// class Temp {
//     private x: number
//     public y: number
//     constructor(val1?: number, val2?: number) {
//         val1 ? this.x = val1 : this.x = 1
//         val2 ? this.y = val2 : this.y = 2
//     }
//     private get getX(){
//         return this.x
//     }
//     public set setX(value: number){
//         this.x = value
//     }
// }
// let temp2 = new Temp(10,20)

// temp2.setX=6
// console.log(temp2.getX)


// // контрольная точка!!!!!
// class Point{
//     x?:number
//     y?:number
// @@ -86,3 +86,184 @@ class Point{

//   let tr0: Triangle=new Triangle()
//   let tr1: Triangle=new Triangle(1,2,3,4,5,6)




// // на 5 бфлов
// class Furniture {
//   name: string;
//   dimensions: string;
//   price: number;

//   constructor(name: string, dimensions: string, price: number) {
//     this.name = name;
//     this.dimensions = dimensions;
//     this.price = price;
//   }
// }

// class Chair extends Furniture {
//   numLegs: number;
//   legHeight: number;
//   hasBackrest: boolean;

//   constructor(name: string, dimensions: string, price: number, numLegs: number, legHeight: number, hasBackrest: boolean) {
//     super(name, dimensions, price);
//     this.numLegs = numLegs;
//     this.legHeight = legHeight;
//     this.hasBackrest = hasBackrest;
//   }
// }

// class Wardrobe extends Furniture {
//   handleMaterial: string;
//   numDoors: number;
//   numDrawers: number;

//   constructor(name: string, dimensions: string, price: number, handleMaterial: string, numDoors: number, numDrawers: number) {
//     super(name, dimensions, price);
//     this.handleMaterial = handleMaterial;
//     this.numDoors = numDoors;
//     this.numDrawers = numDrawers;
//   }
// }

// class Shelf extends Furniture {
//   numSegments: number;
//   segmentSize: string;

//   constructor(name: string, dimensions: string, price: number, numSegments: number, segmentSize: string) {
//     super(name, dimensions, price);
//     this.numSegments = numSegments;
//     this.segmentSize = segmentSize;
//   }
// }

// class Table extends Furniture {
//   numLegs: number;
//   tabletopArea: string;

//   constructor(name: string, dimensions: string, price: number, numLegs: number, tabletopArea: string) {
//     super(name, dimensions, price);
//     this.numLegs = numLegs;
//     this.tabletopArea = tabletopArea;
//   }
// }


// class Shape {
//   protected id: number;
//   public width:number
//   public color:string;

//       draw():void{
//     console.log("asdqw линии");
//   }

//   constructor(){
//       console.log("Конструктор Shape");
//   }
// }

// class Line extends Shape{
//   public x1: number;
//   public x2: number;
//   public y1: number;
//   public y2: number;

//   draw():void{
//     console.log("Рисование линии");
//   }

//   constructor(){
//       super();
//       console.log("Конструктор Line", this.id);
//   }
// }
// // let lineInstance = new Line(1);
// // console.log(lineInstance.id)

// class Tri extends Shape{
//   protected id: number;
//   public width:number
//   public color:string;

//   constructor(){
//     super()
//       console.log("Конструктор Shape");
//   }
// }

// let ter1 = new Tri()
// let ter2 = new Line()
// let tri3 = new Shape()

// ter1.draw()
// ter2.draw()
// tri3.draw()


// class Point{
//   static cnt: number=0;
//   x:number
//   y:number
//   constructor(){
//       this.x=0
//       this.y=0
//       Point.cnt++
//   }
//   public static getCounter(): number{
//       let x=6
//       return x;
//   }
// }

// let point:Point=new Point()

// console.log(Point.cnt)

// let point2:Point= new Point()

// console.log(Point.cnt)



// class ShopItem {
//   private static itemCount: number = 0;
//   private id: number;
//   private name: string;
//   private dimensions: string;
//   private weight: number;
//   private price: number;

//   constructor(name: string, dimensions: string, weight: number, price: number) {
//       this.id = ShopItem.itemCount++;
//       this.name = name;
//       this.dimensions = dimensions;
//       this.weight = weight;
//       this.price = price;
//   }
// }



// class Rect {
//   constructor(public x1: number, public y1: number, public x2: number, public y2: number) {}

//   static calculateWidth(rect: Rect): number {
//       return Math.abs(rect.x2 - rect.x1);
//   }

//   static calculateHeight(rect: Rect): number {
//       return Math.abs(rect.y2 - rect.y1);
//   }
// }

// // Пример использования класса Rect и статических методов для вычисления ширины и высоты прямоугольника
// const rectangle = new Rect(20, 10, 5, 3);
// const width = Rect.calculateWidth(rectangle);
// const height = Rect.calculateHeight(rectangle);

// console.log(`Ширина прямоугольника: ${width}`);
// console.log(`Высота прямоугольника: ${height}`);