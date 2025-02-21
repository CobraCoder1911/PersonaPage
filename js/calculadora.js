const display = document.querySelector("#display")
const buttons = document.querySelectorAll(".CB") //Crea una lista de botones con la clase CB
var number = display.value;
var percentOp =0
buttons.forEach((btn) => {
    btn.addEventListener("click", () => {
        if (btn.id === "=") {//Compara el id del objeto con el string
            if (display.value === "") {
                display.value = "No Input"
            } 
            else if(percentOp==1){
                display.value = ((number/100)*display.value)
            }
            else {
                display.value = eval(display.value)
            }
        } else if (btn.id === "ac") {
            display.value = ""

        } else if (btn.id ==="percent") {
            number = display.value
            display.value =""
            percentOp=1
        }
        else if (btn.id === "de") {
            display.value = display.value.slice(0, -1)
        } else {
            display.value += btn.id
        }

    })
})