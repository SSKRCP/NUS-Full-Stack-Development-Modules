from flask import Flask
from flask import render_template
from flask import request
import sqlite3

app = Flask(__name__)

@app.route('/', methods=['GET'])
def index():
    return render_template('index.html')

@app.route('/viewAllStudents', methods=['GET'])
def viewAllStudents():

    conn = sqlite3.connect('./db/students.db')
    cursor = conn.cursor()
    cursor.execute('SELECT * FROM students ORDER BY student_id ASC')
    students = cursor.fetchall()
    conn.close()

    return render_template('viewAllStudents.html', students=students)


@app.route('/enrollNewStudent', methods=['GET', 'POST'])
def enrollNewStudent():

    if request.method == 'GET':

        return render_template('enrollNewStudent.html')
    
    elif request.method == 'POST':
        
        first_name = request.form['first_name']
        middle_name = request.form['middle_name']        
        last_name = request.form['last_name']
        age = request.form['age']
        address = request.form['address']
        hobbies = request.form['hobbies'] 

        conn = sqlite3.connect('./db/students.db')
        cursor = conn.cursor()
        cursor.execute('''
            INSERT INTO students (first_name, middle_name, last_name, age, address, hobbies)
            VALUES (?, ?, ?, ?, ?, ?)
        ''', (first_name, middle_name, last_name, age, address, hobbies))
        conn.commit()
        conn.close()

        return 'A new student has been enrolled with Student ID: {} <a href="/">Home</a>'.format(cursor.lastrowid)



@app.route('/updateStudentInfo/<student_id>', methods=['GET', 'POST'])
def updateStudentInfo(student_id):

    if request.method == 'GET':

        conn = sqlite3.connect('./db/students.db')
        cursor = conn.cursor()
        cursor.execute('SELECT * FROM students WHERE student_id = ?', (student_id,))
        student = cursor.fetchone()
        conn.close()

        return render_template('updateStudentInfo.html', student=student)
    
    elif request.method == 'POST':

        first_name = request.form['first_name']
        middle_name = request.form['middle_name']        
        last_name = request.form['last_name']
        age = request.form['age']
        address = request.form['address']
        hobbies = request.form['hobbies'] 

        conn = sqlite3.connect('./db/students.db')
        cursor = conn.cursor()
        cursor.execute('''
            UPDATE students
            SET first_name = ?, middle_name = ?, last_name = ?, age = ?, address = ?, hobbies = ?
            WHERE student_id = ?
        ''', (first_name, middle_name, last_name, age, address, hobbies, student_id))
        conn.commit()
        conn.close()

        return 'Student record updated successfully! <a href="/">Home</a>'



@app.route('/deleteStudentRecord/<student_id>', methods=['GET', 'POST'])
def deleteStudentRecord(student_id):

    if request.method == 'GET':

        conn = sqlite3.connect('./db/students.db')
        cursor = conn.cursor()
        cursor.execute('SELECT * FROM students WHERE student_id = ?', (student_id,))
        student = cursor.fetchone()
        conn.close()

        return render_template('deleteStudentRecord.html', student=student)
    
    elif request.method == 'POST':

        conn = sqlite3.connect('./db/students.db')
        cursor = conn.cursor()
        cursor.execute('DELETE FROM students WHERE student_id = ?', (student_id,))
        conn.commit()
        conn.close()

        return 'Student record deleted successfully! <a href="/">Home</a>'
