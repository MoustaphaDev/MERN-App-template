
# MERN App Template

This is a template for building apps with the MERN Stack using typescript. 



## Tech Stack

**Client:** Vite, React, TailwindCSS, Jest and more...

**Server:** NodeJS, Express, MongoDB, Jest and more...

We use TypeScript, ESLint and Prettier both on the frontend and backend to enable an amazing developer exprerience.
## Installation

To install the template, run these commands on your terminal, but replace ```<mern-app>``` with the name of your choice:


```bash
$ npx degit MoustaphaDev/MERN-App-template <mern-app>
$ cd <mern-app>
```

You'll see a `server` and `client` folder pop-up in your project directory and you need to install their dependencies. You have three options to install them

- You can run the `install.sh` in the root directory to install all the dependencies:
```bash
$ chmod +x install.sh && ./install.sh

```

- Or run its content with this shorthand command

```bash
$ cd ./client && npm install; cd .. && cd ./server && npm install && cd ..
```

- Or again, run its content line-by-line

```bash
$ cd ./client
$ npm install
$ cd ..
$ cd ./server
$ npm install
$ touch .env
$ cd ..
```
## Environment Variables

To finish up your project setup, you will need to add the following environment variables to your `.env` file in the `server` directory

```
PORT=<port_number>
MONGODB_URI=<mongodb_uri>
```


You're now ready to build amazing stuff 🚀


## Feedback

If you have any feedback, please reach out to us at moustapha.happydev@gmail.com or create an issue


#### Note that we've only tested this in unix environments, but it should work on any bash-like shell
