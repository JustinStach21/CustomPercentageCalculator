let display;

function createTable(){
    const table = document.createElement('table');
    table.id = 'createdTable';
    const th = document.createElement('th');
    th.innerText = "Percentages";
    table.appendChild(th);
    for(i = parseInt(display.value); i > 0; i--){
        const tr = document.createElement('tr');
        const td = document.createElement('td');
        td.innerText = i + "/" + display.value;
        tr.appendChild(td);
        const td2 = document.createElement('td');
        td2.innerText = parseInt((i / parseInt(display.value)) * 100) + "%";
        tr.appendChild(td2);
        var checkBox = document.getElementById("IncludeHalfPercentages");
        if(checkBox.checked == true){
            const td3 = document.createElement('td');
            td3.innerText = (i - 0.5) + "/" + display.value;
            tr.appendChild(td3);
            const td4 = document.createElement('td');
            td4.innerText = parseInt(((i - 0.5) / parseInt(display.value)) * 100) + "%";
            tr.appendChild(td4);
        }
        table.appendChild(tr);
        
    }
    document.getElementById('table').appendChild(table);
}

function clear() {
  display.value = "";
  const tableElement = document.getElementById('createdTable')
  tableElement.remove();
}

document.addEventListener('click', () => {

  display = document.getElementById('display');

  const Calculate = document.querySelectorAll('.Calculate');
  Calculate.forEach((CalculateClicked => {
   CalculateClicked.addEventListener('click', createTable);
  }))

  const zero = document.querySelectorAll('.clear');
  zero.forEach((clearClicked => {
    clearClicked.addEventListener('click', clear);
  }))
});

function IncreaseFont(){
    console.log(getComputedStyle(document.body).getPropertyValue('font-size'))
    x = parseInt(getComputedStyle(document.body).getPropertyValue('font-size')) + 2;
    document.body.style.setProperty('font-size', x + 'px');
}

function DecreaseFont(){
    console.log(getComputedStyle(document.body).getPropertyValue('font-size'))
    x = parseInt(getComputedStyle(document.body).getPropertyValue('font-size')) - 2;
    document.body.style.setProperty('font-size', x + 'px');
}

window.addEventListener('click', () => {
    
    const increase = document.querySelectorAll('.IncreaseFontSize');
    increase.forEach((increaseClicked => {
    increaseClicked.addEventListener('click', IncreaseFont);
    }))

    const decrease = document.querySelectorAll('.DecreaseFontSize');
    decrease.forEach((decreaseClicked => {
        decreaseClicked.addEventListener('click', DecreaseFont);
    }))


    // let body = document.body;
    // let bodyStyles = getComputedStyle(body);
    // console.log({ bodyStyles })
    // let bodyBg = getComputedStyle(body).getPropertyValue('background-color');
    // console.log(bodyBg);
    // body.style.setProperty('font-size', '35px');
    // console.log(getComputedStyle(body).getPropertyValue('font-size'))
});


function myFunction() {
    // Get the checkbox
    var checkBox = document.getElementById("myCheck");
    // Get the output text
    var text = document.getElementById("text");
  
    // If the checkbox is checked, display the output text
    if (checkBox.checked == true){
      text.style.display = "block";
    } else {
      text.style.display = "none";
    }
  }