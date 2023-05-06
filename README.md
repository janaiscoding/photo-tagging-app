# Jana's Photo Tagging App

## Project's Scope

- The goal of this project was to create a photo tagging SPA game using **React**, **React Router** and **Firebase**.
- The **backend** incorporation is used to store the game data and display a global leaderboard.

## Live Demo

![Gif preview of the photo tagging app](/src/assets/photo-tagging-app-preview.gif)

- See the full live preview on the current Firebase Deploy: [A Photo Tagging App](https://a-photo-tagging-app.web.app/)

## Project Details, Description, Used Documentation & Personal Notes

- This is a **Find Waldo** type of game, where you are presented with an image, which holds certain targets to be found.
- I have learned how to implement this using the [HTML tag <map>](https://www.w3schools.com/html/html_images_imagemap.asp), so that no matter what the image resolution is (for example if the user zooms in or zooms out) the elements stay the same and are recognizable for tagging.
- When you successfully find all the required targets, you are prompted for a username, and along with your score, your data gets [added to the backend as a document in the collection database](https://firebase.google.com/docs/firestore/manage-data/add-data#add_a_document).
- Afterwards, I am retrieving the updated data to display on the leaderboard, in the correct order.
- This project was really challenging, but it helped me understand how to use Hooks better in React, more specifically why [dependencies in useEffect](https://react.dev/reference/react/useEffect#specifying-reactive-dependencies) are so important, to avoid calling the database requests all the time. (Quota exceeded error)
- I have also gained more experience with using [Conditional Rendering using the ternary operator](https://react.dev/learn/conditional-rendering#conditional-ternary-operator--), this time I implemented it alongside with **React Router**, in order to display a certain container based on current game condition. My particular case was: if the game is won, simply display the winning page!
- For redirecting after certain actions, I used [useNavigate()](https://reactrouter.com/en/main/hooks/use-navigate) to be able to handle the submit form and then redirect after the user input has been successfully added to the backend.
- Without doing so, the form would have either stopped working, or the button would have redirected instantly without waiting for my async function of adding a new document to the backend to complete (the sendData Promise to be resolved).
- Another difficult challenge I faced was trying to **deploy** my application to Firebase, since I would only see a blank page, but once again, after reading a lot, the issue lied within my package.json file. I was not supposed to have a "homepage" property, which was necessary for a gh-pages deploying, but it needed to be removed in order to deploy correctly on Firebase. Found the fix to my problem on [this thread on Stack Overflow](https://stackoverflow.com/questions/63439559/uncaught-syntaxerror-unexpected-token-while-deploying-create-react-app-to-f)
- Furthermore, I have learned how to implement an amazing production-ready motion library for React, for animating certain elements: [Framer Motion](https://www.framer.com/motion/)
- Upon reviewing multiple times, I have discovered many edge cases I fixed, which turned out to be a great experience to refactor my code and gain a better understanding of the React stack trace. Mainly they were regarding with not allowing the user to do certain actions if they would simply insert the path in the browser URL (for example: sending a timer score of 0 without playing the game).

## Getting Started

### Installing and running

```
git clone https://github.com/janaiscoding/photo-tagging-app
cd photo-tagging-app
npm install
npm run start
```

# Built with

## Technologies

- React, React Router
- Firebase - Google Cloud Firestore
- Styling: CSS3 and Framer Motion
- HTML5, JSX

## Tools Used

- Visual Studio Code
- npm package manager
- Linux Terminal
- Git and Github

### Future plans for this project

- Mobile Responsiveness
- Better unit testing
- Apply any new knowledge I gain in the future

## Copyright

- This project is part of [The Odin Project's curriculum](https://www.theodinproject.com/lessons/node-path-javascript-where-s-waldo-a-photo-tagging-app).
- The images for this app: [Discussing the Divine Comedy with Dante and Lewis Carroll](https://www.lewiscarroll.org/2012/07/06/discussing-the-divine-comedy-with-dante-and-lewis-carroll/)
