const display = document.getElementById("display")

let pie = Math.PI;

function Display(input)
{
    display.value += input
}

function Pie()
{
    display.value += pie
}

function Power()
{
    let input = display.value

    let number = parseFloat(input);

    if (!isNaN(number)) {
        let power = Math.pow(number, 2);

        display.value = power;
    } 
    else 
    {
        display.value = "Error";
    }
}

function Delete(input)
{
    display.value = display.value.slice(0, -1);
}

function ClearDisplay()
{
    display.value =  ""
}

function Calculate()
{
    try
    {
        display.value = eval(display.value);
    }
    catch(error)
    {
        display.value = "Math Error"
    }
}