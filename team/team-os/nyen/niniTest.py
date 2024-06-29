import mysql.connector
mydb = mysql.connector.connect(
    host='localhost',
    user='ext_yensydney_gmail_com',
    password='20050704',
    database='niniTest'
)
mycursor = mydb.cursor()
mycursor.execute("create table customers (name varchar(255))")

print("it works")