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

<p align="center">
<img src='Project 3 Wireframe - Show Management App - page4.jpg' width=600 align='center'>
</p>
---
Assets


---

## User Stories
1. [ ] As a User I want to log in to my own account
2. [ ] As a User I want to create a vehicle
3. [ ] As a User I want to have a maintenance log for each vehicle
4. [ ] As a User I want to see maintenance for all vehicles at once
5. [ ] As a User I want to be able to filter the log by multiple different values
6. [ ] As a user, I want the app to notify me when the manufacturers recommended services are needed. 
7. [ ] As a user, I want to pick my vehicle and have it provide me with wiper blade sizes, tire sizes, and some other types of typical part replacement things. 


As a User, I want to be able to take a picture of my receipts and maintenance records to store for each log entry. In some cases, I would like to add multiple pictures, either from a local storage, or from my smart device camera.


## Bronze Level:
- MVP
    - Basic Navigation
        - Show Types
        - Customers
        - Users
        - Equipment
    - Able to add users, and shows
    - Able to update users and shows
    - Able to delete users and shows

## Silver Level:
    - User login
    - click on show more info to see specifics of a show
    - Connect users with shows
    - connect equpipment with shows
    - add a map for the location of the venue

## Gold Level:
    - user password maintenance
    - filter user's shows by year
    - We would expand on the show component, and we link to that using the AsideList links. 
        this would allow adding equipment and products to each.
    - also on the show page we could add and remove the products, equipment, users, roles, and also update the status, as well as date, and even venue.

---

## Necessary Deliverables
design and build an app with two major components:
1. An API of your own design (built using Node, Express, and Mongoose) that serves JSON.
1. A front-end React application that updates the UI and makes requests to the API.

## Technical Requirements
### Back-End Requirements:
- A GitHub repo with your backend app
- Your back-end must be a Node, Express, and Mongoose API with at least 2 non-user models. No associations are required.
- Must have Create, Read, Update, and Destroy functionality built throughout the app (i.e. You don't need full CRUD on every model, just full CRUD throughout your models where it makes sense).

### Front-End Requirements:
- A GitHub repo with your frontend app
- Your front-end must use React and leverage the backend API in the above requirements.
- You must use React Router to handle multiple views.
- You must communicate with the back-end API RESTfully to Create, Read, Update, and Destroy resources (using axios).
- Your frontend must be responsive and work on mobile phones, tablets, and desktops

## Collaboration
- A GitHub repo with your frontend app
- Your front-end must use React and leverage the backend API in the above requirements.
- You must use React Router to handle multiple views.
- You must communicate with the back-end API RESTfully to Create, Read, Update, and Destroy resources (using axios)
- Your frontend must be responsive and work on mobile phones, tablets, and desktops
You must have at least one test for each of your components

## Deployment
- Your API must be deployed to Heroku and your front-end must be deployed to GitHub pages or Surge. Applications that are not deployed will be considered incomplete.
---

## Backend API
### cutomers

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

