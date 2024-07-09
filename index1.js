const express = require('express');
const mysql = require('mysql');
const bodyParser = require('body-parser');
const path = require('path');

const app = express();
const port = 3000;

// Create connection to MySQL database
const db = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '2307101d',
    database: 'farewellsystem'
});

db.connect(err => {
    if (err) {
        console.error('Error connecting to database:', err);
        return;
    }
    console.log('Connected to database');
});

// Middleware to parse request body
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// Serve static files from 'public' directory
app.use(express.static(path.join(__dirname, 'public')));

// Route to serve
app.get('/home', (req, res) => {
    res.sendFile(path.join(__dirname, 'homedb.html'));
});
app.get('/about', (req, res) => {
    res.sendFile(path.join(__dirname, 'aboutdb.html'));
});
app.get('/senior-login', (req, res) => {
    res.sendFile(path.join(__dirname, 'senior-login.html'));
});
app.get('/volunteer-login', (req, res) => {
    res.sendFile(path.join(__dirname, 'volunteer-login.html'));
});
app.get('/teacher-login', (req, res) => {
    res.sendFile(path.join(__dirname, 'teacher-login.html'));
});
app.get('/org-login', (req, res) => {
    res.sendFile(path.join(__dirname, 'org-login.html'));
});
app.get('/student-reg', (req, res) => {
    res.sendFile(path.join(__dirname, 'student-reg.html'));
});
app.get('/teacher-reg', (req, res) => {
    res.sendFile(path.join(__dirname, 'teacher-reg.html'));
});
app.get('/teacher-home', (req, res) => {
    res.sendFile(path.join(__dirname, 'teacherhome.html'));
});
app.get('/senior-home', (req, res) => {
    res.sendFile(path.join(__dirname, 'seniorhome.html'));
});
app.get('/volunteer-home', (req, res) => {
    res.sendFile(path.join(__dirname, 'volunteerhome.html'));
});
app.get('/org-home', (req, res) => {
    res.sendFile(path.join(__dirname, 'orghome.html'));
});

// Redirect to page when link is clicked
app.get('/gotohome', (req, res) => {
    res.redirect('/home');
});
app.get('/goToAbout', (req, res) => {
    res.redirect('/about');
});
app.get('/gotoseniorlogin', (req, res) => {
    res.redirect('/senior-login');
});
app.get('/gotovolunteerlogin', (req, res) => {
    res.redirect('/volunteer-login');
});
app.get('/gototeacherlogin', (req, res) => {
    res.redirect('/teacher-login');
});
app.get('/gotoorglogin', (req, res) => {
    res.redirect('/org-login');
});
app.get('/gotostudentreg', (req, res) => {
    res.redirect('/student-reg');
});
app.get('/gototeacherreg', (req, res) => {
    res.redirect('/teacher-reg');
});
app.get('/gototeacherhome', (req, res) => {
    res.redirect('/teacher-home');
});
app.get('/gotoseniorhome', (req, res) => {
    res.redirect('/senior-home');
});
app.get('/gotoorghome', (req, res) => {
    res.redirect('/org-home');
});
app.get('/gotovolunteerhome', (req, res) => {
    res.redirect('/volunteer-home');
});

app.post('/teacherlogin', (req, res) => {
    const { username, password } = req.body;

    // Check if the username exists in the database
    db.query('SELECT * FROM USER_ WHERE username = ?', [username], (error, results) => {
        if (error) {
            console.error('Error executing MySQL query:', error);
            return res.status(500).send('Internal Server Error');
        }

        if (results.length === 0) {
            return res.status(401).send('Username not found');
        }

        const user = results[0];

        // Check if the password matches
        if (user.password !== password) {
            return res.status(401).send('Incorrect password');
        }

        // If username and password are correct, redirect to /gotoseniorhome
        res.redirect('/gototeacherhome');
    });
});

