const express = require('express');
const cors = require('cors');
const app = express();
const port = 3000;

app.use(cors())
app.use(express.json())

//**** Connect to the database */
const sqlite3 = require('sqlite3').verbose()
const db = new sqlite3.Database('./db/students.db')

//*** GET endpoint - Retrieve a list of all students.  */
app.get('/students', function(req, res){
    db.all('Select * from students order by name ASC', (err, rows) =>{
        if(err){
            res.status(404).send('No Student record found!');
            return;
        }
        res.status(200).json(rows);
    });
});

//*** GET endpoint - Retrieve a specific student by its ID. */
app.get('/students/:id', function(req, res){
    db.get('Select * from students where id = ?',[req.params.id], (err, row) =>{
        if(err || !row){
            res.status(404).send('Student record not found!');
            return;
        }
        res.status(200).json(row);
    });
});

//**** POST endpoint - Add a new student */
app.post('/students', function(req,res){
    //*** Validate */
    const newStudentRec = req.body;
    if(!newStudentRec.name){
        return res.status(400).json({ error: 'Name is required.' });
    }

    db.run(`Insert into  students (name, email, program) 
         VALUES (?, ?, ?)`,
        [
            req.body.name,
            req.body.email,
            req.body.program 
        ],
        function(err){
            if(err || this.changes === 0){
                res.status(400).send('Error creating new student record!');
                return;
            }
            res.status(201).send('Student record created with id: ' + this.lastID);
        });
});

//**** PUT endpoint - Update an existing student. */
app.put('/students/:id', function(req,res){
    //*** Validate */
    const newStudentRec = req.body;
    if(!newStudentRec.name){
        return res.status(400).json({ error: 'Name is required.' });
    }
    
    db.run(`UPDATE students SET name = ?, email = ?, program = ? WHERE id = ?`,
        [
            req.body.name,
            req.body.email,
            req.body.program, 
            req.params.id
        ],
        function(err){
            if(err){
                res.status(400).send('Error updating the Student record!');
                return;
            }
            if(this.changes === 0) {
                // No rows were updated.
                return res.status(404).send('Student record does not exist!');
            }
            res.status(200).send('Student record updated successfully!');
        });
});

//**** DELETE endpoint - Delete a student record.  */
app.delete('/students/:id', function(req,res){
    db.run(`Delete from students where id = ?`,
        [
            req.params.id
        ],
        function(err){
            if(err){
                res.status(400).send('Error deleting Student record!');
                return;
            }
             if(this.changes === 0) {
                // No rows were updated.
                return res.status(404).send('Student record does not exist!');
            }
            res.status(200).send('Student record deleted successfully');
        }
    );
});

app.listen(port, function(){
    console.log(`Express app listening on port ${port}!`);
})