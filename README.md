# MediCenter

MediCenter is an online platform built using MEAN Stack to help users provide all the medical knowledge at one place, emergency services, online consultancy, emergency contacts of your nearest hospital. Details of all doctors around you regarding of specific expertise etc. Separate dashboards for doctors and patients. This project is currently under develop.

## Getting Started

Install the Node Package Manager and Angular
```bash
$ sudo snap install node --classic --channel=10
$ npm install nodemon -g
$ npm install -g @angular/cli
```
Install MongoDB from [here](https://www.digitalocean.com/community/tutorials/how-to-install-mongodb-on-ubuntu-16-04).

Fork this repo and clone it
```bash
$ git clone https://github.com/<Your User Name>/search_guru.git
```

Run this commmand in both the folders medicenter and client to install the dependencies
```bash
$ npm install
```

Run the application
```bash
# In the search_guru folder
$ nodemon

# Inside the client folder
$ npm start
```

The web app runs at port 4200 i.e. http://localhost:4200/ and the Mongoose db at port 3000