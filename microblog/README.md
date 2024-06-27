# Enjoy the Microblog Project and the MicroblogLite API!

Don't forget to read the [_MicroblogLite_ API docs](http://microbloglite.us-east-2.elasticbeanstalk.com/) and experiment with the API in _Postman!_

Practice and experimentation provide experience, and experience provides confidence.

Microblog Network
Microblog Network is a web application designed to provide users with a platform for posting and sharing short messages, similar to Twitter. This project includes functionalities such as user authentication, posting messages, and viewing posts.

Features
User Authentication: Users can register, log in, and log out securely.
Posting Messages: Authenticated users can create posts.
Viewing Posts: Users can view a list of posts made by themselves and others.
Profile Management: Users have basic profile information displayed.
Technologies Used
Frontend: HTML, CSS, JavaScript (ES6+)
Backend: Node.js, Express.js
Database: MongoDB (for storing user and post data)
Project Structure
graphql
Copy code
├── account/                 # Directory for user authentication-related files
│   ├── login.html           # Login page for user login
│   ├── register.html        # Registration page for user registration
│   ├── auth.js              # Authentication script for handling login/logout
│   └── profile.html         # Profile page for displaying user information
├── posts/                   # Directory for handling posts
│   ├── posts.html           # Page for viewing and creating posts
│   ├── posts.css            # CSS styles specific to posts page
│   ├── posts.js             # JavaScript for handling posts functionality
│   └── api.js               # API functions for interacting with backend
├── global.css               # Global CSS styles applied across all pages
├── index.html               # Homepage with navigation and project overview
├── index.css                # CSS styles for homepage
├── index.js                 # JavaScript for homepage functionality
├── README.md                # This file, providing project overview and setup instructions
├── package.json             # Node.js package file for managing dependencies
└── server.js                # Node.js server file for running the application
Getting Started
To run this project locally, follow these steps:

Clone the repository:

bash
Copy code
git clone https://github.com/your-username/microblog.git
cd microblog
Install dependencies:

bash
Copy code
npm install
Set up MongoDB:

Install MongoDB and ensure it's running locally.
Update the MongoDB URI in server.js or .env file if using environment variables.
Start the server:

bash
Copy code
node server.js
Open the application:

Open a web browser and go to http://localhost:3000 to view the application.

Contributing
Contributions are welcome! If you'd like to contribute to this project, please fork the repository and submit a pull request with your proposed changes.

License
This project is licensed under the MIT License - see the LICENSE file for details.

