<style>
*{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: 'Roboto', sans-serif;
}
h1 {
    text-align: center;
    font-size: 3em;
    font-weight: bold;
    color: #38bdf8;

}
h2{
    font-size: 2em;
    font-weight: bold;
    color: #38bdf8;
    text-align: center;
}
p{
    font-size: 1.5em;
    font-weight: bold;
    text-align: center;
}
#sideMenu {
    position: fixed; 
    color: #fff; 
    font-size: 14px; 
    font-weight: 600;  
    padding: 10px 10px 10px 36px; 
    height: 100%; 
    width: 25%; 
    overflow: wrap; 
    top: 0; 
    left: 0; 

}

#mainContent {
    margin-left: 250px;
    padding: 0 10px;
}
ul {
    list-style-type: none;
    margin: 0;
    padding: 0;
    overflow: hidden;
    margin-top: 60px;

}

li {
    

}

li a {
    display: block;
    color: white;
    text-align: center;
    padding: 14px 16px;
    text-decoration: none;
}

.as-user {
    color: #38bdf8;
    font-weight: bold;

}
    </style>

<div id="sideMenu"> 
<h2>Contents</h2>
<ul>
<li><a href="#description">Description</a></li>
<li><a href="#erd">ERD</a></li>
<li><a href="#api">API</a></li>
<li><a href="#restful-routing-chart">Restful Routing Chart</a></li>
<li><a href="#wireframes">Wireframes</a></li>
<li><a href="#user-stories">User Stories</a></li>
<li><a href="#mvp-goals">MVP Goals</a></li>
<li><a href="#stretch-goals">Stretch Goals</a></li>
 

</ul>

</div> 
<div id="mainContent"> 
<h1>Strength Progression App</h1>


<h2 id='description'>Description</h2>
<p>
The Strength Progression App is a web application that allows users to track their strength training progress. Users will be able to create an account, log in, and choose a workout program from an opinonated list of workout programs for their level, to align the user with there goals. Users will be able to track their progress by logging their workouts and seeing their progress over time.
</p>


<h2 id='api'>API</h2>

<p>
API = https://wger.de/en/software/api
</p>


<h2 id='restful-routing-chart'>Restful Routing Chart</h2>

| CONTROLLER   |                | MODEL       | VIEW                                                   | Notes                                              |
|--------------|----------------|-------------|--------------------------------------------------------|----------------------------------------------------|
| HTTP Request | URL Path       | CRUD action | HTTP Response                                          |                                                    |
| GET          | /users         | READ        | Array of Objects<br/>[{ users }]<br/>Status: 200       | List all books. Admin Role                         |
| POST         |                | CREATE      | No data<br/>Status: 201<br/>Redirect to /users/login   | Create new User and redirect to login page         |
| GET          | /users/:id     | READ        | Single Object<br/>{ users }<br/>Status:200             | Single user detail page                            |
| PUT/PATCH    |                | UPDATE      | No data<br/>Status: 204<br/>Redirect to /users/:id     | Update user record by id                           |
| DELETE       |                | DESTROY     | No data<br/>Status: NONE<br/>Redirect to /users/new    | Delete user record by id                           |
|              |                |             |                                                        |                                                    |
|              |                |             |                                                        |                                                    |
| CONTROLLER   |                | MODEL       | VIEW                                                   | Notes                                              |
| HTTP Request | URL Path       | CRUD action | HTTP Response                                          |                                                    |
| GET          | /programs      | READ        | Array of Objects<br/>[{ programs }]<br/>Status: 200    | List all Programs                                  |
| POST         |                | CREATE      | No data<br/>Status: 201<br/>Redirect to /programs/:id  | Create new program in programs table               |
| GET          | /programs/:id  | READ        | Single Object<br/>{ programs }<br/>Status:200          | Get single program detail page                     |
| PUT/PATCH    |                | UPDATE      | No data<br/>Status: 204<br/>Redirect to /programs/:id  | Update program by id                               |
| DELETE       |                | DESTROY     | No data<br/>Status: NONE<br/>Redirect to /programs     | Delete program by id                               |
|              |                |             |                                                        |                                                    |
| CONTROLLER   |                | MODEL       | VIEW                                                   | Notes                                              |
| HTTP Request | URL Path       | CRUD action | HTTP Response                                          |                                                    |
| GET          | /cardioLog     | READ        | Array of Objects<br/>[{ cardioLog }]<br/>Status: 200   | Get all cardioLog                                  |
| POST         |                | CREATE      | No data<br/>Status: 201<br/>Redirect to /cardioLog/:id | Create new genre in cardioLog table                |
| GET          | /cardioLog/:id | READ        | Single Object<br/>{ cardioLog }<br/>Status:200         | Get single cardioLog detail page                   |
| PUT/PATCH    |                | UPDATE      | No data<br/>Status: 204<br/>Redirect to /cardioLog/:id | Update timeLogged in cardioLog table based on id   |
| DELETE       |                | DESTROY     | No data<br/>Status: NONE<br/>Redirect to /cardioLog    | Delete timeLogged from cardioLog table based on id |


