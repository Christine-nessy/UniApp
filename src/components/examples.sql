// Select students doing a particular code
SELECT FirstName, LastName, EmailAddress FROM `students` WHERE CourseID = 1
//Select all lecturers in a certain department
 SELECT * FROM `Lecturers` WHERE DepartmentID = 1
 
 //select students in a particular hostel
 SELECT FirstName, EmailAddress FROM `Students` WHERE HostelID = 7

 //select all courses available
 SELECT CourseName FROM `Courses`

//Select all deparmentheads and their phone numbers
 SELECT HeadofDepartment, DepartmentPhoneNumber FROM `department`
//adding a column of classroomid in the table courses
 ALTER TABLE Courses ADD COLUMN Classroom1D int
 //creating a relationship between table courses and classroom
 ALTER TABLE Courses ADD CONSTRAINT FK_CoursesClassroom FOREIGN KEY (Classroom1D) REFERENCES Classroom (ClassID)
// updating a column
 UPDATE courses
SET Classroom1D= 2
WHERE CourseID =1
//when you want to see classrooms for specific courses.
SELECT CourseName, CLassName, Building FROM Courses, classroom WHERE Courses.Classroom1D= 1