/* 계산기 */
/*
var all = "";//모든함수에서쓸수있는전역변수
var numberClicked = false; // 전역 변수로 numberClicked를 설정

function add (char) {
    if(numberClicked == false) { // 만약 이전에 연산자를 입력 했는데,
        if(isNaN(char) == true) { // 입력 받은 값이 또 다시 연산자면,
            // 아무것도 하지 않는다.
        } else { // 연산자가 아니라면!
            
            
            document.getElementById('display').value += char; // 식 뒤에 값을 추가한다.
            
            
        }
    } else { // 만약에 이전에 숫자를 입력 했으면,
        document.getElementById('display').value += char; // 식 뒤에 값을 추가한다.
    }


    // 다음 입력을 위해 이번 입력에 숫자가 눌렸는지 연산자가 눌렸는지 설정한다.
    if(isNaN(char) == true) { // "만약 숫자가 아닌게 참이라면" = "연산자를 눌렀다면"
        numberClicked = false; // numberClicked를 false로 설정한다.
        all = ""
    } else {
        numberClicked = true; // numberClicked를 true로 설정한다.
        all += char;
        console.log(all)
    }
}

var formula_before = "";//formula 칸의 값을 저장하는 전역 변수
var display_before = "";//display 칸의 값을 저장하는 전역 변수
var all_before = "";//all 값을 저장해두는 전역 변수

formula_before = "";//formula 칸의 값을 저장하는 전역 변수
    display_before = "";//display 칸의 값을 저장하는 전역 변수
    all_before = ""
    formula_before = document.getElementById('formula').value;
    display_before = document.getElementById('display').value;
    all_before = all;
 */

/* 계산기 */
var all = "";//모든함수에서쓸수있는전역변수
var after = false//=식 전후 여부
var numberClicked = false; // 전역 변수로 numberClicked를 설정
var result = "";//결과값을 저장하는 전역 변수
var special = false;
var dAraay = [];//현재

function add (char) {
    //새로운 값 입력전 값을 저장하여 이전버튼을 작동할 수 있게함
    
    if(document.getElementById('display').value == "" && char==0){

    }
    else{
        if(after == true || special == true) { // 만약 이전에 =식을 입력 했을경우
            if (isNaN(char)==true){ // =식 혹은 특수 식 입력 후 연산자를 입력했을 경우
                document.getElementById('formula').value = result;
                special = false;
                after = false;
                if(numberClicked == false) { // 만약 이전에 연산자를 입력 했는데,
                    if(isNaN(char) == true) { // 입력 받은 값이 또 다시 연산자면,
                        // 아무것도 하지 않는다.
                    } else { // 연산자가 아니라면!
                        
                        
                        document.getElementById('display').value += char; // 식 뒤에 값을 추가한다.
                        dAraay.push(char);
                        
                    }
                } else { // 만약에 이전에 숫자를 입력 했으면,
                    document.getElementById('display').value += char; // 식 뒤에 값을 추가한다.
                    dAraay.push(char);
                }
        
        
                // 다음 입력을 위해 이번 입력에 숫자가 눌렸는지 연산자가 눌렸는지 설정한다.
                if(isNaN(char) == true) { // "만약 숫자가 아닌게 참이라면" = "연산자를 눌렀다면"
                    numberClicked = false; // numberClicked를 false로 설정한다.
                    document.getElementById('formula').value += document.getElementById('display').value;
                    document.getElementById('display').value = "";
                    dAraay = [];
                    all = ""
                } else {
                    numberClicked = true; // numberClicked를 true로 설정한다.
                    all += char;
                    
                }
            }
            else { // =식 혹은 특수 식 입력 후 숫자를 입력했을 경우
                document.getElementById('formula').value = "";
                document.getElementById('result').value = "";
                after = false;
                if(numberClicked == false) { // 만약 이전에 연산자를 입력 했는데,
                    if(isNaN(char) == true) { // 입력 받은 값이 또 다시 연산자면,
                        // 아무것도 하지 않는다.
                    } else { // 연산자가 아니라면!
                        
                        
                        document.getElementById('display').value += char; // 식 뒤에 값을 추가한다.
                        dAraay.push(char);
                        
                        
                    }
                } else { // 만약에 이전에 숫자를 입력 했으면,
                    document.getElementById('display').value += char; // 식 뒤에 값을 추가한다.
                    dAraay.push(char);
                }
        
        
                // 다음 입력을 위해 이번 입력에 숫자가 눌렸는지 연산자가 눌렸는지 설정한다.
                if(isNaN(char) == true) { // "만약 숫자가 아닌게 참이라면" = "연산자를 눌렀다면"
                    if (document.getElementById('display').value == "" && char == '-'){
                        document.getElementById('display').value += char; // 식 뒤에 값을 추가한다.
                        dAraay.push(char);
                        dAraay = [];
                        all = ""
                    }
                    else {
                        numberClicked = false; // numberClicked를 false로 설정한다.
                        document.getElementById('formula').value += document.getElementById('display').value;
                        document.getElementById('display').value = "";
                        dAraay = [];
                        all = ""
                    }
                } else {
                    numberClicked = true; // numberClicked를 true로 설정한다.
                    all += char;
                    
                }
            }
           
        }
        else {
            if(numberClicked == false) { // 만약 이전에 연산자를 입력 했는데,
                if(isNaN(char) == true) { // 입력 받은 값이 또 다시 연산자면,
                    // 아무것도 하지 않는다.
                } else { // 연산자가 아니라면!
                    
                    
                    document.getElementById('display').value += char; // 식 뒤에 값을 추가한다.
                    dAraay.push(char);
                    
                }
            } else { // 만약에 이전에 숫자를 입력 했으면,
                document.getElementById('display').value += char; // 식 뒤에 값을 추가한다.
                dAraay.push(char);
            }
    
    
            // 다음 입력을 위해 이번 입력에 숫자가 눌렸는지 연산자가 눌렸는지 설정한다.
            if(isNaN(char) == true) { // "만약 숫자가 아닌게 참이라면" = "연산자를 눌렀다면"
                if (document.getElementById('display').value == "" && char == '-'){
                    document.getElementById('display').value += char; // 식 뒤에 값을 추가한다.
                    dAraay.push(char);
                    dAraay = [];
                    all = ""
                }
                else {
                    numberClicked = false; // numberClicked를 false로 설정한다.
                    document.getElementById('formula').value += document.getElementById('display').value;
                    document.getElementById('display').value = "";
                    dAraay = [];
                    all = ""
                }
            } else {
                numberClicked = true; // numberClicked를 true로 설정한다.
                all += char;
                
            }
        }
    }
   
}



