# node-graphql-prisma-server

This is a boilerplate code for graphQL server with Prisma for binding with database. 


## Prerequisite 
Node version 8.0.0 + 
```bash
$ npm install -g prisma
$ npm install -g graphql-cli
```
you should have a knowledge of [graphQL Schema Defination Language](https://www.prisma.io/blog/graphql-sdl-schema-definition-language-6755bcb9ce51/) 

## Configuration
```bash
$ prisma deploy
```
The prisma deploy command starts an interactive process:
  - First select the Demo server from the options provided. When the browser opens, register with Prisma Cloud and go back to your terminal.
  - Then you need to select the region for your demo server. Once that’s done, you can just hit enter twice to use the suggested values for service and stage.
  
Note: Prisma is open-source. It is based on Docker which means you can deploy it to any cloud provider of your choice (such as Digital Ocean, AWS, Google Cloud, …). If you don’t want to deal with DevOps and the manual configuration of Docker, you can also use Prisma Cloud to easily spin up a private cluster to which you can deploy your services. Watch this short video to learn more about how that works.

it will print output url like following
```bash
https://eu1.prisma.sh/publica-graytracker-771/hackernews-node/dev
```
assign that url to endpoint variable in database/prisma.yml and src/index.js file 
```bash
endpoint: https://eu1.prisma.sh/publica-graytracker-771/hackernews-node/dev
```
Note: If you ever lose the endpoint, you can get access to it again by running 'prisma info' in the terminal.


## Explore Prisma Database
Prisma database is secure by default, to access it, we need to pass token. Let's generate it. 

Open that url (https://eu1.prisma.sh/publica-graytracker-771/hackernews-node/dev) in your browser.
Run following command to generate token to securaly access prisma database 
```bash
$ prisma token
```
Then copy the token that was printed by the CLI and use it to configure an HTTP header in the Playground. You can do so by opening the HTTP HEADERS pane in the bottom-left corner of the Playground - notice that you need to replace the __TOKEN__ placeholder with the actual token that was printed:
```js
{
  "Authorization": "Bearer __TOKEN__"
}
```
Now you should be able to access Prisma database schema and you can also query it.

## Usage

```bash
yarn install
node ./
```
In another terminal run following command to open playground
```bash
graphql playground
```

## License

MIT
