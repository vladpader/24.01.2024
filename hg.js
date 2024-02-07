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
var Rect = /** @class */ (function () {
    function Rect(x1, x2, y1, y2) {
        this.MAX_COORD = 1000;
        this.x1 = 2;
        this.x2 - 1;
        this.y1 = 4;
        this.y2 = 6;
    }
    Rect.prototype.square = function () {
        return Math.abs(this.x1 - this.x2) * Math.abs(this.y1 - this.y2);
    };
    return Rect;
}());
var a = new Rect(10, 3, 5, 9);
var b = new Rect();
console.log(a, b);
console.log(a.square());
a.x1 = 4;
a.x2 = 5;
