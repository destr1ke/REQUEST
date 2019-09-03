<pre>
To get data from the platform you need to do the following:
<b>1.</b> You need to make a POST request to <b>http://dashboards.djinnsensor.com/api/auth/login</b>
Header: 
  <b>Content-Type: application/json</b>
Body: 
<b>{"username":"{YOUR_USERNAME}", "password":"{YOUR_PASSWORD}"}</b>
  where you need to replace <b>{YOUR_USERNAME}</b> and <b>{YOUR_PASSWORD}</b> with your username and password 
from your personal account at <b>dashboards.djinnsensor.com</b>
example: <b>{"username":"admin@djinnsensor.com", "password":"12345678"}</b>
If you did everything correctly you should get the following answer:
{
    "token": "eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJ0ZW5hbnRAdGhpbmdzYm9hcmQub3JnIiwic2NvcGVzIjpbIlRFTkFOVF9BRE1JTiJdLCJ1c2VySWQiOiJmMGUxOTQ2MC0yMmY4LTExZTktODk2ZS1lZmQ2ZDczMDUxYzAiLCJlbmFibGVkIjp0cnVlLCJpc1B1YmxpYyI6ZmFsc2UsInRlbmFudElkIjoiZjBhZmFlZjAtMjJmOC0xMWU5LTg5NmUtZWZkNmQ3MzA1MWMwIiwiY3VzdG9tZXJJZCI6IjEzODE0MDAwLTFkZDItMTFiMi04MDgwLTgwODA4MDgwODA4MCIsImlzcyI6InRoaW5nc2JvYXJkLmlvIiwiaWF0IjoxNTY3NTEyMjQ5LCJleHAiOjE1Njc1MTMxNDl9.6HT1Ev9jW9KOSvbnoR8p_YerDvvUYIa30mSby0k4UkG1Kjf4PuqZt7AGbqmQnyYdyo8bfSZsdYaEvsQsyozsZw",
    "refreshToken": "eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJ0ZW5hbnRAdGhpbmdzYm9hcmQub3JnIiwic2NvcGVzIjpbIlJFRlJFU0hfVE9LRU4iXSwidXNlcklkIjoiZjBlMTk0NjAtMjJmOC0xMWU5LTg5NmUtZWZkNmQ3MzA1MWMwIiwiaXNQdWJsaWMiOmZhbHNlLCJpc3MiOiJ0aGluZ3Nib2FyZC5pbyIsImp0aSI6IjA3MGRkNDA3LTI1M2MtNGQyMC1hYTg2LTc5MmJkMWFhMWRkOCIsImlhdCI6MTU2NzUxMjI0OSwiZXhwIjoxNTY3NTE1ODQ5fQ.K2CCNs5ZHhCOuzodBypWQVK7GrMfynOO8p9da7Qh-QzjBJyARdgFmQ7NK_tK9jeAI18MaPh4v4iG61kP3xojuQ"
}
You need to copy this "token" and replace below in "X-Authorization".
<b>2.</b> Now you need to make a GET request to <b>http://dashboards.djinnsensor.com/api/plugins/telemetry/DEVICE/{DEVICEID}/values/timeseries?keys=Temperature,Humidity&startTs=0000000000000&endTs=9999999999999&limit=500</b>
where you need to replace {DEVICEID} with your device id in your personal account, screen below:
<img src="screen.jpg"/>
Header: 
  <b>"Content-Type": "application/json"</b>
  <b>"X-Authorization": "Bearer {token}"</b>
  where you need to replace <b>{token}</b> from your previous answer to post request.
  <b>keys</b> -  
</pre>
