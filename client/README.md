

#👀 Product Vision Document ##This is the template for the Product Vision Document that teams complete after their initial icebreaker. The PVD is crucial to the planning phase and is mandatory for all groups to complete before starting their project.

#☝️ Proposal

##What problem does your app solve?

The app will remind users when it’s time to water your plants.

##Be as specific as possible; how does your app solve the problem?

The user can create an account. And the user can submit specific properties about the type of plant so feeding schedules are tailored to that specific type of plant. The User can modify their own personal information.

##What is the mission statement?

Our mission statement is to keep our app growing and accessible for users to be able to keep their plants healthy and feed on a regular schedule.

#💡 Features

##What features are required for your minimum viable product?

user can sign-up / create an account by providing a unique username, a valid mobile phoneNumber and a password. user can login to an authenticated session using the credentials provided at account creation / signup. Authenticated user can Create, Update and Delete a plant object. At a minimum, each plant must have the following properties:

id: Integer
nickname: String
species : String
h2oFrequency: Type determined by implementation
image: (optional)

Authenticated user can view a list of created plants. A plant can be deleted or selected to present user with a detail view where user can then update any property of the selected plant. Authenticated user can update their phoneNumber and password. Authenticated user can update their phoneNumber and password.

##What features may you wish to put in a future release?

Authenticated user can set up push notifications to be triggered when an h2oFrequency of any plant arrives / has elapsed.

Implement a feature that allows an authenticated user to see an appropriate suggested h2oFrequency based on species using the API of your choice.

Authenticated user can upload images of a plant. If no user image is provided, a placeholder image of a plant of the same species populates the view.

##What do the top 3 similar apps do for their users? Florish , Blossom , Planta

#🛠 Frameworks - Libraries

##What 3rd party frameworks/libraries are you considering using?

Axios, react-redux, react-router-dom, body-parser, cors, express, uniqid

##Do the APIs you need require you to contact them to gain access?

TBA

##Are you required to pay to use said API(s)?

TBA

#🧮 For Data Scientists

##Describe the established data source with at least rough data able to be provided on day one.

##Write a description for what the data science problem is. What uncertainty or prediction are you trying to discover? How could this data be used to find a solution to this problem?

#🎯 Target Audience

##Who is your target audience? Be specific.

Plant lovers, poison ivy etc.

##What feedback have you gotten from potential users?

“Why can’t you water our plants?”, “are you playing vieo games?”, “what are you talking about?”

##Have you validated this problem and your solution with a target audience? Describe how.

#🔑 Prototype Key Feature(s)

##How long do you think it will take to implement these features?

Two weeks

##Do you anticipate working on stretch functionality after completion of a Minimal Viable Product?


API calls -

<!-- baseURL - https://buildweekplants.herokuapp.com

GET /plants
GET /users
GET /plant/:id
GET /users/:id

POST /login
POST /users
POST /plants

PUT /plants/:id
PUT /users/:id

DELETE /users/:id
DELETE /plants/:id
 -->

baseURL - https://backendanew.herokuapp.com

Create - 
POST '/api/auth/register'
POST '/api/auth/login'
POST '/api/plants'
Read -
GET '/api/plants'
Update - 
PUT '/api/plants/:id'
Delete -
DELETE '/api/plants/:id'