[![Contributors][contributors-shield]][contributors-url]
[![MIT License][license-shield]][license-url]
[![LinkedIn][linkedin-aiboost]][linkedin-url]


<!-- PROJECT LOGO -->
<br />
<p align="center">
  <a href="https://connectedh-frontend.herokuapp.com/">
    <h1 align="center">SimEcommerce</h1>
  </a>

  <h3 align="center">Simple Ecommerce with pagination & auto login</h3>

  <p align="center">
    <a href="https://connectedh-frontend.herokuapp.com/">View Demo</a>
    ·
    <a href="https://github.com/ankit5577/connectedh/issues">Report Bug</a>
    ·
    <a href="https://github.com/ankit5577/connectedh/issues">Request Feature</a>
  </p>
</p>



<!-- TABLE OF CONTENTS -->
<details open="open">
  <summary>Table of Contents</summary>
  <ol>
    <li>
      <a href="#about-the-project">About The Project</a>
      <ul>
        <li><a href="#built-with">Built With</a></li>
      </ul>
    </li>
    <li>
      <a href="#getting-started">Getting Started</a>
      <ul>
        <li><a href="#prerequisites">Prerequisites</a></li>
        <li><a href="#installation">Installation</a></li>
      </ul>
    </li>
    <li><a href="#usage">Usage</a></li>
    <li><a href="#contributing">Contributing</a></li>
    <li><a href="#license">License</a></li>
    <li><a href="#contact">Contact</a></li>
  </ol>
</details>



<!-- ABOUT THE PROJECT -->
## About The Project
Simple Ecommerce App with pagination & auto login
it saves login in localstorage and retrieve at init, which makes auto login functionality.
it uses MongoDb as database and ReactJs as frontend


### Built With

For | Technlogy
------------ | -------------
Frontend📱 | ReactJS
Backend💻 | NodeJS, ExpressJS
Database📀 | MongoDB
Deployed☁️ | Heroku 


<!-- GETTING STARTED -->
## Getting Started


### Prerequisites

This is an example of how to list things you need to use the software and how to install them.
* node - [https://nodejs.org/en/download/](https://nodejs.org/en/download/)
* mongodb - https://docs.mongodb.com/manual/installation/

### Installation
1. Clone the repo
   ```bash
   $ git clone https://github.com/ankit5577/connectedh.git
   ```
2. Install NPM packages in both `main folder` and `react16` folder
   ```bash
   $ npm install
   ```
3. add `.env` file in `main folder` folder
   ```env
    PORT="3000" # specify express port
    MONGO_URL="" # specify mongodb url
   ```
4. run ```npm start``` in both frontend and main folder.

<!-- USAGE EXAMPLES -->
## Usage
* go to [App](https://connectedh-frontend.herokuapp.com)
<img src="assets/medicoeye_login.png" width="100%" height="100%">

login with any of these credentials:
```
email: richard@connectedh.com 
password: richard@123

email: joe@connectedh.com 
password: joe@123

email: sean@connectedh.com
password: sean@123
```

* Dashboard
<img src="assets/medicoeye_dashboard.png" width="100%" height="100%">

<!-- CONTRIBUTING -->
## Contributing

**For SimEcommerce**.

1. Fork the Project
2. Create your Feature Branch (`git checkout -b feature/AmazingFeature`)
3. Commit your Changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the Branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request


<!-- LICENSE -->
## License

Distributed under the MIT License. See `LICENSE` for more information.



<!-- CONTACT -->
## Contact

Ankit Kaushal - [@ankit5577](https://twitter.com/ankit5577_dev) - ankit5577.dev@gmail.com

Project Link: [https://www.connectedh.herokuapp.com/](https://www.connectedh.herokuapp.com/)



<!-- MARKDOWN LINKS & IMAGES -->
[contributors-shield]: https://img.shields.io/github/contributors/othneildrew/Best-README-Template.svg?style=for-the-badge
[contributors-url]: https://github.com/anki5577/connectedh-frontend/contributors
[forks-shield]: https://img.shields.io/github/forks/othneildrew/Best-README-Template.svg?style=for-the-badge
[forks-url]: https://github.com/anki5577/connectedh-frontend/members
[stars-shield]: https://img.shields.io/github/stars/othneildrew/Best-README-Template.svg?style=for-the-badge
[stars-url]: https://github.com/anki5577/connectedh-frontend/stargazers
[issues-shield]: https://img.shields.io/github/issues/othneildrew/Best-README-Template.svg?style=for-the-badge
[issues-url]: hhttps://github.com/anki5577/connectedh-frontend/issues
[license-shield]: https://img.shields.io/github/license/othneildrew/Best-README-Template.svg?style=for-the-badge
[license-url]: https://github.com/anki5577/connectedh-frontend/assets/LICENSE.txt
[linkedin-aiboost]: https://img.shields.io/badge/-LinkedIn-black.svg?style=for-the-badge&logo=linkedin&colorB=555
[linkedin-url]: https://linkedin.com/in/ankit5577_dev
