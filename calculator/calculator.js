let string = "";

let buttons = document.querySelectorAll('.cal-button');

Array.from(buttons).forEach((button)=>{

  button.addEventListener('click', (e)=>{

    if(e.target.innerHTML == '='){
      string = eval(string);
      document.querySelector('.cal_input').value = string;
    }

    else if(e.target.innerHTML == 'C'){
      string = ""
      document.querySelector('.cal_input').value = string;
    }

    else{ 
    console.log(e.target)
    string = string + e.target.innerHTML;
    document.querySelector('.cal_input').value = string;
      }

  })
})
