<a name="readme-top"></a>

<!-- PROJECT SHIELDS -->
<p align="center">
  <a href="https://github.com/nilotpaldhar/silverscreen/issues">
    <img src="https://img.shields.io/github/issues/nilotpaldhar/silverscreen.svg?style=for-the-badge" alt="Issues">
  </a>
  <a href="https://github.com/nilotpaldhar/silverscreen/blob/main/LICENSE">
    <img src="https://img.shields.io/github/license/nilotpaldhar/silverscreen.svg?style=for-the-badge" alt="License">
  </a>
   <a href="https://linkedin.com/in/nilotpaldhar">
    <img src="https://img.shields.io/badge/-LinkedIn-black.svg?style=for-the-badge&logo=linkedin&colorB=555" alt="Linkedin">
  </a>
</p>

<!-- PROJECT LOGO -->
<br />
<div align="center">
  <a href="https://github.com/nilotpaldhar/silverscreen">
    <img src="https://www.dropbox.com/scl/fi/2qrefg64jhs65nmc777jw/site-logo-icon.png?rlkey=jbe8edjdu1cgz615yilrvwbev&raw=1" alt="Logo" width="100" height="100">
  </a>

<h2 align="center">Silver Screen</h2>

  <p align="center">
    Search Engine for Movies and Television Shows
    <br />
    <a href="https://github.com/nilotpaldhar/silverscreen#readme-top"><strong>Explore the docs »</strong></a>
    <br />
    <br />
    <a href="https://github.com/nilotpaldhar/silverscreen/issues">Report Bug</a>
    ·
    <a href="https://github.com/nilotpaldhar/silverscreen/issues">Request Feature</a>
  </p>
</div>

<!-- TABLE OF CONTENTS -->
<details>
  <summary>Table of Contents</summary>
  <ol>
   <li>
      <a href="#about-the-project">About the Project</a>
      <ul>
        <li><a href="#overview">Overview</a></li>
        <li><a href="#built-with">Built With</a></li>
      </ul>
    </li>
    <li>
      <a href="#getting-started">Getting Started</a>
      <ul>
        <li><a href="#prerequisites">Prerequisites</a></li>
        <li><a href="#setup">Setup</a></li>
      </ul>
    </li>
    <li>
      <a href="#deploy">Deploy</a>
      <ul>
        <li><a href="#vercel">Vercel</a></li>
        <li><a href="#netlify--firebase-etc">Netlify / Firebase etc.</a></li>
      </ul>
    </li>
    <li><a href="#support">Support</a></li>
    <li><a href="#licence">Licence</a></li>
    <li><a href="#acknowledgments">Acknowledgments</a></li>
  </ol>
</details>

<!-- ABOUT THE PROJECT -->

## About the Project

### Overview

A movie-search engine that lets users browse a wide variety of films and television shows and helps get information regarding them. It makes use of TMDB API for all films' related metadata.

> **Fully Responsive**

<p align="center">
  <img src = "https://www.dropbox.com/scl/fi/ekcoueh0mnt6t92kxpy1s/mobile.png?rlkey=3p95m4ldvd2rqbzgqlum9zqrg&raw=1">
</p>

<p align="right">(<a href="#readme-top">back to top</a>)</p>

### Built With

- [![Next][next.js]][next-url]
- [![React][react.js]][react-url]
- [![Tailwind CSS][tailwind-css]][tailwind-css-url]
- [![Headless UI][headlessui]][headlessui-url]
- [![The Movie Database][tmdb]][tmdb-url]

<p align="right">(<a href="#readme-top">back to top</a>)</p>

<!-- GETTING STARTED -->

## Getting Started

### Prerequisites

- IDE or code editor of your choice
- Node (v16.13.0 or higher)
- Yarn (recommended) or NPM

<p align="right">(<a href="#readme-top">back to top</a>)</p>

### Setup

Here is a run through of how to set up the application:

- **Step 1** : Clone this repository using **`git clone https://github.com/nilotpaldhar/silverscreen.git`** or downloading a ZIP file of the code.
- **Step 2** : The repository, if downloaded as a .zip file will need to be extracted to your preferred location and opened.
- **Step 3** : Go to the project root directory and install the dependencies using: **`yarn install`** or **`npm install`**
- **Step 4** : Add Envirnoment Variables to your project:
  - Create a new copy of **`.env.sample`** file in your root directory and rename it to **`.env.local`**
  - Go to the [the movie database (TMDB) API](https://www.themoviedb.org/) WEBSITE, sign up for a free account and generate an API key.
  - On **`.env.local`** file add your API key like **`TMDB_ACCESS_TOKEN='<your-api-key>'`**
- **Step 5** : On your terminal run **`yarn dev`** or **`npm run dev`** command to open a local development server on **`localhost:3000`**

<p align="right">(<a href="#readme-top">back to top</a>)</p>

<!-- GETTING STARTED -->

## Deploy

### **Vercel**

The easiest way to deploy the application is to use the [Vercel Platform](https://vercel.com) from the creators of Next.js. Check out the [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.

### **Netlify / Firebase etc.**

As the application uses **`next/image`** for image optimization, additional configurations have to be made to deploy on other popular static hosting websites like [Netlify](https://www.netlify.com/). Alternatively, replace the **`next/image`** component with a standard **`<img>`** tag. See [`next/image` documentation](https://nextjs.org/docs/basic-features/image-optimization) for more details.

The API routes used in the autocomplete search component cannot be used in a static site export. You will need to use a form API endpoint provider and substitute the route in the search component accordingly. Other hosting platforms such as Netlify also offer alternative solutions - please refer to their docs for more information.

<p align="right">(<a href="#readme-top">back to top</a>)</p>

<!-- SUPPORT -->

## Support

Like 💖 this project? Support this effort by giving a star on GitHub, sharing it in your own blog, and giving a shoutout on Twitter

<p align="right">(<a href="#readme-top">back to top</a>)</p>

<!-- LICENCE -->

## Licence

You are welcome to use this application however you wish under the [MIT](https://github.com/nilotpaldhar/silverscreen/blob/main/LICENSE) license.

<p align="right">(<a href="#readme-top">back to top</a>)</p>

<!-- ACKNOWLEDGMENTS -->

## Acknowledgments

- [The Movie Database](https://www.themoviedb.org)
- [Vercel](https://vercel.com)
- [Figma](https://www.figma.com/)
- [React Icons](https://react-icons.github.io/react-icons/search)
- [Choose an Open Source License](https://choosealicense.com)
- [Img Shields](https://shields.io)
- [Best README Template](https://github.com/othneildrew/Best-README-Template)

<p align="right">(<a href="#readme-top">back to top</a>)</p>

<!-- MARKDOWN LINKS & IMAGES -->
<!-- https://www.markdownguide.org/basic-syntax/#reference-style-links -->

[next.js]: https://img.shields.io/badge/next.js-000000?style=for-the-badge&logo=nextdotjs&logoColor=white
[next-url]: https://nextjs.org/
[react.js]: https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB
[react-url]: https://reactjs.org/
[tailwind-css]: https://img.shields.io/badge/Tailwind_CSS-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white
[tailwind-css-url]: https://tailwindcss.com
[headlessui]: https://img.shields.io/badge/Headless_UI-66E3FF?style=for-the-badge&logo=headlessui&logoColor=white
[headlessui-url]: https://headlessui.com
[tmdb]: https://img.shields.io/badge/TMDB_API-01B4E4?style=for-the-badge&logo=The-Movie-Database&logoColor=white
[tmdb-url]: https://www.themoviedb.org
