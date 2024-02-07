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

class Rect{
        public x1: number
        public x2:number;
        public y1:number; 
        public y2:number
        private readonly MAX_COORD  = 1000;
        constructor(x1?:number,x2?:number, y1?:number,  y2?:number){
            this.x1
            this.x2
            this.y1
            this.y2
        }
        square () {
            return Math.abs( this.x1 - this.x2) * Math.abs( this.y1 - this.y2)
            }
}

 let a: Rect= new Rect(10,3 ,5 , 9)
let b: Rect=new Rect()
 console.log(a, b)
 console.log(a.square())
a.x1 = 4
a.x2= 5
