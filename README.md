# Food Planner Assistant Application
## Elevator Pitch
Creating healthy meal plans for a month or two can be a difficult task. Sometimes its hard to think of all the recipes you know and create a shopping list accordingly. What if there was an intuitive program where you and your family could plan together and then a shopping list was automatically created. Something like this could help you to eat healthier, get everyone excited about meals throughout the month, and make the shopping experience much quicker. 

## Design
The program would have three tabs: Meal plan, Cookbook, and Shopping. The meal plan page would provide an interactive experience where people could share their meal calendar with others who could drag and drop recipes to days in the month in real time. 

![2024-09-14_121549_1](https://github.com/user-attachments/assets/ed0a8729-2f9d-4ecb-a44f-5516aa7dbc04)

A second page would display a shopping list generated from a meal plan and allow 1-4 shoppers to check items off as they split up in the store to make shopping faster.

![2024-09-14_121549_2](https://github.com/user-attachments/assets/a814d97d-d066-4d6e-8f57-3489ff10c5f1)

An optional third page would display all recipes in the cookbook with ingredients and instructions.

![2024-09-14_121549_3](https://github.com/user-attachments/assets/9cadd08d-15f6-4a4f-9660-c9788155ac3b)

## Key Features
- Realtime collaberation between users.
- Bot protection via authentification servers.
- Well styled pages that are pleasing to look at and use.

## Technologies

- **HTML** - Use correct HTML structure to display three seperate HTML pages.
- **CSS** - Stylize HTML to work for both computer and phone display.
- **React** - Use for login and interacting with other users on the calendar page.
- **Webserver** - Connect with Google Drive to save cookbook recipes. Find a way to keep recipes on the server eventually. 
- **Authentication** - Use Auth0 to authenticate users and prevent bot traffic.
- **Database Data** - Store shopping list data.
- **WebSocket Data** - Allow users to see other's edits in the meal plan and during shopping.


## Implementation 
### HTML
- HTML pages for each component of your application
  - *Completed*
- Proper use of HTML tags including BODY, NAV, MAIN, HEADER, FOOTER
  - *Completed*
- Links between pages as necessary
  - *Completed - Home, Meal Plan, Shopping, Cookbook, and Login Links*
- Application textual content
  - *Text on each page describing what page will do*
- Placeholder for 3rd party service calls
  - *Nutrition quotes placeholder on home page*
- Application images
  - *Background image uploaded, some basic CSS to make page readable*
- Login placeholder, including user name display
  - *Login and Signup page placeholders*
- Database data placeholder showing content stored in the database
  - *Database placeholder on Meal Plan and Cookbook page. Login page will also pull and push from database*
- WebSocket data placeholder showing where realtime communication will go
  - *Meal Plan page contains placeholder for WebSocket updates*
 
### CSS

- Properly styled CSS header, footer, and main content body
  - styled properly, some JavaScript needs to be implemented to hide header when scrolling
- Properly styled CSS navigation elements
  - CSS stylized <ul> elements, as per web standard. Changes colors and pointer properly.
- Responsive to window resizing
  - *completed*
- Properly styled CSS application elements
  - Application placeholders on each page
- Properly styled CSS application text content
  - in progress
- Properly styled CSS application images
  - *completed*

### React

- Bundled using Vite
  - *completed*
- Multiple react components that implement or mock all app functionality
  - Cookbook dynamically pulls recipe from an array to populate page
- React router
  - *used 'UseState' hook on Cookbook page to change recipe display dynamically* 
- React hooks
  - *completed*

### Service
- Create an HTTP service using Node.js and Express
  - *completed*
- Frontend served up using Express static middleware
  - *completed*
- Your frontend calls third party service endpoints
  - *Random quote API on About page*
- Your backend provides service endpoints
  - *modified Simon Authentication endpoint to fit with website*
- Your frontend calls your service endpoints
  - *successful call on frontend*


### Login
- Simon Deployed, Github link in footer, README updated, history of at least 10 commits.
  - *Completed*
- Supports new user registration
  - *Completed*
- Supports existing user authentication
  - *Completed*
- Stores application data in MongoDB
  - Stored in cluster0.bjrbj.mongodb.net
- Stores and retrieves credentials in MongoDB
  - Passwords hashed and stored, as well as retrieved successfully
- Restricts application functionality based upon authentication
  - Only welcome page and about page visable before authentication

### WebSocket
- Simon Deployed, Github link in footer, README updated, history of at least 10 commits.
- Backend listens for WebSocket connection.
  - *peerProxy.js file listens for WebSocket connection*
- Frontend makes WebSocket Connection
  - *On shopping page, a websocket test button shows websocket connection status*
- Data sent over WebSocket
  - *Chat feature allows anyone on the page to talk with each other.*
- All visable elements are working.
  - *Still working on getting drag and drop to function properly on meal plan.*