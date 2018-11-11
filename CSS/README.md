# selector
+ Element
```
li {

}
```
+ Class
```
.hellp {

}
```
+ id
```
#name {

}
```
+ Star
select all!
```
* {
	border : 1px solid lightgrey
}
```
+ Descendant Selector
```
li a {
	color: red
}
```
+ Adjacent Selector
```
h4 + ul {
	border: 4px solid red;
}
```
+ Attribute selector
```
a[herf="http://www.google.ca"]{
	background: blue;
}
```
```
input[type="checkbox"]{
	background: blue;
}
```
+ nth of type
```
ul:nth-of-type(3){
	background:red;
}
```
+ Make the first letter of the element with id 'special' green and 100px font size(font-size: 100)
```
#special::first-letter{
	font-size: 100px;
	color: green;
}
```
+ Make the h1 element's color change to blue when hovered over
```
h1:hover{
	color: blue;
}
```
+ Make the a element's that have been visited gray
```
a:visited{
	color: grey;
}
```




# Font
+ font family
```
p {
	font-family: 'Open Sans', sans-serif;;
}
```
```
h1 {
	font-family: Georgia;
}
```
+ font size
```
h1{
	font-size: 60px;
}
span {
	font-size: 2.0em; /*releave to its parents*/
}
```
+ font weight
```
p {
	font-weight: bold;/*100-800 normal*/
}
```
+ line height
```
p {
	line-height: 1.5;
}
```
+ text-align
```
h1 {
	text-align: center;
}
```
+ text-decoration
```
p {
	text-decoration: underline;
}
h1 {
	text-decoration: line-through;
}
```
+ Use google font family
	- https://fonts.google.com/?selection.family=Open+Sans




# The Box Model
+ Content
+ Padding
+ Border
+ Margin
[https://www.w3schools.com/css/css_boxmodel.asp]


### float
```
float: left;
```
