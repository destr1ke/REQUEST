<pre>
<b>1.</b> You need to know your token : 
  go to the <b>https://dashboards.djinnsensor.com</b> platform in your account
  Select devices in the left menu and click on your device -> click on the <b>COPY ACCESS TOKEN</b> button
<b>2.</b> You need to make a POST request to <b>http://dashboards.djinnsensor.com/api/v1/{YOUR_TOKEN}/telemetry</b> 
  where you need to replace <b>{YOUR_TOKEN}</b> with your token (example: AAAAAAAAAAAAAAAAAAAA)
Header: 
  <b>Content-Type: application/json</b>
Body: {"lat":{YOUR_latitude},"lon":{YOUR_longitude}}
  where you need to replace <b>{YOUR_latitude}</b> and <b>{YOUR_longitude}</b> with your latitude and longitude respectively
example: <b>{"lat":53.897218,"lon":27.564334}</b>
</pre>
