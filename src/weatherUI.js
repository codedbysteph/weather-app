function getWeatherUI(location){
    const body = document.querySelector('body');

    const card = document.createElement('div');
    const address = document.createElement('div');
    const temp = document.createElement('div');
    const tempMax = document.createElement('div');
    const tempMin = document.createElement('div');
    const icon = document.createElement('img');

    const div1 = document.createElement('div');
    const div2 = document.createElement('div');

    address.textContent = location.address;
    address.setAttribute("class", "address");

    const tempVal = location.temp.toString().split('.');
   
    if(tempVal[1] < 5){
        temp.textContent = tempVal[0] + '°F';
    } else {
        temp.textContent = parseInt(tempVal[0]) + 1 + '°F';
    }
    temp.setAttribute("class", "degrees");

    const tmpMax = location.tempMax.toString().split('.');
    const tmpMin = location.tempMin.toString().split('.');

    if(tmpMax[1] < 5){
        tempMax.textContent = 'H: ' + parseInt(tmpMax[0]);
    } else {
        tempMax.textContent = 'H: ' + parseInt(tmpMax[0])+1;
    }

    if(tmpMin[1] < 5){
        tempMin.textContent = 'L: ' + parseInt(tmpMin[0]);
    } else {
        tempMin.textContent = 'L: ' + (parseInt(tmpMin[0])+1);
    }

    div2.setAttribute("class","div1");
  

    icon.src = location.icon;

    div1.appendChild(address);
    div1.appendChild(temp);

    div2.appendChild(tempMax);
    div2.appendChild(tempMin);

    card.appendChild(div1);
    card.appendChild(div2);

    card.setAttribute("class", "card");
   
    while(body.querySelector('*').nextSibling){
        body.removeChild(body.querySelector('*').nextSibling);
    }
    body.appendChild(card);
}

export {getWeatherUI};