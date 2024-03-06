# Turno Challenge - React + TypeScript + Vite + Styled Components



![001](https://github.com/cleitokarloh/bnb-frontend/assets/5879585/c003e3c9-99ec-40e4-abc2-9abd3b049492)



# First step to run
- Clone this repository
- run `cd bnb-frontend`
- run `npm i`
- run `npm run dev`

## For the front-end specific requirements:
- TypeScript
  - In addition to the TypeScript application, to have more contact with TypeScript I used styled-components.
- Code structure and organization
  - I separated into 3 areas of application: auth, admin, and customer. To components shared inside the application, I separated them in the `src/components` folder. Other components of specific pages I maintain inside the page folder.
 
## And big extra points if you have a solid knowledge of:
- Front-end cache
  - Between many options to do that, I chose to use TanStack Query. With this lib, it's possible to implement the cache configuration and the same behavior of using one global state like Redux, Zustand, or another without creating a big structure to do that.
- Performance and monitoring tools
  - In this particular project, I implemented a `memo` of React to lists and all functions using the `useCallback` hook of React to avoid unnecessary recalculation.
  - I don't implement it in this project, but normally I use Setry.io to monitor the application.
 
## Deploy
I deploy on Vercel, see: https://bnb.app.clei.to
