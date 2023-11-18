//*********************************TOggle du konamiXCode************************************************* */
document.addEventListener("DOMContentLoaded", (event) => {
    createBoutton()
    const element = document.querySelector(".Konami");
    if (element) {
        element.style.display = "none";
    }
});

//****************************************Calculette***************************************************** */
let calculette = [
    "AC","C","%","/",
    "7","8","9","*",
    "4","5","6","-",
    "1","2","3","+",
    "0",",","="
]
let affichage=" ";

function createBoutton() {
    let myButton = "";
    for (i = 0; i < calculette.length; i ++) {
        myButton += "<button type='button'id='myButton" + i + "'>" + calculette[i] + "</button>";
    }
    document.querySelector("#Container_boutton").innerHTML = myButton;

    let buttons = document.querySelectorAll("#Container_boutton button");
    let display = document.querySelector(".text");
    buttons.forEach(button => {
        button.addEventListener("click", function() {
            let buttonValue = this.textContent;
            let storedValue = buttonValue;
            document.querySelector(".text").innerHTML = storedValue;
            if (storedValue === 'C') { 
                affichage = '';
            } else if  (storedValue === 'AC') {
                affichage = affichage.slice(0, -1)
            } else if (storedValue === '=') {
                try {
                    affichage = eval(affichage);
                } catch (error) {
                    affichage = 'Error'; 
                }
            } else { 
                console.log('ici');
                affichage+=buttonValue
                console.log(affichage);
            } 
            display.textContent = affichage;
        });
            }); 
}


//*************************************KONAMICODE****************************************************** */
let global = {

    konami: function() {
        let konamikeys = [38,38,40,40,37,39,37,39,66,65], 
        started = false, 
        count = 0;
    
        $(document).keydown(function(e){
        let reset = function() {
            started = false; 
            count = 0;
            return;
        };
    key = e.keyCode;
        if(!started){
            if(key == 38){
            started = true;
        }}
        if (started){
            
            if (konamikeys[count] == key){
            count++;
            } else {
            reset();
            }
            if (count == 10){
            const element = document.querySelector(".Konami");
            if (element) {
                element.style.display = "flex";
            }
            setTimeout (() => {
                const element = document.querySelector(".Konami");
                    if (element) {
                        element.style.display = "none";
                    }
                }, 5000 );
            reset();
            }
            } else {
                reset();
            }
            });
        }
    }
    
    global.konami();
    