const express = require('express');
const app = express();
const port = 3000;

app.set('view engine', 'pug');

app.use(express.urlencoded({ extended: true }));

const sqlite3 = require('sqlite3').verbose()
const db = new sqlite3.Database('./db/students.db')


app.get('/', function (req, res) {
    res.render('index');
});


app.get('/viewAllStudents', function (req, res) {

    db.all('SELECT * FROM students ORDER BY student_id ASC', (err, rows) => {
        res.render('viewAllStudents', { students: rows });
    })
}); 


app.get('/enrollNewStudent', function (req, res) {
    res.render('enrollNewStudent');
});


app.post('/enrollNewStudent', function (req, res) {
    db.run(`INSERT INTO students (first_name, middle_name, last_name, age, address, hobbies) 
            VALUES (?, ?, ?, ?, ?, ?)`,
        [req.body.first_name,
        req.body.middle_name,
        req.body.last_name,
        req.body.age,
        req.body.address,
        req.body.hobbies], function (err) {
            if (err) {
                console.log(err.message);
                res.send('Error enrolling a new student: ' + err.message);
            }
            console.log(`A new student has been enrolled with Student ID ${this.lastID}`);
            res.send('A new student has been enrolled with Student ID: ' + this.lastID + ' <a href="/">Home</a>');
        });
});


app.get('/updateStudentInfo/:student_id', function (req, res) {
    db.get('SELECT * FROM students WHERE student_id = ?', [req.params.student_id], (err, row) => {
        if (err) {
            console.log(err.message);
            res.send('Error retrieving student record: ' + err.message);
        }
        res.render('updateStudentInfo', { student: row });
    });
});

app.post('/updateStudentInfo/:student_id', function (req, res) {
    db.run(`UPDATE students SET first_name = ?, middle_name = ?, last_name = ?, age = ?, address = ?, hobbies = ?  WHERE student_id = ?`,
        [req.body.first_name,
        req.body.middle_name,
        req.body.last_name,
        req.body.age,
        req.body.address,
        req.body.hobbies,
        req.params.student_id], function (err) {
            if (err) {
                console.log(err.message);
                res.send('Error updating student record: ' + err.message);
            }
            console.log(`Student with Student ID ${req.params.student_id} is updated`);
            res.send('Student record updated successfully! <a href="/">Home</a>');
        });
});


app.get('/deleteStudentRecord/:student_id', function (req, res) {
    db.get('SELECT * FROM students WHERE student_id = ?', [req.params.student_id], (err, row) => {
        if (err) {
            console.log(err.message);
            res.send('Error retrieving student record: ' + err.message);
        }
        res.render('deleteStudentRecord', { student: row });
    });
});


app.post('/deleteStudentRecord/:student_id', function (req, res) {
    db.run('DELETE FROM students WHERE student_id = ?', [req.params.student_id], function (err) {
        if (err) {
            console.log(err.message);
            res.send('Error deleting student record: ' + err.message);
        }
        console.log(`Student with ID ${req.params.student_id} deleted!`);
        res.send('Student record deleted successfully! <a href="/">Home</a>');
    });
});

app.listen(port, function () {
    console.log(`Express app listening on port ${port}!`);
});
