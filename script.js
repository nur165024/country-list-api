fetch('https://restcountries.eu/rest/v2/all')
    .then(response => response.json())
    .then(data => {
        getCountryAPI(data);
    });

function getCountryAPI(data){
    for (let i = 0; i < data.length; i++) {
        const countryList = data[i];
        const countryItem = document.getElementById('countryItem');
        const div = document.createElement('div');
        div.className = 'col-3';
        const countryText = `
            <h4>${countryList.name}</h4>
            <h6>City : ${countryList.capital}</h6>
            <button onclick="CountrypageDetails('${countryList.name}')">View</button>
        `;
        div.innerHTML = countryText;
        countryItem.appendChild(div);
    }
}   

const CountrypageDetails = name => {
    const url = `https://restcountries.eu/rest/v2/name/${name}`;
    document.getElementById('Countrypage').style.display = 'none';
    fetch(url)
    .then(response => response.json())
    .then(data => {
        DetailsPage(data);    
    });
}

const DetailsPage = data => {
    console.log(data); 
    // name,capital,flag
    const countryDetails = document.getElementById('countryDetails');
    const div = document.createElement('div');
    div.className = 'col-12';
    const textData = `
        <h2>Country Details Page</h2>
        <a class="btn btn-primary" href="index.html">Back</a>
        <h3>Country Name : ${data[0].name}</h3>
        <p>City Name : ${data[0].capital}</p>
        <img src="${data[0].flag}">
    `;
    div.innerHTML = textData;
    countryDetails.appendChild(div);
}


