# fun-api-endpoints
Express JS
Restart the redis server by using "sudo service redis-server restart" and it will start running on 127.0.0.1/6379
start the node.js by using npm start
You should check the two url by using postman
For First url :http://127.0.0.1:3000/add  method :POST
and then select Body and then raw and then select json type and paste the json like({
	"strA":"abcdefg",
	"strB":"acg"
}) and click send. It will give the true or false result
For second url:http://127.0.0.1:3000/list method:GET
it will give you all the saved pair of strings

