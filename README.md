Heroku git URL https://git.heroku.com/mercadolibre-apivue.git
Domain
Your app can be found at https://mercadolibre-apivue.herokuapp.com/

Dockerhub https://hub.docker.com/r/juanpa1997/apivue/


## Para subir el proyecto a Heroku

Install the Heroku CLI
Download and install the Heroku CLI.

If you haven't already, log in to your Heroku account and follow the prompts to create a new SSH public key.

``` 
$ heroku login

``` 

Clone the repository
Use Git to clone mercadolibre-apivue's source code to your local machine.

``` 
$ heroku git:clone -a mercadolibre-apivue$ cd mercadolibre-apivue

``` 

Deploy your changes
Make some changes to the code you just cloned and deploy them to Heroku using Git.

``` 
$ git add .

$ git commit -am "make it better"
 
$ git push heroku master

``` 





_____________________________________________________________________
## Para subir vue a docker 
 
 Creamos en la carpeta raiz un archivo Dockerfile 

``` 
FROM node:9.11.1-alpine

# install simple http server for serving static content
RUN npm install -g http-server

# make the 'app' folder the current working directory
WORKDIR /app

# copy both 'package.json' and 'package-lock.json' (if available)
COPY package*.json ./

# install project dependencies
RUN npm install

# copy project files and folders to the current working directory (i.e. 'app' folder)
COPY . .

# build app for production with minification
RUN npm run build

EXPOSE 8080
CMD [ "npm", "start" ]
```


## Desde la consola de linux 
```
$ build . -t "NAME IMAGE DOCKER"
```
```
$ Docker run -d -p 8080:"puerto del sercer" "NAME IMAGE DOCKER"
```
## Subir a DockerHub
```
$ export DOCKER_ID_USER='##NAME USER DOCKERHUB'

$ Docker login

username:
password: 

$ docker tag #NAMEIMAGEDOCKER  username/NAMEIMAGEDOCKER

$ docker push  username/NAMEIMAGEDOCKER
```


# mercadolibreapivue

## Project setup
```
npm install
```

### Compiles and hot-reloads for development
```
npm run serve
```

### Compiles and minifies for production
```
npm run build
```

### Run your tests
```
npm run test
```

### Lints and fixes files
```
npm run lint
```


