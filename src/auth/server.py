import jwt,datetime,os
from flask import Flask,request
from flask_sqlalchemy import SQLAlchemy

server = Flask(__name__)
postgres = SQLAlchemy(server)