async function main() {
    let token = "";

    var myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");
    // enter your username and password below
    var raw = JSON.stringify({"username": "", "password": ""});

    var requestOptions = {
        method: 'POST',
        headers: myHeaders,
        body: raw,
        redirect: 'follow'
    };

    var myHeaders1 = new Headers();
    var res = "";

    var getToken = await fetch("http://dashboards.djinnsensor.com/api/auth/login", requestOptions)
        .then((res) => res.json())
        .catch(error => console.log('error', error));

    console.log(getToken)

    myHeaders1.append("X-Authorization", "Bearer " + getToken.token);
    var requestOptions1 = {
                method: 'GET',
                headers: myHeaders1,
                redirect: 'follow'
        };

    var getData = await  fetch("http://dashboards.djinnsensor.com/api/plugins/telemetry/DEVICE/be85e7a0-3164-11ec-95c7-3ba06670a610/values/timeseries?keys=Temperature,Humidity&startTs=0000000000000&endTs=9999999999999&limit=500", requestOptions1)
            .then(response => response.json())
            .catch(error => console.log('error', error));

    return getData;
}
