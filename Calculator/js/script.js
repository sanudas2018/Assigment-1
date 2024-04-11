
// Create Get Id function
function getId(id){
    let inputId = document.getElementById(id);
    return inputId;
}
// Create Get Input Value function
function getValue(id){
    let inputId = getId(id);
    let inputValue = inputId.value;
    inputId.value = '';
    return inputValue;
}


// Result Message / Alert Option id received.
let getAlertId = document.getElementById('alertSection');
function message(message, alertColor){
    getAlertId.innerHTML = `
        <div class="col-12 mt-3 d-flex justify-content-center id="alertSuccess">
            <div class="alert alert-${alertColor} w-50 fw-bolder" role="alert">
                Result : <span id="result">${message}</span>
            </div>
        </div>
        `;
}


document.getElementById('calculate').addEventListener('click', function(e){
    // input value received
    let inputNumber1 = parseFloat(getValue('inputNumber1'));
    let inputNumber2 = parseFloat(getValue('inputNumber2'));
    
    // let arrayNumberValue = ['1','2','3','4','5','6','7','8','9','0'];
    
    // Check Validation
    if(isNaN(inputNumber1) || isNaN(inputNumber2)){
        message('Please Enter Valid Numbers !', 'warning');
    }else{
        let OptionValue = operator.value;
    
        if(OptionValue == 1){
            let sum =  (inputNumber1 + inputNumber2).toFixed(2);
            message(sum, 'info')
        }else if(OptionValue == 2){
            let sub =  (inputNumber1 - inputNumber2).toFixed(2);
            message(sub, 'info')
        }else if(OptionValue == 3){
            let multiplication =  (inputNumber1 * inputNumber2).toFixed(2);
            message(multiplication, 'info')
        }else if(OptionValue == 4){
            let division =  (inputNumber1 / inputNumber2).toFixed(2);
            if(inputNumber2 == 0){
                message('Cannot Divide By Zero', 'warning');
            }else{
                message(division, 'info')
            }
           
        }else{

        }
    }


});


