## Project Name
   **Utendaji Perfomance Tracker**

## Live Link
  The site is live at http://ec2-34-207-191-119.compute-1.amazonaws.com/

## Authors Information
   * Josephine Kemuma
   * Bill Otunga
   * Lucy Ololchike
   * Kenneth Kabutu

## Test Users
To test our app, click on the live link and use the below test user profiles we created. Usernames are NOT case sensitive.

* Employee: username: EMARIE, password: kenya123

* Manager: username: TJAMES, password: kenya123

* Admin:  username: BOTUNGA, password: kenya123

## Technologies Used
Hosted on AWS EC2
1. The frontend is built on reactJS (with context api for user state management). 
2. Backend runs on: 
   * Express
   * Node.js
   * Mongodb
3. GraphQL used for perfomance data management (implementation ongoing)
4. Socket.IO for the chat feature. 

## Work In Progress
* Adding SSL to the EC2 instances to introduce HTTPS.
* GraphQL implementation.
* Chat feature implementation. 

## Project Description
The tool helps enhance the productivity of employees by showing them realtime perfomace data. It allows the management to track and monitor the performance of each employee in real-time, providing them with data and insights that can be used to identify areas where improvements are needed. I also allows all memebrs of the organization to chat with each other.
   
## Setup Instructions
* Click on the livelink or;
* Clone the Repository in VScode
* Run npm install to install dependancies
* create a .env file on your local repo and connect to your mongoDB url
* cd into frontend folder, open terminal and run npn start
* open another terminal window, cd into backend folder, and run npn start
* enjoy

## BDD
* There are three user types at this stage: Employee, Manager, and Admin. 
The admin's role is mainly user management: creating, editing, and deleting users and teams. 
* The employee has a view only access to all data, and they can only view their own data. 
* The manager can view and update the performance of all employees under them. They cannot view or edit any other employee. 

#### NB:
There is still lot's of ongoing works on the app and we will regularly update every new feature that we implement.

## Lincence and Copyright Information
   (c) Group1 - 2023. 
