# ConvertIQ

## Description

ConvertIQ helps you convert more leads by using intelligent lead scoring to identify your most promising prospects and guide your sales efforts accordingly. `https://github.com/kiprotichdominic/ConvertIQ`

## Author

- [**Kiprotich Dominic**](https://github.com/kiprotichdominic)

## Admin User
 - Email: k@mail.com
 - Password: 1

## Features

As a user of the web application you will be able to:

1. Sign up and log in (default Role Is User)
2. Add a Lead
3. View Added leads

## Specifications

| Behavior                                                                                                                 | Input                          | Output                               |
| ------------------------------------------------------------------------------------------------------------------------ | ------------------------------ | ------------------------------------ | --- | ------------------- | ----------------------------- | ----------------------------- |
| User visits the app and gets directed to the home page                                                                   | User logs in                   | Directed to the dashboard            |
| If user has no account, they click on `sign up` and are assigned a USER role                                             | User signs up                  | User is redirected to the login page |     | ------------------- | ----------------------------- | ----------------------------- |
| User with `USER ROLE` can only create and view leads                                                                     | They can create and view leads | User create and view                 |
| User with `ADMIN ROLE` can create and view leads and also have capacity to convert but currently not working as expected | Admin capability               | Admin User                           |

## Getting started

### Prerequisites

- python3.6
- virtual environment
- pipenv

### Cloning

- In your terminal:

        $ git clone https://github.com/kiprotichdominic/ConvertIQ
        $ cd ConvertIQ

## Running the Application

- Install virtual environment using `$ python3.6 -m venv --without-pip virtual`
- Activate virtual environment using `$ source virtual/bin/activate`
- Download pip in our environment using `$ curl https://bootstrap.pypa.io/get-pip.py | python`
- Install all the dependencies from the requirements.txt file by running `python3.6 pip install -r requirements.txt`
- Create a database and edit the database configurations in `settings.py` to your own credentials.
- Make migrations

        $ python manage.py makemigrations watch
        $ python3.6 manage.py migrate

- To run the application, in your terminal:

        $ python3.6 manage.py runserver

## Testing the Application

- To run the tests for the class file:

        $ python3.6 manage.py test watch

## Technologies Used

- Python3.6
- Django
- HTML
- Tailwind
- ReactJS(Vite)

This application is developed using [Python3.6](https://www.python.org/doc/), [Django](https://www.djangoproject.com/), [HTML](https://getbootstrap.com/) and [Tailwind](https://tailwindcss.com/)

## Support and Team

Kiprotich Dominic Korir

[Email Me!](kiprotichdominickorir@gmail.com)

### License

- LICENSED UNDER [![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](license/MIT)
