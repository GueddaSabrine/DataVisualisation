
const arrayCategory= ['WARRANTS', 'OTHER OFFENSES', 'LARCENY/THEFT', 'VEHICLE THEFT',
'VANDALISM', 'NON-CRIMINAL', 'ROBBERY', 'ASSAULT', 'WEAPON LAWS',
'BURGLARY', 'SUSPICIOUS OCC', 'DRUNKENNESS',
'FORGERY/COUNTERFEITING', 'DRUG/NARCOTIC', 'STOLEN PROPERTY',
'SECONDARY CODES', 'TRESPASS', 'MISSING PERSON', 'FRAUD',
'KIDNAPPING', 'RUNAWAY', 'DRIVING UNDER THE INFLUENCE',
'SEX OFFENSES FORCIBLE', 'PROSTITUTION', 'DISORDERLY CONDUCT',
'ARSON', 'FAMILY OFFENSES', 'LIQUOR LAWS', 'BRIBERY',
'EMBEZZLEMENT', 'SUICIDE', 'LOITERING',
'SEX OFFENSES NON FORCIBLE', 'EXTORTION', 'GAMBLING', 'BAD CHECKS',
'TREA', 'RECOVERED VEHICLE', 'PORNOGRAPHY/OBSCENE MAT'];

const arrayPdDistrict= ['NORTHERN', 'PARK', 'INGLESIDE', 'BAYVIEW', 'RICHMOND', 'CENTRAL',
'TARAVAL', 'TENDERLOIN', 'MISSION', 'SOUTHERN'];

const districtSelect = document.querySelector('#district-select');
const categorySelect = document.querySelector('#category-select');


function appendOptions(selectElement, array) {
    array.forEach(item => {
      const option = document.createElement('option');
      option.value = item;
      option.textContent = item;
      selectElement.appendChild(option);
    });
  }
  appendOptions(districtSelect, arrayPdDistrict);
  appendOptions(categorySelect, arrayCategory);





  async function SendRequest () {
    var date= document.getElementById("start").value.split('-');
    var heure = document.getElementById("heure").value.toString();
    var district = districtSelect.selectedIndex.toString();

    var x= document.getElementById("x").value.toString();
    var y= document.getElementById("y").value.toString();
    var year=date[0].toString();
    var month=  date[1].toString();
    var day=date[2].toString();

/*
    var a = await fetch('http://127.0.0.1:8000/' + new URLSearchParams({
        Heure: heure,
        Day: day,
        Year:year,
        DayOfWeek:5,
        PdDistrict:district,
        X:x,
        Y:y
    }))
    http://127.0.0.1:8000/predict?Heure=17&Day=6&Year=2030&DayOfWeek=7&PdDistrict=32&X=-122&Y=37*/
    const url =  `http://127.0.0.1:8000/predict?Heure=${heure}&Day=${day}&Year=${year}&DayOfWeek=5&PdDistrict=${district}&X=${x}&Y=${y}`
    
    
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function() {
         if (this.readyState == 4 && this.status == 200) 
             alert(this.responseText);
         else
            alert("prediction : 1");
    };
    xhttp.open("GET", url, true);
    xhttp.setRequestHeader("Content-type", "application/json");
    
    
   
  }
  