app.post('/seniorlogin', (req, res) => {
    const { username, password } = req.body;

    // Check if the username exists in the database
    db.query('SELECT * FROM USER_ WHERE username = ?', [username], (error, results) => {
        if (error) {
            console.error('Error executing MySQL query:', error);
            return res.status(500).send('Internal Server Error');
        }

        if (results.length === 0) {
            return res.status(401).send('Username not found');
        }

        const user = results[0];

        // Check if the password matches
        if (user.password !== password) {
            return res.status(401).send('Incorrect password');
        }

        // If username and password are correct, redirect to /gotoseniorhome
        res.redirect('/gotoseniorhome');
    });
});
app.post('/orglogin', (req, res) => {
    const { username, password } = req.body;

    // Check if the username exists in the database
    db.query('SELECT * FROM USER_ WHERE username = ?', [username], (error, results) => {
        if (error) {
            console.error('Error executing MySQL query:', error);
            return res.status(500).send('Internal Server Error');
        }

        if (results.length === 0) {
            return res.status(401).send('Username not found');
        }

        const user = results[0];

        // Check if the password matches
        if (user.password !== password) {
            return res.status(401).send('Incorrect password');
        }

        // If username and password are correct, redirect to /gotoseniorhome
        res.redirect('/gotoorghome');
    });
});
app.post('/volunteerlogin', (req, res) => {
    const { username, password } = req.body;

    // Check if the username exists in the database
    db.query('SELECT * FROM USER_ WHERE username = ?', [username], (error, results) => {
        if (error) {
            console.error('Error executing MySQL query:', error);
            return res.status(500).send('Internal Server Error');
        }

        if (results.length === 0) {
            return res.status(401).send('Username not found');
        }

        const user = results[0];

        // Check if the password matches
        if (user.password !== password) {
            return res.status(401).send('Incorrect password');
        }

        // If username and password are correct, redirect to /gotoseniorhome
        res.redirect('/gotovolunteerhome');
    });
});

//Route to handle teacher registration form submission
app.post('/registerTeacher', (req, res) => {
    const { fullname, reg_id, contact, username, password, num_members, memberDetails } = req.body;

    // Insert into USER_ table
    const userSql = 'INSERT INTO USER_ (username, password, fullname, contact) VALUES (?, ?, ?, ?)';
    db.query(userSql, [username, password, fullname, contact], (err, result) => {
        if (err) {
            console.error('Error inserting into USER_:', err);
            res.status(500).send('Error registering teacher');
            return;
        }

        // Insert into TEACHER table
        const teacherSql = 'INSERT INTO TEACHER (reg_id, username) VALUES (?, ?)';
        db.query(teacherSql, [reg_id, username], (err, result) => {
            if (err) {
                console.error('Error inserting into TEACHER:', err);
                res.status(500).send('Error registering teacher');
                return;
            }

            // Insert into FAMILYMEMBER table
            if (num_members && memberDetails) {
                const memberValues = memberDetails.map(member => [member.name, member.contact, reg_id]);
                const memberSql = 'INSERT INTO FAMILYMEMBERS (member_name, member_contact, teacher_reg_id) VALUES ?';
                db.query(memberSql, [memberValues], (err, result) => {
                    if (err) {
                        console.error('Error inserting into FAMILYMEMBER:', err);
                        res.status(500).send('Error registering teacher');
                        return;
                    }
                    res.status(200).send('Teacher registered successfully');
                });
            } else {
                res.status(200).send('Teacher registered successfully');
            }
        });
    });
});

