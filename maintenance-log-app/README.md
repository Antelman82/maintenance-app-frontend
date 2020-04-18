## Maintenance-log-app README.md
[Link to backend app repo](https://github.com/Antelman82/maintenance-app-backend "Backend Repo")

# Show-Management-App-Frontend
## Project #3: 

The main objective of this project was to create an application that a team could use to manage different projects. In this case, firework shows. Where many seasons could be included from past, present and current. The User should be able to log in and see all shows, as well as current shows, equipment, customers, and types of shows. 

---

## Screenshots
- Wireframe
<p align="center">
<img src='Project 3 Wireframe - Show Management App.jpg' width=600 align='center'>
</p>

<p align="center">
<img src='Project 3 Wireframe - Show Management App - page2.jpg' width=600 align='center'>
</p>

<p align="center">
<img src='Project 3 Wireframe - Show Management App - page3.jpg' width=600 align='center'>
</p>
 
- Database Template
<p align="center">
<img src='public/assets/images/Database template.jpg' width=600 align='center'>
</p>

---

Assets


---

## User Stories
1. [x] As a User I want to log in to my own account
2. [x] As a User I want to create a vehicle
3. [x] As a User I want to have a maintenance log for each vehicle
4. [x] As a User I want to see maintenance for all vehicles at once
5. [ ] As a User I want to be able to filter the log by multiple different values
6. [ ] As a user, I want the app to notify me when the manufacturers recommended services are needed. 
7. [ ] As a user, I want to pick my vehicle and have it provide me with wiper blade sizes, tire sizes, and some other types of typical part replacement things. 
8. [ ]As a User, I want to be able to take a picture of my receipts and maintenance records to store for each log entry. In some cases, I would like to add multiple pictures, either from a local storage, or from my smart device camera.


## Feature Ideas:
1. User Login
    - Name
    - Email
    - Phone number (for text alerts)
2. Repair Log
    - Attach date, shop, receipts, etc.
3. Maintenance Log
    - Item
    - frequency
4. Travel Log
    - Trip event, distance, start/end points, gas pumped/used, etc.
5. Phone app camera pictures to add to different logs
Possible api for vehicle info like tiresize, wiper sizes, etc.

possible API connections:
https://www.carmd.com/api/vehicle-maintenance-carmd-api/
https://www.dataonesoftware.com/solutions/service-maintenance

---

## Necessary Deliverables

Your project must:
https://git.generalassemb.ly/jdr-0127/project-4
- Be a complete product.
- Implement thoughtful user stories
- Be deployed online
- Use something we didn't teach in class

Project Idea and Initial Planning
By the end of Day 1 of Project Week, you need to submit:

Your project idea (a brief 2-3 sentence description of your app)
A list of your models and their properties

## Technical Requirements
The repository/repositories for your final project should include:

A working project (built by you) that meets the technical requirements above.
Frequent commits dating back to the very beginning of the project.
A readme.md file in the root of your repo that follows good standards of documentation (i.e. explanations of the technologies used, the approach taken, features, installation instructions, unsolved problems, etc.)
A planning/ directory in the root of your repo containing a diagram mapping out your project domain. You are welcome to include other planning documents (e.g., wireframes, user stories).
A link to your hosted, working project in the URL section of your Github repo:

## Deployment
- Your API must be deployed to Heroku and your front-end must be deployed to GitHub pages or Surge. Applications that are not deployed will be considered incomplete.
---

## Backend API

Since I used ViewSets from the default django framework, I was able to take advantage of the defaults already provided from that. There were only a couple instances where I had to create different defs for the serializers in order to return more specific values.

```
class UserViewSet(viewsets.ViewSet):
    """
    Example empty viewset demonstrating the standard
    actions that will be handled by a router class.

    If you're using format suffixes, make sure to also include
    the `format=None` keyword argument for each action.
    """

    def list(self, request):
        pass

    def create(self, request):
        pass

    def retrieve(self, request, pk=None):
        pass

    def update(self, request, pk=None):
        pass

    def partial_update(self, request, pk=None):
        pass

    def destroy(self, request, pk=None):
        pass
```
https://www.django-rest-framework.org/api-guide/viewsets/

```
api/auth
api/auth/register
api/auth/login
api/auth/user
api/auth/logout
admin
api/users
api/vehicles
api/logs
```

---

## Bugs
1. currently don't have a great solution setup for promises back from the fetch calls. I had to do a lot of "response.data && repsonce.data.value" conditionals in order for components to not fail due to "undefined". I'm pretty sure there is some other method to handle these, but due to the limited time window for this project, the current setup works, and will have to do for now.

---
## Technologies Used:
- **Command Line**: used for interacting with the computer, navigating the filesystem.
- **Source Control**: used for interaction, management and upload changes on code to Git repository
- **Visual Studio Code**: used for coding with Html, CSS, JavaScript, Python, SQL queries, Database Visualization
- **Google Chrome Web Browser**: used for launching the website
- **Google Chrome Developer Tools**: used to debug and solve problems in the code
- **React-app**: used to access the django rest framework database API
- **Postman**: To test and work with the api communication
- **Heroku**: To deploy both frontend and backend apps
- **Github**: to host both frontend and backend repositories as well as changemangement
- **Django**: used for python and postgres database framework and authentication
- **Postgres**: SQL relational database

## Installation:
All you need is:
react-app
vscode
google chrome

## Dependencies

### Frontend
    @material-ui/core
    cors
    material-ui
    react
    react-dom
    react-router
    react-router-dom
    react-scripts

### Backend
Django
- Rest-framework
- Rest-knox
- Extensions
- Phone-field
Cors
Postgres Database
Account setup
Serializers