<h2 id='wireframe'>Lofi Wireframe</h2>

![WIREFRAME](./imgs/wireframe.jpg)


<h2 id='erd'>ERD</h2>

![ERD](./imgs/erd.png)

<h2 id='user-stories'>User Stories</h2>

  <p><span class='as-user'>As a user I want</span> to be able to create an account <span class='as-user'>so that</span> I can save my progress.</p>
  <p><span class='as-user'>As a user I want</span> to be able to log in <span class='as-user'>so that</span> I can save my progress.</p>
  <p><span class='as-user'>As a user I want</span> to be able to log out <span class='as-user'>so that</span> I can close the app and log in later.</p>
  <p><span class='as-user'>As a user I want</span> to be able to create a profile <span class='as-user'>so that</span> I can can see my progress in charts and visuals that will encourage me to continue eating health and working out.</p>
  <p><span class='as-user'>As a user I want</span> to be guided through a program <span class='as-user'>so that</span> I can learn how to lift properly and safely.</p>
  <p><span class='as-user'>As a user I want</span> to be able to see my progress <span class='as-user'>so that</span> I can see how far I have come and how much more I have to go.</p>
  <p><span class='as-user'>As a user I want</span> to have a range of programs to choose from <span class='as-user'>so that</span> I can find a program that fits my goals.</p>
  <p><span class='as-user'>As a user I want</span> a program matched to my level <span class='as-user'>so that</span> I can progress through the program and continue to make maximal gains.</p>
  <p><span class='as-user'>As a user I want</span> to have a FAQ <span class='as-user'>so that</span> I can answer any common questions I might have about the app, powerlifting, progression, diet and fitness in general.</p>
  <p><span class='as-user'>As a user I want</span> an exercise guide <span class='as-user'>so that</span> I can learn how to do the exercises properly and without injury.</p>
  <p><span class='as-user'>As a user I want</span> to know common mistakes <span class='as-user'>so that</span> I can avoid them and continue to make maximal gains.</p>
  <p><span class='as-user'>As a user I want</span> to know the importance of recovery <span class='as-user'>so that</span> I can make sure I am fueling my body properly and getting enough rest and recovery to make maximal gains.</p>
  <p><span class='as-user'>As a user I want</span> to know what to eat <span class='as-user'>so that</span> I can make sure I am fueling my body properly and getting enough rest and recovery to make maximal gains.</p>
  <p><span class='as-user'>As a user I want</span> to be able to calculate my TDEE <span class='as-user'>so that</span> I can make adjustments to the amount of calories I am eating to match my goals.</p>
  <p><span class='as-user'>As a user I want</span> to be able to calculate my macros <span class='as-user'>so that</span> I can make adjustments to the amount of calories I am eating to match my goals.</p>
  <p><span class='as-user'>As a user I want</span> to be able to reference common charts for powerlifting rankings <span class='as-user'>so that</span> I can see where I stand in the powerlifting community.</p>
  <p><span class='as-user'>As a user I want</span> to be able to keep track of my lifts and have charts that tell me what my 1rm and 5rm is <span class='as-user'>so that</span> I can see how much I have progressed.</p>
  <p><span class='as-user'>As a user I want</span> to be told what equipment I need in a gym and what equipment I can purchase to create my own home gym <span class='as-user'>so that</span> I can make sure I have the proper equipment to make maximal gains.</p>
  <p><span class='as-user'>As a user I want</span> scientific break downs of exercises, diets, cardio and recovery <span class='as-user'>so that</span> I can know that what I am doing is rooted in science.</p>
  <p><span class='as-user'>As a user I want</span> professionally written articles that lend credibility to the app <span class='as-user'>so that</span> I can know that what I am doing is rooted in science and that proper research and referencing of scholarly resources is taking place.</p>

<h2 id='mvp-goals'>Mvp Goals</h2>
<p>Create at least two models with Sequelize to query data from database.</p>
<p>Incorporate one api into application.</p>
<p>Implement full CRUD functionality with restful routing.</p>
<p>Use Sequelize ORM to create database structure and interact with.</p>
<p>Include project README.</p>
<p>Write clean, dry code and refactor as needed to deliver professional codebase.</p>
<p>User auth with passport JS implementing token based strategy, or user auth with bcrypt token based strategy</p>
<p>Deploy app online. Provide link in Readme</p>

<h2 id='stretch-goals'>Stretch Goals</h2>
<p>TBD</p>
</div>