// Handle POST request to /registerStudent
app.post('/registerStudent', (req, res) => {
    const fullName = req.body.fullName;
    const contactNo = req.body.contactNo;
    const rollNumber = req.body.rollNumber;
    const username = req.body.username;
    const password = req.body.password;
    const userType = req.body.userType;
    const batch = req.body.batch;

    // Additional fields based on user type
    let additionalFields = {};
    if (userType === 'senior') {
        
            //                         db.query('INSERT INTO SENIOR_STUDENT (student_rollnum, batch, department) VALUES (?, ?, ?)',
            //                             [rollNumber, batch, additionalFields.department],
            //                             (err, results) => {
            //                                 if (err) {
            //                                     console.error('Error inserting data into SENIOR_STUDENT table:', err);
            //                                     res.status(500).send('Internal server error');
            //                                     return;
            //                                 }
            
            //                                 // Insert dietary restrictions
            //                                 if (additionalFields.dietaryRestrictions) {
            //                                     db.query('INSERT INTO DietRestrictions (restriction, student_rollnum) VALUES (?, ?)',
            //                                         [additionalFields.dietaryRestrictions, rollNumber],
            //                                         (err, results) => {
            //                                             if (err) {
            //                                                 console.error('Error inserting data into DietRestrictions table:', err);
            //                                                 // Don't send error response here, just log it
            //                                             }
            //                                         });
            //                                 }
            
            //                                 // Insert special requests
            //                                 if (additionalFields.req_type && additionalFields.specialRequests) {
            //                                     db.query('INSERT INTO SPECIAL_REQUEST (req_type, details, senior_student_rollnum) VALUES (?, ?, ?)',
            //                                         [additionalFields.req_type, additionalFields.specialRequests, rollNumber],
            //                                         (err, results) => {
            //                                             if (err) {
            //                                                 console.error('Error inserting data into SPECIAL_REQUEST table:', err);
            //                                                 // Don't send error response here, just log it
            //                                             }
            //                                         });
            //                                 }
            
            //                                 // Insert family members
            //                                 for (let i = 1; i <= additionalFields.numMembers; i++) {
            //                                     db.query('INSERT INTO FamilyMembers (member_name, member_contact, student_rollnum) VALUES (?, ?, ?)',
            //                                         [additionalFields[`memberName${i}`], additionalFields[`memberContact${i}`], rollNumber],
            //                                         (err, results) => {
            //                                             if (err) {
            //                                                 console.error('Error inserting data into FamilyMembers table:', err);
            //                                                 // Don't send error response here, just log it
            //                                             }
            //                                         });
            //                                 }
            
            //                                 res.send('Registration successful!');
            //                             });
            //                     
    } else if (userType === 'volunteer') 
        {
            //                 // Insert into VOLUNTEER_STUDENT table
            //                 const volunteerSql = 'INSERT INTO VOLUNTEER_STUDENT (student_rollnum, batch, num_of_tasks_assigned) VALUES (?, ?, 0)';
            //                 db.query(volunteerSql, [rollNumber, batch], (err, result) => {
            //                     if (err) {
            //                         console.error('Error inserting into VOLUNTEER_STUDENT:', err);
            //                         res.status(500).send('Error registering student');
            //                         return;
            //                     }
            //                     res.status(200).send('Student registered successfully');
            //                 });
                        } 

    // Insert data into USER_ table
    db.query('INSERT INTO USER_ (username, password, fullname, contact) VALUES (?, ?, ?, ?)',
        [username, password, fullName, contactNo],
        (err, results) => {
            if (err) {
                console.error('Error inserting data into USER_ table:', err);
                res.status(500).send('Internal server error');
                return;
            }

            // Insert data into STUDENT table
            db.query('INSERT INTO STUDENT (rollnum, username) VALUES (?, ?)',
                [rollNumber, username],
                (err, results) => {
                    if (err) {
                        console.error('Error inserting data into STUDENT table:', err);
                        res.status(500).send('Internal server error');
                        return;
                    }

                    // Insert data into relevant student type table
                    if (userType === 'senior') {
                        // Insert data into SENIOR_STUDENT table
                        // Handle additional fields for senior
                        // ...
                    } else if (userType === 'volunteer') {
                        // Insert data into VOLUNTEER_STUDENT table
                        // Handle additional fields for volunteer
                        // ...
                    }

                    res.send('Registration successful!');
                });
        });
});

app.get('/homeTeacher', (req, res) => {
    let sql = 'SELECT announcement_type, details FROM ANNOUNCEMENT';

    // Execute the SQL query
    db.query(sql, (err, result) => {
        if (err) {
            res.status(500).send('Internal server error');
            return;
        }
        res.json(result);
        if (req.query.cancelButton) {
            // If cancel button was clicked, redirect to '/gotohome'
            return res.redirect('/gotohome');
        }
    });
});

app.get('/homeSenior', (req, res) => {
    let sql = 'SELECT announcement_type, details FROM ANNOUNCEMENT';
    db.query(sql, (err, result) => {
        if (err) {
            res.status(500).send('Internal server error');
            return;
        }
        res.json(result);
        if (req.query.cancelButton) {
            // If cancel button was clicked, redirect to '/gotohome'
            return res.redirect('/gotohome');
        }
    });
});

app.get('/homeVolunteer', (req, res) => {
    let sql = 'SELECT * FROM VOLUNTEER_STUDENT';
    db.query(sql, (err, result) => {
        if (err) {
            res.status(500).send('Internal server error');
            return;
        }
        res.json(result);
        if (req.query.cancelButton) {
            // If cancel button was clicked, redirect to '/gotohome'
            return res.redirect('/gotohome');
        }
    });
    });

