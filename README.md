# Before run the project please follow the below steps
STEP1: Rename the file name .env.development.local to .env.development
STEP2: Rename the file name .env.mock.local to .env.mock
STEP3: Rename the file name .env.production.local to .env.production
STEP4: Rename the file name .env.staging.local to .env.staging
You need to follow the steps below for run and build the project:-

## If yarn not installed, please install it by following command otherwise go to STEP6
STEP5: npm i yarn 

## If you don't have the latest code then please run the following command for install dependencies
STEP6: yarn install or yarn
Regenreate new node modules

## Run the following command

## This will auto fix the linting error
STEP7: yarn lint:fix

## This will auto fix the prettier and stylelint error
STEP8: yarn lintcss:fix

## Now run the project locally, this will generate optimize dev bundle from webpack.dev webpack.common file and run the project in yoru local browser.
STEP9: yarn start:dev 

Runs the app in the development mode using the webpack dev config file.<br />
Open [http://localhost:3000] or [http://{youripaddress}:8080] to view it in the browser.

The page will reload if you make edits.<br />


## Others Avaialble commands that you can used for different purposes
## This command will show you the linting error
yarn lint

## This command will show you the css formmating error based on prettier
yarn lintcss

## If wants to make a optimize dev build file for your dev server deployment.
yarn build:dev

## If wants to make a optimize prod build file for your prod server deployment
yarn build:prod

## If wants to create a dev build docker image, please installed Docker Desktop before that
docker build -t [imagenamefordevbuild]:[tagname] -f Dockerfile.dev .

## If wants to create a prod build docker image, please installed Docker Desktop before that
docker build -t [imagenameforprodbuild]:[tagname] -f Dockerfile.prod .

## If wants to run the dev build docker image in local image container
docker run --name [nameofthatcontainer] -it --rm -p 3001:3000 [dockerregistryname]/[imagename]:[tagname]`

## This will push the image to the docker registry.

docker push [dockerregistry]/[imagename]:[tagname]

## This will pull the image to the local registry

docker pull [dockerregistry]/[imagename]:[tagname]

## Other available docker command for yoru reference

## This will show the docker images in your local repository

docker images

## This will show the current running container
docker ps

## This will show all the container, both active, inactive.
dokcer ps -a

## NOTE: IF YOU HAVE FACED ANY DIFFICULTIES TO RUN THE PROJECT IN YOUR LOCAL PLEASE FEEL FREE TO CONTACT WITH ME at  CONTACT DETAILS.
## Email: mehadicse38@gmail.com