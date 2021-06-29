![A lovely reminder](https://i.imgur.com/NWn8Dyc.jpeg)
# Audrey-II is an app that will help those who love their plants, care for their plants.
:wilted_flower:
#vUser needs:
### Registering a new account
    User must have a unique username, as well as password. 
    A unique ID should be auto-generated for each account.
### Logging in to the App using the users account name and password will return a token for the user to use to gain access to protected information.
### Users will be able to create, edit, or delete plants, each plant will have the following properties:

* id: integer
* nickname: string
* h2o_frequencu: string
* image: url src (string)

# This App uses axios to make it's calls:

### baseURL - https://backendanew.herokuapp.com

## Create -
### POST '/api/auth/register'
### POST '/api/auth/login'
### POST '/api/plants'
## Read -
### GET '/api/plants'
## Update -
### PUT '/api/plants/:id'
## Delete -
### DELETE '/api/plants/:id'

## server side state will be handled in local pages where convenient before interacting with Apps global state which will be handled by React-Redux.

### Pages current use of components is barish, A good start to contributions could be creating issues for pages that should be utilizing modular components.

:wilted_flower:
# Before contributing please fork this repo to your own account. 

## After cloning your repository cd into the root of the project and run 

    npm install

>If you encounter any errors please do the following 
>before contacting or creating an issue:

## Delete your package-lock.json file and node-modules folder if they have been created, check parent folders to see that you haven't cloned this project into another.

### install and update deprecated libraries
  
    npm i -g npm-check-updates 
    (will install https://www.npmjs.com/package/npm-check-upda globally)
    ncu -u (will upgrade your package.json)
    npm i (to install new upgrades)

:wilted_flower:
 Start your project in your browser
## This project was initialized with Create-React-App and scripts have already been added so you can start as soon as you would like to, just run 
    npm start
and you are ready to dive in, please check issues to start making contributions.

# Pull Requests
 If you've avoided commenting and committing often but 
want to make a pull request.
 1. please explain which issue 
 you have worked on or what your feature does. 
    
1. If you have time please go back and comment the code 
   you have added.
   
*If it has conflicts we will most likely contact you 
and try to pair program until we can merge.*

:wilted_flower:
# Problems
 Sometimes our code doesn't work, sometimes our 
 instructions for creating a development environment 
 doesn't really work out. If you encounter a problem and 
 want to talk it out with anyone please submit an issue.

:wilted_flower:
## Submitting an issue
1. Please include a screenshot or image-source to a 
screenshot to the problem.

1. Please include steps to re-create the problem.
1. Please include information about your development 
environment (Your OS, versions of Node, React you are 
using, your IDE or text editor.)
1. Please include any steps you have taken to try to 
   solve this problem.

