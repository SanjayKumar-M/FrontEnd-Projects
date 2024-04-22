import jwt,datetime,os
from flask import Flask,request
from flask_mysqldb import MySQL

server = Flask(__name__)
db = MySQL(server)   

#configurations for mysql
server.config["MYSQL_HOST"] = os.environ.get("MYSQL_HOST")


@server.route("/login", methods=["POST"])
def login():
    auth = request.authorization
    if not auth:
       return "missing credentials",401
   
    cur = db.connection.cursor()
    res = cur.execute("SELECT email,password FROM user WHERE email=%s",(auth.username))
    if res >0:
        user_row  = cur.fetchone()
        email = user_row[0]
        password = user_row[1] 
        
        if auth.username != email or auth.password != password:
            return "invalid credentials", 401
        else:
            return createJWT(auth.username, os.environ.get("JWT_SECRET"),True) 
    else:
        return "invalid credentials",401
    