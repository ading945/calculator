//varibles

var number1 = 10;
var number2 = 10;
var buttonX = 100;
var buttonY = 100;
var buttonSize = 60;
var button2_X = 20;
var button2_Y = 200;
var button2_Size = 30;
//Draw button
fill(173, 170, 170);
rect(buttonX,buttonY,buttonSize,buttonSize);
rect(buttonX+60,buttonY,buttonSize,buttonSize);
rect(buttonX+120,buttonY,buttonSize,buttonSize);
rect(buttonX+180,buttonY,buttonSize,buttonSize);

//number button
for(var i = 0; i < 300;i = i + 30){
    rect(button2_X+i,button2_Y,button2_Size,button2_Size);
    println(i);
}
/*rect(button2_X,button2_Y,button2_Size,button2_Size);
rect(button2_X+40,button2_Y,button2_Size,button2_Size);
rect(button2_X+80,button2_Y,button2_Size,button2_Size);
rect(button2_X+120,button2_Y,button2_Size,button2_Size);
rect(button2_X+160,button2_Y,button2_Size,button2_Size);
rect(button2_X+200,button2_Y,button2_Size,button2_Size);
rect(button2_X+240,button2_Y,button2_Size,button2_Size);
rect(button2_X+280,button2_Y,button2_Size,button2_Size);
rect(button2_X+320,button2_Y,button2_Size,button2_Size);
*/
//text for button
fill(255, 0, 255);
textSize(50);
text("÷",115,140);
text("*",180,140);
text("+",235,140);
text("-",300,140);
//text for number button
textSize(20);
for(var i = 0; i < 10;i ++){
    text(i,button2_X+i*30+10,220);
}

var calculate = function(operation,number1,number2){
    var result = 0;
    if (operation ==="+"){
        result = number1+number2;
    } else if (operation ==="-"){
        result = number1-number2;
    } else if(operation === "/"){
        result = number1/number2;
    } else if(operation ==="*"){
        result = number1*number2;
    } else{
        println("uknown operation");
    }
    println(result);
    
};
//mouse click
mouseClicked = function(){
    var operation = "+";
    if (mouseX >= buttonX && mouseX <= buttonX+buttonSize &&
        mouseY >= buttonY && mouseY <= buttonY+buttonSize){
            operation = "/";
            //println(operation);
        }
    else if(mouseX >= buttonX && mouseX <= buttonX+60+buttonSize &&
        mouseY >= buttonY && mouseY <= buttonY+buttonSize){
            operation = "*";
            //println(operation);
        }
    else if(mouseX >= buttonX && mouseX <= buttonX+120+buttonSize &&
        mouseY >= buttonY && mouseY <= buttonY+buttonSize){
            operation = "+";
            //println(operation);
        }
    else if(mouseX >= buttonX && mouseX <= buttonX+180+buttonSize &&
        mouseY >= buttonY && mouseY <= buttonY+buttonSize){
            operation = "-";
            //println(operation);
        }
    else{
        println("hello world");
        operation = "null" ;
    }
    calculate(operation,10,10);

    
};

//answer = calculate(i,number1,number2);
//println(answer);
