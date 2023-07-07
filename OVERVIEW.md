# Overview

Please add a write-up of your implementation here. Please also include any instructions needed to run the application.

# Instructions to run the app

1. Clone the repo
2. Run `yarn`
3. Run `yarn dev`
4. Open `http://localhost:3000` in your browser

# Instructions to run tests

1. Run `yarn test`

# What I've implemented

I've implemented the project using Next.js, React, TypeScript, and Tailwind CSS.

I believe these technologies are a good fit for the project because:

1. Next.js is a great framework for building React apps. It provides a lot of useful features out of the box, such as server-side rendering, file-based routing, and image optimization.
2. Tailwind CSS is fantastic to build features fast, it is very customizable and has been industry proven to be a great tool for building UIs.
3. TypeScript is a great tool to catch bugs early and make the code more readable.

# Tradeoffs

1. Large commits. The commits I made were rather large. In a real-world scenario, I would have made atomic commits to make the code review process easier.
2. Playwright. I have not implemented it on this project but I think it is a great e2e tool to use.
3. Storybook. Same as Playwright.
4. Eslint. I added a basic eslint config to make life of everybody on the team easier. I believe keeping code format consistency is very valuable specially when working on larger teams.
5. I added a script to run the linter and tests before running the app locally. In a real world project I would have implemented Husky to run tests AND the linter before any push. This is a great way to prevent bad code from being pushed to the repo.
6. Aliases. I added some basic aliases to make imports easier. In a real world project I would have added more aliases to make imports even easier and help my fellow enginneers to be more productive.
7. I used class-variance-authority to make the code more readable, functional and maintainable. Awesome tool!
8. I set up a .env file with the github url. In a real world we could have n number of environments pointing to different urls. This is a first step to make the app more flexible.
9. Error page and loading page. I added those as well because I consider them to be very important for a great user experience. You can see the error page if you type an invalid username in the url bar.
10. I added some basic tests to make sure some components are rendering properly. In a real world project I would have added more tests to make sure the app is working as expected.
11. Folder structure. I made sure this project can scale. The way I believe that can happen is if we separate concerns. I created a folder for shared components (very low level components used by different features) and a folder for features. The reason I called it 'features' and not 'pages' or 'routes' is because features are more than that. We can have components, hooks, utils, custom api handlers, etc that are only used by this specific feature. This way isolating concerns within each feature. I also created a folder for the api calls to keep the api layer isolated from the rest of the app.
12. Whenever I create a component, I try to make sure it does only one thing. This way the component is more reusable and easier to test. All the components I created on this project are no more than 40 lines long. This makes them really easy to test and mantain. I also understand that there are cases where keeping the components this small is not possible and that's ok. I just try to keep them as small as possible.
13. Responsiveness. I consider this app to be fairly responsive. I tested it on many different screen sizes and looks decent on all of them.
14. Because of all these items I mentioned above I think this could be a great project to be used as a boilerplate for future projects. It has all the basic tools needed to build a great app.
15. kept the src directory only because there is a test that fails the submission if it fails in there.
