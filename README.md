# React + TypeScript + Vite

## Run this app locally

- Ensure yarn is installed locally
- Run the command: yarn
- Once all packages have been installed
  - To view the app locally in the browser at http://localhost:5173/, run the command: yarn dev
- If there are any CORS issues open https://cors-anywhere.herokuapp.com/corsdemo in a tab and request temporary access

## Instructions

Using a project structure of your choice, write a small web React site or a small React-Native app that utilises at least one of our API endpoints to display exchange data. In more details:

You are free to pick the libraries and tools of your choice, but you should justify why you picked them. The only technical requirements is that you use React or React-Native

You are free to design your UI as you wish, but the general feel should replicate Smarkets’ brand feeling and colours

You should not spend more than 6 hours on this exercise

## Technical description with reasons

- Vite React App
  - React/React Native was the only requirement
  - I prefer using Vite as it is faster than CRA, has better linting, uses less imports and have live updates
- Typescript
  - I prefer TS over JS for frontend development as it helps reduce errors and ensure the benefit of statically typed language, especially when moving data between components
- Tailwind CSS
  - I enjoy the developer experience with Tailwind as it is easier and faster to have no separate styling file/s. It also allows components to be broken into subcomponents more easily.
- Axios data fetching
  - Axios has nice simple and consistent api logic and syntax and great browser compatability and other features that can be useful as an app grows.
- Context API
  - This was to provide easy access for the current selection of data on display throughout the app, removing potential messy prop drilling

## Features with reasons

- Selections in the header
  - Seemed the most user friendly as there was a lot of space in the header unused
  - I chose those 4 somewhat randomly, but kept it to for for ease of use, as the amount would grow, for mobile screens there would need to be the addition of a burger menu of some to choose the desired data selection
- Infinite scroll
  - For me this offered the most user friendly and visually appealing method for fetching additional data not currently on the page, populating the page as the user scrolls to the end until there is not more data to fetch

## Missing data and next steps

- The total traded
  - This was not easily accessible within the API endpoint for each event. Upon inspection of smarkets website network calls, it appeared as though this total was likely calculated from the sum of the volume buckets values from before and all the buckets. This being for an events markets. But honestly, I wasn't 100% sure and in my investigation it felt as though I would be spending too much time than specified.
- The percentage numbers
  - I think they represent the odds of a win, loss or draw depending on the event. However, I honestly was unsure as this isn't an area I am overly familiar with. On inspection, I thought maybe this could be calculated from the ohlc data, Open, High, Low and Close prices? But again this wasn't entirely clear.
- I do believe that in both these areas above, some dicussion with the team would provide clarification and that we could add additional API calls to fetch the missing data.
- More selection categories
  - I kept it to 4 for simplicity, and to not make to scope too large for the required task. Having said that, the logic within tha app would make adding more sports and their events very easy/simple
- Another next step I would love to add is different filtering options, from live, upcoming and finished, to sport, teams, leagues etc, however this seemed outside the scope of this assessment

I hope this ansers all questions, please let me know if you have any additional questions and I look forward to hearing back.
