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

## Technologies

- **HTML** - Use correct HTML structure to display three seperate HTML pages.
- **CSS** - Stylize HTML to work for both computer and phone display.
- **React** - Use for login and interacting with other users on the calendar page.
- **Webserver** - Connect with Google Drive to save cookbook recipes. Find a way to keep recipes on the server eventually. 
- **Authentication** - Use Auth0 to authenticate users and prevent bot traffic.
- **Database Data** - Store shopping list data.
- **WebSocket Data** - Allow users to see other's edits in the meal plan and during shopping.
