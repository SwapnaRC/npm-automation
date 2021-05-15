## When you start the project initally you can addd the package.json file by using a cmd:

## step 1:

npm init and goes on selecting the options need for project or else

type the cmd `npm init -y ` it will give the default option to your `package.json `file

## step 2:

Adding start script in package.json

```
"scripts": {
    "start": "node index.js"
  }
```

and create `index.js `

you can run using the `npm start`

## step 3:

Scripting for building
CLI tools via NPM Scripts adding typescript dependencies such as :

```
  "@types/express": "^4.17.1",
  "@types/node": "^12.12.7",
  "tslint": "^5.20.1",
  "typescript": "^3.7.2"
```
Add the tsConfig file the below cmd will create the tsConfig file with default option

`npm run tsc -- --init`

later when we are transpiling  js file to ts file with the below cmd so it will generate ts to js file 

`npm run tsc`

Added start script then do the `npm start`

## step 4: 
Building before runnning a preHook
Add the prehook in package.json -->  scripts
```
 "prestart": "echo running a prestart hook && npm run tsc",
 
 ```
 
 Using the && you can concat 2 operation Such as here we are adding 2 thing i.e echo and npm run tsc 2 diff cmd are concatinating 

 ## step 5:
 Cross-env depdency adding because to run in any environment it can me mac, windows or linux distributed platform 

 `npm install -D cross-env`

 and add in the start script as well
 ```
 "start": "cross-env PORT=4000 node index.js",
 ```

 another way we can add the env variable through npm configuration funcationlity 

```"config": {
    "port": 5000
  }```

and in index.ts
```const port =process.env.npm_package_config_port || 5000 ```
