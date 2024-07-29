# HopeKCC Project: Git Backend

## Project Overview
This project is a backend API route designed specifically for a learning management system for HopeKCC students. The backend is used to allow students to sync their github web code to the organization's web server, allowing local changes to their code to be displayed live on the organization website. Upon calling the gitfetch api (under the route: */webfetch/updatePage/:userid*), the server will navigate to the student's branch in the organization repository, pull remote changes, and copy the source code to the web server, giving students an easy way to render their own website views.

## Project Structure
 - **index.js** - express app entry
 - **utilities** - utility functions for api routes
 - **scripts** - bash scripts
 - **routes** - api routes

## Usage Guidelines:
### Storing user credentials:
Upon registration to the LMS, students should provide a username that will be used for github branch creation and their website subdirectory
### Configuration:
A *.env* file should be used to store the github repository path and web server file path. **Note: ** Those file paths should exist outside of the project directory.

## API Routes
---
### webfetch

*/updatePage/:userid*

Switches to the user's git branch, pulls changes from the remote branch, and copies the contents of the repository into the user's subdirectory on the web server. 

**Parameters**
 - userid: unique student identifier used for the student's subdirectory and repo branch
   
**Output**
 - HTTP Code: 200 -> Success
 - HTTP Code: 500 -> Error, if error pops up when trying to pull from the repo
---
