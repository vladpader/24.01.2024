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


//контрольная точка!!!!!
class Point{
    x?:number
    y?:number
    constructor(vla1?:number, val2?:number){
      this.x=vla1
      this.y=val2
    }
  }
  
  class Triangle{
    x?:Point
    y?:Point
    z?:Point
  
    constructor(x1?:number, y1?:number, x2?:number, y2?:number, x3?:number, y3?:number){
      this.x=new Point(x1, y1)
      this.y=new Point(x2, y2)
      this.z=new Point(x3, y3)
    }
  }
  
  let point1:Point =new Point(5,3)
  
  
  let tr0: Triangle=new Triangle()
  let tr1: Triangle=new Triangle(1,2,3,4,5,6)
