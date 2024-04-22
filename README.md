

# Quiz Taking Website

This is a quiz-taking website built using PHP, designed to provide a platform for users to take quizzes and view their results. The project uses an XAMPP server to host the website and manage the database.

## Table of Contents

- [Overview](#overview)
- [Prerequisites](#prerequisites)
- [Installation](#installation)
- [Usage](#usage)
- [Features](#features)
- [Technologies](#technologies)
- [Contributing](#contributing)
- [License](#license)

## Overview

This project provides a simple yet interactive quiz-taking website. Users can:

- Take various quizzes on different topics.
- View their quiz results and scores.
- Navigate through different sections of the website.

## Prerequisites

Before you can run the website, you will need:

- [XAMPP](https://www.apachefriends.org/) server installed on your local machine.
- A web browser to access the website.
- A text editor to edit configuration files if necessary.

## Installation

1. Clone the repository to your local machine:

    ```shell
    git clone https://github.com/your-repo/quiz-taking-website.git
    ```

2. Move the project files to the `htdocs` folder of your XAMPP installation.

    - Typically, the `htdocs` folder is located in `C:/xampp/htdocs/`.

3. Open the XAMPP control panel and start the Apache and MySQL services.

4. Create a new database using phpMyAdmin:

    - Go to [http://localhost/phpmyadmin](http://localhost/phpmyadmin) in your web browser.
    - Create a new database (e.g., `quiz_database`).

5. Import the provided SQL file (`quiz_database.sql`) to set up the database tables:

    - In phpMyAdmin, select the newly created database.
    - Click on the "Import" tab and choose the SQL file from the project folder.
    - Import the file.

6. Open the `config.php` file in a text editor and update the database connection details:

    ```php
    $host = 'localhost';
    $username = 'your_username';
    $password = 'your_password';
    $database = 'quiz_database';
    ```

7. Save the file and close the text editor.

## Usage

- To access the website, open a web browser and navigate to [http://localhost/your-project-folder](http://localhost/your-project-folder).
- Follow the on-screen instructions to take quizzes and view your results.

## Features

- User-friendly interface.
- Multiple quizzes on various topics.
- Real-time quiz results and scores.

## Technologies

- PHP: The primary server-side language used for the website.
- MySQL: Used for the database to store quiz questions and results.
- HTML & CSS: For building the website's user interface.

## Contributing

If you'd like to contribute to the project, please follow these steps:

1. Fork the repository.
2. Create a new branch for your changes.
3. Make your changes and commit them.
4. Push your changes to your forked repository.
5. Create a pull request.

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

---

SQL CODES TO BE RUN


















-- Create the table
CREATE TABLE dsa (
    id INT AUTO_INCREMENT PRIMARY KEY,
    question TEXT,
    option1 TEXT,
    option2 TEXT,
    option3 TEXT,
    option4 TEXT,
    correct_answer TEXT
);

-- Insert the questions and options
INSERT INTO dsa (question, option1, option2, option3, option4, correct_answer) VALUES
('Which of the following data structures follows the Last In First Out (LIFO) principle?', 'Queue', 'Stack', 'Linked List', 'Tree', 'Stack'),
('What is the time complexity of the worst-case scenario for searching in a binary search tree (BST)?', 'O(log n)', 'O(n)', 'O(n log n)', 'O(1)', 'O(log n)'),
('Which sorting algorithm has the best average and worst-case time complexity of O(n log n)?', 'Bubble Sort', 'Selection Sort', 'Merge Sort', 'Insertion Sort', 'Merge Sort'),
('What is the main advantage of using a hash table for storing data?', 'Constant time insertion and deletion', 'Guaranteed sorted order of elements', 'Fastest search time complexity', 'No need for collision resolution', 'Constant time insertion and deletion'),
('Which of the following is not a type of tree traversal algorithm?', 'Inorder', 'Postorder', 'Breadth-First Search (BFS)', 'Depth-First Search (DFS)', 'Breadth-First Search (BFS)'),
('What data structure would you typically use to implement a First In First Out (FIFO) queue?', 'Stack', 'Linked List', 'Priority Queue', 'Array', 'Linked List'),
('What is the worst-case time complexity of the quicksort algorithm?', 'O(n)', 'O(n log n)', 'O(n^2)', 'O(log n)', 'O(n^2)'),
('Which data structure is typically used to implement a priority queue?', 'Array', 'Linked List', 'Stack', 'Heap', 'Heap'),
('In a breadth-first search (BFS) traversal of a graph, which data structure is used to keep track of the nodes to be visited?', 'Queue', 'Stack', 'Linked List', 'Heap', 'Queue'),
('Which of the following is not a property of a binary search tree (BST)?', 'Left subtree of a node contains only nodes with keys less than the node''s key', 'Right subtree of a node contains only nodes with keys greater than the node''s key', 'There can be duplicate keys in a BST', 'The binary tree is recursively defined', 'There can be duplicate keys in a BST'),
('What is the time complexity of inserting an element into a heap?', 'O(log n)', 'O(n)', 'O(1)', 'O(n log n)', 'O(log n)'),
('Which sorting algorithm is known for its O(n) time complexity for nearly sorted arrays?', 'Quicksort', 'Insertion Sort', 'Bubble Sort', 'Merge Sort', 'Insertion Sort'),
('Which of the following data structures is not linear?', 'Array', 'Linked List', 'Stack', 'Binary Tree', 'Binary Tree'),
('In a depth-first search (DFS) traversal of a graph, which data structure is typically used to keep track of the nodes to be visited?', 'Queue', 'Stack', 'Linked List', 'Heap', 'Stack'),
('What is the purpose of dynamic programming?', 'To solve optimization problems by breaking them down into simpler subproblems', 'To solve linear programming problems', 'To dynamically allocate memory during program execution', 'To efficiently find the shortest path in a graph', 'To solve optimization problems by breaking them down into simpler subproblems'),
('Which of the following is not an example of a greedy algorithm?', 'Dijkstra''s algorithm', 'Prim''s algorithm', 'Kruskal''s algorithm', 'Bellman-Ford algorithm', 'Bellman-Ford algorithm'),
('What is the time complexity of the best-case scenario for bubble sort?', 'O(n)', 'O(n log n)', 'O(n^2)', 'O(log n)', 'O(n)'),
('Which data structure is typically used to implement a set in programming?', 'Array', 'Linked List', 'Hash Table', 'Stack', 'Hash Table'),
('What is the time complexity of searching in a hash table with a good hash function?', 'O(1)', 'O(log n)', 'O(n)', 'O(n^2)', 'O(1)'),
('Which of the following is not a type of graph?', 'Directed Graph', 'Undirected Graph', 'Cyclic Graph', 'Weighted Graph', 'Cyclic Graph');






-- Create the table
CREATE TABLE os (
    id INT AUTO_INCREMENT PRIMARY KEY,
    question TEXT,
    option1 TEXT,
    option2 TEXT,
    option3 TEXT,
    option4 TEXT,
    correct_answer TEXT
);

-- Insert the questions and options
INSERT INTO os (question, option1, option2, option3, option4, correct_answer) VALUES
('What is the purpose of an operating system?', 'To manage hardware resources', 'To perform calculations', 'To develop software applications', 'To connect to the internet', 'To manage hardware resources'),
('Which component of an operating system is responsible for managing memory?', 'Kernel', 'File System', 'Device Drivers', 'Shell', 'Kernel'),
('What is the role of the scheduler in an operating system?', 'To allocate CPU resources to processes', 'To manage input/output devices', 'To manage memory allocation', 'To interpret and execute commands', 'To allocate CPU resources to processes'),
('Which of the following is not a type of operating system?', 'Real-Time Operating System (RTOS)', 'Batch Operating System', 'Embedded Operating System', 'Virtual Operating System', 'Virtual Operating System'),
('What is the main function of a file system in an operating system?', 'To organize and store data on storage devices', 'To manage CPU resources', 'To control input/output devices', 'To provide a user interface', 'To organize and store data on storage devices'),
('Which scheduling algorithm provides the highest average turnaround time?', 'First-Come, First-Served (FCFS)', 'Round Robin (RR)', 'Shortest Job Next (SJN)', 'Shortest Remaining Time (SRT)', 'First-Come, First-Served (FCFS)'),
('What is the purpose of device drivers in an operating system?', 'To facilitate communication between hardware devices and the operating system', 'To manage memory allocation', 'To interpret and execute commands', 'To provide a user interface', 'To facilitate communication between hardware devices and the operating system'),
('Which of the following is not a function of the operating system kernel?', 'Interpreting and executing commands', 'Managing memory allocation', 'Handling system calls', 'Providing a user interface', 'Providing a user interface'),
('What is the purpose of virtual memory in an operating system?', 'To provide an abstraction of physical memory', 'To manage input/output devices', 'To connect to the internet', 'To perform calculations', 'To provide an abstraction of physical memory'),
('Which type of file system is commonly used in Windows operating systems?', 'NTFS (New Technology File System)', 'EXT4 (Fourth Extended File System)', 'HFS+ (Hierarchical File System Plus)', 'FAT32 (File Allocation Table 32)', 'NTFS (New Technology File System)'),
('What is the purpose of a shell in an operating system?', 'To provide a command-line interface', 'To manage memory allocation', 'To facilitate communication between hardware devices and the operating system', 'To interpret and execute commands', 'To provide a command-line interface'),
('Which component of an operating system is responsible for managing input/output devices?', 'Device Drivers', 'Kernel', 'File System', 'Shell', 'Device Drivers'),
('What is the main function of a process in an operating system?', 'To execute a program', 'To manage memory allocation', 'To interpret and execute commands', 'To provide a user interface', 'To execute a program'),
('Which scheduling algorithm is preemptive in nature?', 'Round Robin (RR)', 'First-Come, First-Served (FCFS)', 'Shortest Job Next (SJN)', 'Shortest Remaining Time (SRT)', 'Round Robin (RR)'),
('What is the purpose of system calls in an operating system?', 'To provide an interface for applications to interact with the operating system kernel', 'To manage memory allocation', 'To control input/output devices', 'To interpret and execute commands', 'To provide an interface for applications to interact with the operating system kernel'),
('Which of the following is not a function of an operating system?', 'Running software applications', 'Managing hardware resources', 'Providing security mechanisms', 'Storing data', 'Running software applications'),
('What is the purpose of a bootloader in an operating system?', 'To load the operating system kernel into memory', 'To manage memory allocation', 'To control input/output devices', 'To provide a user interface', 'To load the operating system kernel into memory'),
('Which type of operating system is designed to run on smartphones, tablets, and other mobile devices?', 'Mobile Operating System', 'Server Operating System', 'Desktop Operating System', 'Mainframe Operating System', 'Mobile Operating System'),
('What is the purpose of a paging system in virtual memory management?', 'To divide physical memory into fixed-size blocks', 'To manage input/output devices', 'To connect to the internet', 'To perform calculations', 'To divide physical memory into fixed-size blocks'),
('Which scheduling algorithm provides the shortest average waiting time?', 'Shortest Job Next (SJN)', 'First-Come, First-Served (FCFS)', 'Round Robin (RR)', 'Shortest Remaining Time (SRT)', 'Shortest Job Next (SJN)'),
('What is the role of a user interface in an operating system?', 'To provide a means for users to interact with the computer', 'To manage memory allocation', 'To interpret and execute commands', 'To control input/output devices', 'To provide a means for users to interact with the computer');






-- Create the table
CREATE TABLE rdbms (
    id INT AUTO_INCREMENT PRIMARY KEY,
    question TEXT,
    option1 TEXT,
    option2 TEXT,
    option3 TEXT,
    option4 TEXT,
    correct_answer TEXT
);

-- Insert the questions and options
INSERT INTO rdbms (question, option1, option2, option3, option4, correct_answer) VALUES
('What is a relational database management system (RDBMS)?', 'Software for managing relational databases', 'A type of NoSQL database', 'A programming language', 'A hardware component', 'Software for managing relational databases'),
('What is the purpose of a primary key in a relational database table?', 'To uniquely identify each record in the table', 'To store textual data', 'To provide a way to join tables', 'To specify constraints on data', 'To uniquely identify each record in the table'),
('Which of the following is not a type of database model?', 'Relational Database Model', 'Hierarchical Database Model', 'Network Database Model', 'Sequential Database Model', 'Sequential Database Model'),
('What is normalization in the context of relational databases?', 'A process to minimize redundancy and dependency by organizing data into tables', 'A way to make data consistent across multiple databases', 'A technique for optimizing database performance', 'A method for encrypting sensitive data', 'A process to minimize redundancy and dependency by organizing data into tables'),
('Which SQL command is used to retrieve data from a relational database?', 'SELECT', 'INSERT', 'UPDATE', 'DELETE', 'SELECT'),
('What is the purpose of the WHERE clause in a SQL query?', 'To filter rows based on a specified condition', 'To order the result set', 'To group rows based on a specified column', 'To perform calculations on numeric data', 'To filter rows based on a specified condition'),
('Which of the following is a data manipulation language (DML) statement in SQL?', 'CREATE', 'SELECT', 'ALTER', 'DROP', 'SELECT'),
('What is a foreign key in a relational database table?', 'A column that references the primary key of another table', 'A unique identifier for each record in the table', 'A constraint that enforces data integrity', 'A column that stores binary data', 'A column that references the primary key of another table'),
('Which of the following is not a valid SQL data type?', 'STRING', 'INTEGER', 'DATE', 'FLOAT', 'STRING'),
('What is the purpose of the GROUP BY clause in a SQL query?', 'To group rows based on the values of a specified column', 'To filter rows based on a specified condition', 'To order the result set', 'To perform calculations on numeric data', 'To group rows based on the values of a specified column'),
('Which SQL command is used to add new rows to a relational database table?', 'INSERT', 'SELECT', 'UPDATE', 'DELETE', 'INSERT'),
('What is the purpose of the JOIN clause in a SQL query?', 'To combine rows from two or more tables based on a related column', 'To filter rows based on a specified condition', 'To group rows based on a specified column', 'To perform calculations on numeric data', 'To combine rows from two or more tables based on a related column'),
('Which of the following is not a valid SQL constraint?', 'UNIQUE', 'PRIMARY KEY', 'FOREIGN KEY', 'SORT', 'SORT'),
('What is the purpose of the ORDER BY clause in a SQL query?', 'To sort the result set based on the values of one or more columns', 'To filter rows based on a specified condition', 'To group rows based on a specified column', 'To perform calculations on numeric data', 'To sort the result set based on the values of one or more columns'),
('Which SQL command is used to modify existing data in a relational database table?', 'UPDATE', 'INSERT', 'SELECT', 'DELETE', 'UPDATE'),
('What is the purpose of the HAVING clause in a SQL query?', 'To filter rows after grouping has been applied', 'To filter rows before grouping is applied', 'To order the result set', 'To perform calculations on numeric data', 'To filter rows after grouping has been applied'),
('Which of the following is a database management system (DBMS)?', 'MySQL', 'HTML', 'CSS', 'JavaScript', 'MySQL'),
('What is the purpose of the DISTINCT keyword in a SQL query?', 'To remove duplicate rows from the result set', 'To select specific columns from a table', 'To order the result set', 'To perform calculations on numeric data', 'To remove duplicate rows from the result set'),
('Which SQL command is used to remove rows from a relational database table?', 'DELETE', 'INSERT', 'SELECT', 'UPDATE', 'DELETE'),
('What is the purpose of the UNION operator in a SQL query?', 'To combine the results of two or more SELECT statements into a single result set', 'To filter rows based on a specified condition', 'To group rows based on a specified column', 'To perform calculations on numeric data', 'To combine the results of two or more SELECT statements into a single result set');






-- Create the table
CREATE TABLE web_tech (
    id INT AUTO_INCREMENT PRIMARY KEY,
    question TEXT,
    option1 TEXT,
    option2 TEXT,
    option3 TEXT,
    option4 TEXT,
    correct_answer TEXT
);

-- Insert the questions and options
INSERT INTO web_tech (question, option1, option2, option3, option4, correct_answer) VALUES
('What does HTML stand for?', 'Hyper Text Markup Language', 'Hyperlinks and Text Markup Language', 'Home Tool Markup Language', 'Hyper Tool Markup Language', 'Hyper Text Markup Language'),
('Which HTML tag is used to define an unordered list?', '<ul>', '<ol>', '<li>', '<list>', '<ul>'),
('Which HTML tag is used to define a table?', '<table>', '<tr>', '<td>', '<th>', '<table>'),
('Which CSS property controls the text size?', 'font-size', 'text-size', 'font-style', 'text-style', 'font-size'),
('What does CSS stand for?', 'Cascading Style Sheets', 'Computer Style Sheets', 'Colorful Style Sheets', 'Creative Style Sheets', 'Cascading Style Sheets'),
('Which CSS property is used to change the text color of an element?', 'color', 'text-color', 'font-color', 'foreground-color', 'color'),
('Which programming language is commonly used for web development?', 'JavaScript', 'Java', 'Python', 'C++', 'JavaScript'),
('Which JavaScript keyword is used to declare variables?', 'var', 'int', 'variable', 'let', 'var'),
('What is the purpose of the document.getElementById() method in JavaScript?', 'To access an HTML element with a specified id', 'To create a new HTML element', 'To remove an HTML element', 'To change the HTML content of an element', 'To access an HTML element with a specified id'),
('Which event occurs when the user clicks on an HTML element?', 'onclick', 'onchange', 'onmouseover', 'onkeydown', 'onclick'),
('Which HTML tag is used to define a hyperlink?', '<a>', '<link>', '<href>', '<hyperlink>', '<a>'),
('Which CSS property is used to change the background color of an element?', 'background-color', 'color', 'text-color', 'background-style', 'background-color'),
('What is the purpose of the console.log() function in JavaScript?', 'To log messages to the browser console', 'To display an alert message', 'To write text to the HTML document', 'To open the browser developer tools', 'To log messages to the browser console'),
('Which HTML tag is used to define a form?', '<form>', '<input>', '<button>', '<submit>', '<form>'),
('Which CSS property is used to set the margin around an element?', 'margin', 'padding', 'border', 'spacing', 'margin'),
('What is the purpose of the alt attribute in an HTML <img> tag?', 'To provide alternative text for an image', 'To specify the image source', 'To define the image width', 'To set the image alignment', 'To provide alternative text for an image'),
('Which JavaScript function is used to change the HTML content of an element?', 'innerHTML', 'textContent', 'appendChild', 'createElement', 'innerHTML'),
('What is the purpose of the href attribute in an HTML <a> tag?', 'To specify the URL of the link', 'To set the link text', 'To define the link target', 'To open the link in a new window', 'To specify the URL of the link'),
('Which CSS property is used to make text bold?', 'font-weight', 'text-weight', 'bold', 'font-style', 'font-weight'),
('What is the purpose of the type attribute in an HTML <script> tag?', 'To specify the scripting language', 'To define the script source', 'To set the script size', 'To determine the script execution order', 'To specify the scripting language');




-- Create the table
CREATE TABLE networking (
    id INT AUTO_INCREMENT PRIMARY KEY,
    question TEXT,
    option1 TEXT,
    option2 TEXT,
    option3 TEXT,
    option4 TEXT,
    correct_answer TEXT
);

-- Insert the questions and options
INSERT INTO networking (question, option1, option2, option3, option4, correct_answer) VALUES
('What does LAN stand for?', 'Local Area Network', 'Large Area Network', 'Longitudinal Access Network', 'Limited Access Network', 'Local Area Network'),
('Which device is used to connect multiple computers in a LAN?', 'Switch', 'Router', 'Modem', 'Hub', 'Switch'),
('What does WAN stand for?', 'Wide Area Network', 'Wireless Area Network', 'Wired Area Network', 'Web Area Network', 'Wide Area Network'),
('Which device is used to connect a LAN to the internet?', 'Router', 'Switch', 'Modem', 'Hub', 'Router'),
('What does IP stand for?', 'Internet Protocol', 'Internal Protocol', 'Intranet Protocol', 'Interconnected Protocol', 'Internet Protocol'),
('Which protocol is used to assign IP addresses to devices on a network?', 'DHCP', 'TCP', 'HTTP', 'FTP', 'DHCP'),
('What does DNS stand for?', 'Domain Name System', 'Dynamic Network System', 'Data Network Security', 'Digital Network Service', 'Domain Name System'),
('Which protocol is used to translate domain names to IP addresses?', 'DNS', 'DHCP', 'HTTP', 'FTP', 'DNS'),
('Which device is used to connect multiple networks together?', 'Router', 'Switch', 'Modem', 'Hub', 'Router'),
('What does TCP stand for?', 'Transmission Control Protocol', 'Total Control Protocol', 'Transport Control Protocol', 'Text Control Protocol', 'Transmission Control Protocol'),
('Which layer of the OSI model is responsible for routing packets?', 'Network Layer', 'Data Link Layer', 'Transport Layer', 'Physical Layer', 'Network Layer'),
('Which protocol is used for secure communication over a network?', 'SSL/TLS', 'HTTP', 'FTP', 'SMTP', 'SSL/TLS'),
('What does HTTP stand for?', 'Hypertext Transfer Protocol', 'Hypertext Transmission Protocol', 'Hyperlink Transfer Protocol', 'Hypertext Transport Protocol', 'Hypertext Transfer Protocol'),
('Which protocol is used to transfer files over a network?', 'FTP', 'HTTP', 'SMTP', 'DNS', 'FTP'),
('What does SMTP stand for?', 'Simple Mail Transfer Protocol', 'Secure Mail Transfer Protocol', 'Server Mail Transfer Protocol', 'Structured Mail Transfer Protocol', 'Simple Mail Transfer Protocol'),
('Which protocol is used for sending email?', 'SMTP', 'FTP', 'HTTP', 'DNS', 'SMTP'),
('What does HTTPS stand for?', 'Hypertext Transfer Protocol Secure', 'Hypertext Transmission Protocol Secure', 'Hyperlink Transfer Protocol Secure', 'Hypertext Transport Protocol Secure', 'Hypertext Transfer Protocol Secure'),
('Which protocol is an extension of HTTP for secure communication over a network?', 'HTTPS', 'FTP', 'SMTP', 'DNS', 'HTTPS'),
('What does FTP stand for?', 'File Transfer Protocol', 'Folder Transfer Protocol', 'File Transmission Protocol', 'Folder Transmission Protocol', 'File Transfer Protocol'),
('Which protocol is used to transfer files between a client and a server?', 'FTP', 'HTTP', 'SMTP', 'DNS', 'FTP');





-- Create the table
CREATE TABLE networking (
    id INT AUTO_INCREMENT PRIMARY KEY,
    question TEXT,
    option1 TEXT,
    option2 TEXT,
    option3 TEXT,
    option4 TEXT,
    correct_answer TEXT
);

-- Insert the questions and options
INSERT INTO networking (question, option1, option2, option3, option4, correct_answer) VALUES
('What does LAN stand for?', 'Local Area Network', 'Large Area Network', 'Longitudinal Access Network', 'Limited Access Network', 'Local Area Network'),
('Which device is used to connect multiple computers in a LAN?', 'Switch', 'Router', 'Modem', 'Hub', 'Switch'),
('What does WAN stand for?', 'Wide Area Network', 'Wireless Area Network', 'Wired Area Network', 'Web Area Network', 'Wide Area Network'),
('Which device is used to connect a LAN to the internet?', 'Router', 'Switch', 'Modem', 'Hub', 'Router'),
('What does IP stand for?', 'Internet Protocol', 'Internal Protocol', 'Intranet Protocol', 'Interconnected Protocol', 'Internet Protocol'),
('Which protocol is used to assign IP addresses to devices on a network?', 'DHCP', 'TCP', 'HTTP', 'FTP', 'DHCP'),
('What does DNS stand for?', 'Domain Name System', 'Dynamic Network System', 'Data Network Security', 'Digital Network Service', 'Domain Name System'),
('Which protocol is used to translate domain names to IP addresses?', 'DNS', 'DHCP', 'HTTP', 'FTP', 'DNS'),
('Which device is used to connect multiple networks together?', 'Router', 'Switch', 'Modem', 'Hub', 'Router'),
('What does TCP stand for?', 'Transmission Control Protocol', 'Total Control Protocol', 'Transport Control Protocol', 'Text Control Protocol', 'Transmission Control Protocol'),
('Which layer of the OSI model is responsible for routing packets?', 'Network Layer', 'Data Link Layer', 'Transport Layer', 'Physical Layer', 'Network Layer'),
('Which protocol is used for secure communication over a network?', 'SSL/TLS', 'HTTP', 'FTP', 'SMTP', 'SSL/TLS'),
('What does HTTP stand for?', 'Hypertext Transfer Protocol', 'Hypertext Transmission Protocol', 'Hyperlink Transfer Protocol', 'Hypertext Transport Protocol', 'Hypertext Transfer Protocol'),
('Which protocol is used to transfer files over a network?', 'FTP', 'HTTP', 'SMTP', 'DNS', 'FTP'),
('What does SMTP stand for?', 'Simple Mail Transfer Protocol', 'Secure Mail Transfer Protocol', 'Server Mail Transfer Protocol', 'Structured Mail Transfer Protocol', 'Simple Mail Transfer Protocol'),
('Which protocol is used for sending email?', 'SMTP', 'FTP', 'HTTP', 'DNS', 'SMTP'),
('What does HTTPS stand for?', 'Hypertext Transfer Protocol Secure', 'Hypertext Transmission Protocol Secure', 'Hyperlink Transfer Protocol Secure', 'Hypertext Transport Protocol Secure', 'Hypertext Transfer Protocol Secure'),
('Which protocol is an extension of HTTP for secure communication over a network?', 'HTTPS', 'FTP', 'SMTP', 'DNS', 'HTTPS'),
('What does FTP stand for?', 'File Transfer Protocol', 'Folder Transfer Protocol', 'File Transmission Protocol', 'Folder Transmission Protocol', 'File Transfer Protocol'),
('Which protocol is used to transfer files between a client and a server?', 'FTP', 'HTTP', 'SMTP', 'DNS', 'FTP');





-- Create the table
CREATE TABLE aptitude (
    id INT AUTO_INCREMENT PRIMARY KEY,
    question TEXT,
    option1 TEXT,
    option2 TEXT,
    option3 TEXT,
    option4 TEXT,
    correct_answer TEXT
);

-- Insert the questions and options
INSERT INTO aptitude (question, option1, option2, option3, option4, correct_answer) VALUES
('If a quarter past 3 o''clock is 15 minutes past, what is the time exactly 1000 minutes past 3 o''clock?', '5:30', '3:25', '3:15', '4:10', '5:40'),
('If a train travels at 40 km/hr for 2 hours, then at 60 km/hr for 3 hours, what is the total distance covered by the train?', '300 km', '280 km', '240 km', '220 km', '300 km'),
('If the perimeter of a square is 40 cm, what is the area of the square?', '100 sq cm', '80 sq cm', '64 sq cm', '120 sq cm', '100 sq cm'),
('If the sum of two consecutive odd numbers is 28, what is the smaller number?', '13', '14', '15', '16', '13'),
('If the cost of 8 books is $24, what is the cost of 12 books?', '$36', '$48', '$30', '$40', '$36'),
('If the product of two numbers is 24 and one of the numbers is 4, what is the other number?', '6', '8', '12', '16', '6'),
('If a bicycle wheel has a diameter of 70 cm, what is its circumference?', '220 cm', '200 cm', '240 cm', '210 cm', '220 cm'),
('If the ratio of apples to oranges in a basket is 3:4 and there are 21 oranges, how many apples are there?', '15', '18', '12', '9', '15'),
('If a rectangle has a length of 12 cm and a width of 8 cm, what is its area?', '96 sq cm', '80 sq cm', '64 sq cm', '100 sq cm', '96 sq cm'),
('If a car travels at a speed of 60 km/hr for 2 hours, then at 80 km/hr for 3 hours, what is the total distance covered by the car?', '340 km', '360 km', '380 km', '400 km', '340 km'),
('If the sum of two consecutive even numbers is 36, what is the larger number?', '20', '18', '16', '14', '20'),
('If the cost of 12 pens is $36, what is the cost of 15 pens?', '$45', '$50', '$40', '$48', '$45'),
('If the product of two numbers is 72 and one of the numbers is 9, what is the other number?', '8', '6', '10', '12', '8'),
('If a square has an area of 49 sq cm, what is its perimeter?', '28 cm', '30 cm', '32 cm', '35 cm', '28 cm'),
('If the ratio of boys to girls in a class is 2:3 and there are 15 boys, how many girls are there?', '25', '20', '18', '30', '22'),
('If a rectangle has a length of 15 cm and a width of 10 cm, what is its perimeter?', '50 cm', '45 cm', '40 cm', '55 cm', '50 cm'),
('If a train travels at a speed of 50 km/hr for 3 hours, then at 70 km/hr for 2 hours, what is the total distance covered by the train?', '270 km', '280 km', '290 km', '300 km', '290 km'),
('If the sum of three consecutive numbers is 57, what is the smallest number?', '18', '19', '20', '21', '18'),
('If the cost of 10 books is $50, what is the cost of 15 books?', '$75', '$70', '$80', '$65', '$75'),
('If the product of two numbers is 40 and one of the numbers is 5, what is the other number?', '8', '10', '12', '15', '8');












