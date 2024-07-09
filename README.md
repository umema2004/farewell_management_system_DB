# Farewell Party Management System
The Farewell Party Management System is a comprehensive platform tailored for junior students to organize a memorable farewell event for their senior counterparts. This system simplifies the event planning process and facilitates the participation of teachers, who can attend with their families. The objective is to create a wholesome experience, covering aspects such as attendee management, task assignments, budget tracking, and detailed planning of dinner, stage performances, decorations, and venue arrangements.

## Features
### University-Wide Participation
Menu Suggestions: Enable all university students to suggest items for the dinner menu and volunteer for stage performances. Implement a voting system for menu items and performance proposals.
Performance Volunteer: Allow students to propose performances for the farewell party, providing details such as performance type, duration, and special requirements. Voting can be introduced for selecting the most anticipated performances.
Student Registration/Login: New and returning students can register for the farewell party, providing personal details, dietary preferences, and additional family members. Ensure validation for mandatory fields.
Teachers and Family Registration: Teachers can register for the event and provide information about accompanying family members. Teachers' registration is complimentary, and details about the number of accompanying family members should be captured.

### Event Management
Task Assignment: Organizers can assign tasks related to decorations, venue setup, and other responsibilities to student volunteers. Progress tracking and completion status should be visible.
Attendance Tracking: System administrators can track the attendance of students, teachers, and their families, generating reports on the number of attendees and any special requests or considerations.
Budget Tracking: Implement a budget tracking system to monitor expenses related to venue booking, catering, decorations, etc. Regularly update the budget status to avoid overspending.

### Role-Based Use Cases
Authentication: Senior students authenticate into the system with a unique username and password, gaining access to the relevant role-specific dashboard.
View/Manage/Edit Dinner Menu: Managers of the Dinner Menu Team can create, modify, and manage the dinner menu, ensuring proposed items align with the allocated budget.
View/Manage Performances: Managers of the Performance Team can manage and organize stage performances, accepting or rejecting proposals, allocating time slots, and scheduling rehearsals.
View Updates: All senior students can stay informed about the latest updates and progress related to the farewell party, viewing announcements and task assignments.
Make Invitations: Managers of the Invitation Team can design and distribute invitations for the farewell party via email, print, or other chosen methods.
Manage Budgets: The Budget Manager can track and manage the budget, recording expenses and making adjustments based on expenditure.
Task Assignment: Managers of each team (Decor, Invitation, etc.) can assign tasks to team members and track progress.

## Technologies Used
Frontend: HTML, CSS

Backend: Node.js, Express

Database: MySQL

## Installation
### Prerequisites
Node.js

MySQL

### Steps
1. Clone the repository:
```bash
git clone https://github.com/umema2004/farewell_management_system_DB.git
```
2. Navigate to the project directory:
```bash
cd farewell_management_system_DB
```
3. Install the dependencies:
```bash
npm install
```
4. Set up the database:
Create a MySQL database and import the provided SQL file to set up the tables.
5. Configure the database connection:
Update the database configuration in config/db.js with your MySQL credentials.
6. Start the server:
```bash
npm start
```

## Usage
Visit http://localhost:3000 in your browser.

Register or log in as a student or teacher.

Use the dashboard to manage event planning, task assignments, budget tracking, and more.
