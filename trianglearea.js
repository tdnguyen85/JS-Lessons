

var x = 3;
var y = 4;
var z = 5;

function triangleArea(x, y, z) {
	var a = x,
			b = y,
			c = z,
			area,
			s;

	s = (a + b + c)/2;
	return area = (s*(s-a)*(s-b)*(s-c))^(1/2);



}

var getArea = triangleArea(x, y, z);
document.write('The area is ' + getArea);
