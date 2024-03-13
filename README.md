# TODO-LIST


A simple ToDo List web application built with MERN Stack.
[React](https://reactjs.org/) and [Node.js](https://nodejs.org/) .
Using MongoDB for database.

## Overview

This is a web application designed to help users manage their tasks efficiently. Users can add, update, delete, and mark tasks as completed or uncompleted.

## Features

1. Create Tasks: Users can add new tasks with a title and optional description.
2. Mark Tasks: Tasks can be marked as completed or uncompleted.
3. Edit Tasks: Users can edit the title and description of tasks.
4. Delete Tasks: Users can delete tasks they no longer need.
5. Persistence: The application ensures data persistence, so tasks remain saved even after refreshing the page.

## Project Structure

The project is structured as follows:

1. /client: Contains the frontend code written in React.js.
2. /server: Contains the backend code written in Node.js with Express.js.
3. /models: Data models for MongoDB.
4. /routes: Backend API routes.
5. /views: HTML templates.

## API Endpoints

GET /api/tasks: Retrieve all tasks.
POST /api/tasks: Create a new task.
PUT /api/tasks/:id: Update a task by ID.
DELETE /api/tasks/:id: Delete a task by ID.

## Main Workflows
### Workflow 1: User Registration and Authentication

User navigates to the registration page.
User fills out the registration form and submits it.
Server validates the form data and creates a new user account.
User receives a confirmation email to verify their account.
Once verified, the user can log in using their credentials.

### Workflow 2: Creating a Task

Logged-in user navigates to the task creation page.
User fills out the task details and submits the form.
Server validates the data and creates a new task for the user.
The task is added to the user's task list and displayed on the dashboard.

### Workflow 3: Editing a Task

User selects a task from their task list.
User clicks on the "Edit" button next to the task.
Task details are loaded into an editable form.
User makes changes to the task and saves the updates.
Server validates the changes and updates the task in the database.

### NOTE: Further CRUD operations perform like deleting task, Updating, Mark as Complete task.
## Demo1

You can view a live demo of the authentication [here](https://vimeo.com/922881380?share=copy) 


## Demo2
Live demo of CRUD operations. You can view a live demo of the application [here](https://vimeo.com/922882891?share=copy)
