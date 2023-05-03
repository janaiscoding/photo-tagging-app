# Jana's Photo Tagging App

## Project's Scope

- The goal of this project was to create a photo tagging SPA game using **React**, **React Router** and **Firebase**.
- The **backend** incorporation is used to store the game data and display a global leaderboard.

## Live Demo

![Gif preview of the photo tagging app]()

- See the full live preview [here](https://janaiscoding.github.io/photo-tagging-app/)

## Project Details, Description & Personal Notes

- This is a **Find Waldo** type of game, where you are presented with an image, which holds certain targets to be found. I have learned to implement this using the HTML tag <map>.
- When you successfully find all the required targets, you are prompted for a username.
- Your username and your score gets added to the **backend** as a document in the **collection database**.
- Afterwards, I am retrieving the updated data **onSnapshot** to display on a leaderboard. (still working on this)
- This project was really challenging, but it helped me understand how to use Hooks better in React, more specifically why **dependencies** in useEffect are so important, to avoid calling the database requests all the time. (Quota exceeded error)
- I have also gained more experience with using **Conditional Rendering** based on State, this time I implemented it alongside with **React Router**, in order to display a certain container based on current game condition. My particular case was: if the game is won, simply display the winning page!
- I read a lot of documentation about navigation, the useNavigate() hook, **redirecting**, but I came to the conclusion that in that particular case, a simple Conditional Rendering would be sufficient.
- However, I still used **useNavigate()** to be able to handle the submit form and then redirect after the user input has been successfully added to the backend. Without doing so, the form would have either stopped working, or the button would have redirected instantly without waiting for my async function of adding a new document to the backend to complete (the Promise to be resolved).
- Another difficult challenge I faced was trying to **deploy** my application to Firebase, since I would only see a blank page, but once again, after reading a lot, the issue lied within my package.json file. I was not supposed to have a "homepage" property, which was necessary for a gh-pages deploying, but it needed to be removed in order to deploy correctly on firebase.

## Getting Started

### Installing and running

```
git clone https://github.com/janaiscoding/photo-tagging-app
cd photo-tagging-app
npm install
npm start
```

# Built with

## Technologies

- React and React Router
- Firebase - Google Cloud Firestore
- CSS3
- HTML5

## Tools Used

- Visual Studio Code
- npm package manager
- Linux Terminal
- Git and Github

### Future plans for this project

## Copyright

- This project is part of The Odin Project's [curriculum](https://www.theodinproject.com/lessons/node-path-javascript-where-s-waldo-a-photo-tagging-app).
- The images for this app: [Discussing the Divine Comedy with Dante and Lewis Carroll](https://www.lewiscarroll.org/2012/07/06/discussing-the-divine-comedy-with-dante-and-lewis-carroll/)
