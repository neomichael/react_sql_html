import mysql.connector

mydb = mysql.connector.connect(
    host = "localhost",
    user = "root",
    password = "mysqlMic678#",
    database = "sakila"
)

mycursor = mydb.cursor()
mycursor.execute("SELECT * FROM actor")

myresult = mycursor.fetchall()

for x in myresult:
    print(x)