function calculate() {
    document.getElementById('formula').value += document.getElementById('display').value;
    document.getElementById('display').value = "";
    var formula = document.getElementById('formula');
    result = eval(formula.value); // 식을 계산하고 result 변수에 저장합니다.
    document.getElementById('formula').value += "=";
    document.getElementById('formula').value += result;
    document.getElementById('result').value = result;

    after = true;
}

/*
function pow(display){
    console.log(1);
    var display = document.getElementById('display');
    display.value = Math.pow(display.value,2);
    console.log(2);
  }
*/

function pow(all){

    all.value = Math.pow(all.value,2);
    dAraay =[];
    special = true;
}

function root(all){

    all.value = Math.pow(all.value,0.5);
    dAraay =[];
    special = true;
}

function dvy1(all){

    all.value = 1/all.value;
    dAraay =[];
    special = true;
}

function change() {

    var pm = document.getElementById('display').value;

	if (pm.substring(0,1) == "-") {
        
        document.getElementById('display').value = 0 - document.getElementById('display').value * 1
    }
    if (pm.substring(0,1) != "-") {

        document.getElementById('display').value = "";

        document.getElementById('display').value = "-" + pm;
    }

}

function reset() {
    document.getElementById('display').value = "";
    document.getElementById('result').value = "";
    document.getElementById('formula').value = "";
    all = "";
    dAraay =[];
}

function back() {

    var pm = document.getElementById('display').value;

    if (pm.substring(0,1) == "-") {
        if(document.getElementById('display').value == "-"){
            document.getElementById('display').value ="";
        }
        else{
            if (special == false){
                dAraay.pop();
                document.getElementById('display').value = "";
                for (var i =0;i<dAraay.length;i++){
                document.getElementById('display').value += dAraay[i];
                all = dAraay[i];
                }
            }
            else{
    
            }
            document.getElementById('display').value = "-" +document.getElementById('display').value;
        }
    }
    else{
        if (special == false){
            dAraay.pop();
            document.getElementById('display').value = "";
            for (var i =0;i<dAraay.length;i++){
            document.getElementById('display').value += dAraay[i];
            all = dAraay[i];
            }
        }
        else{

        }
    }

}



