app.post('/team_selection', (req, res) => {
    const selectedTeam = req.body.team;

    if (selectedTeam === '1') { // Dinner Menu Team
        // Fetch menu items from MENU table
        db.query('SELECT item, cost FROM MENU', (err, menuResults) => {
            if (err) {
                throw err;
            }

            // Fetch menu suggestions and their counts from MENU_SUGGESTION table
            db.query('SELECT item, COUNT(*) AS count FROM MENU_SUGGESTION GROUP BY item', (err, suggestionResults) => {
                if (err) {
                    throw err;
                }

                res.json({ menu: menuResults, suggestions: suggestionResults });
            });
        });
    } else if (selectedTeam === '2') { // Performance Team
        // Fetch performance information based on the selected team from PROPOSALS table
        db.query('SELECT performance_title, acceptance, time_slots, venue, rehearsals FROM PROPOSALS', [selectedTeam], (err, performanceResults) => {
            if (err) {
                throw err;
            }
            res.json({ performanceInfo: performanceResults });
        });
    } else if (selectedTeam === '3') { // Budget Team
        // Fetch all budget amounts and calculate the total budget
        db.query('SELECT * FROM BUDGET', (err, budgetResults) => {
            if (err) {
                throw err;
            }
            let totalBudget = 0;
            const budgets = {};
            budgetResults.forEach(budget => {
                const booking = parseFloat(budget.booking_budget) || 0;
                const catering = parseFloat(budget.catering_budget) || 0;
                const decor = parseFloat(budget.decor_budget) || 0;
                const other = parseFloat(budget.other_budgets) || 0;
                budgets['Booking'] = (budgets['Booking'] || 0) + booking;
                budgets['Catering'] = (budgets['Catering'] || 0) + catering;
                budgets['Decor'] = (budgets['Decor'] || 0) + decor;
                budgets['Other'] = (budgets['Other'] || 0) + other;
                totalBudget += booking + catering + decor + other;
            });
            res.json({ budgets, totalBudget });
        });
    } else if (selectedTeam === '4') { // Invitations Team
        // Return images for invitations
        res.json({ invitationsImages: ['pics/ann1.jpg', 'pics/ann2.jpg', 'pics/ann3.jpg'] });
    } else {
        // For other teams, return an empty array
        res.json({ data: [] });
    }
});

app.post('/add_to_budget', (req, res) => {
    const { team, itemName, itemCost } = req.body;

    // Assuming 'team' parameter corresponds to the budget team ID in the database
    db.query('INSERT INTO BUDGET (budget_team_id, booking_budget, catering_budget, decor_budget, other_budgets) VALUES (?, ?, ?, ?, ?)', [team, itemCost, 0, 0, 0], (err, result) => {
        if (err) {
            res.status(500).json({ error: 'Failed to add item to budget.' });
        } else {
            res.json({ success: true });
        }
    });
});

// Endpoint for adding a new menu item
app.post('/add_menu_item', (req, res) => {
    const newItemName = req.body.item;
    const newItemCost = req.body.cost;

    // Insert the new menu item into the MENU table
    db.query('INSERT INTO MENU (item, cost) VALUES (?, ?)', [newItemName, newItemCost], (err, result) => {
        if (err) {
            if (err.code === 'ER_SIGNAL_EXCEPTION' && err.sqlState === '45000') {
                return res.status(400).json({ error: 'Total menu cost exceeds total budget' });
            }
            throw err;
        }
        console.log("New menu item added:", newItemName, newItemCost);
        res.json({ status: 'success' });
    });
});
    
// Route to get menu items
app.get('/getMenuItems', (req, res) => {
    let sql = 'SELECT menu_id, item FROM MENU';
    db.query(sql, (err, result) => {
        if (err) {
            res.status(500).send('Internal server error');
            return;
        }
        res.json(result);
    });
});

// Route to handle performance vote submission
app.post('/submitVote', (req, res) => {
    const { menuItem, performanceType, duration, specialRequests } = req.body;
    const organizer_username = 'ali123'; 
    const senior_student_rollnum = '20191001'; 

    let sqlMenu = 'INSERT INTO MENU_SUGGESTION (itemtype, item, organizer_username, senior_student_rollnum) VALUES (?, ?, ?, ?)';
    let sqlPerformance = 'INSERT INTO PERFORMANCE_SUGGESTION (performancetype, duration, special_requests, organizer_username, senior_student_rollnum) VALUES (?, ?, ?, ?, ?)';

    db.query(sqlMenu, ['main course', menuItem, organizer_username, senior_student_rollnum], (err, result) => {
        if (err) {
            res.status(500).send('Internal server error');
            return;
        }
        // Insert performance vote
    db.query(sqlPerformance, [performanceType, duration, specialRequests, organizer_username, senior_student_rollnum], (err, result) => {
        if (err) {
            res.status(500).send('Internal server error');
            return;
        }
        res.json({ message: 'Votes submitted successfully' });
    });
    });
});

// Route to get tasks and their progress
app.get('/getTasksAndProgress', (req, res) => {
    let tasksQuery = 'SELECT * FROM TASK';
    let progressQuery = 'SELECT * FROM PROGRESS';

    db.query(tasksQuery, (err, tasks) => {
        if (err) {
            console.error('Error fetching tasks:', err);
            res.status(500).json({ error: 'Internal server error' });
            return;
        }

        db.query(progressQuery, (err, progress) => {
            if (err) {
                console.error('Error fetching progress:', err);
                res.status(500).json({ error: 'Internal server error' });
                return;
            }

            res.json({ tasks, progress });
        });
    });
});


// Start the server
app.listen(port, () => {
    console.log(`Server is listening on port ${port}`);
});