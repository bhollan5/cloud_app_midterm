# cloud_app_midterm
Midterm project for Cloud Applications at KSU -- makes an incredibly simple CRUD database for planets based off of my codepen i made forever ago, which you can see here -> https://codepen.io/bhollan5/pen/xLYmbx - or on my [personal website!](http://benh.io/planetmaker)

## Getting it running

First, a disclaimer: This was made for a class project, so it's not beautiful code designed to be upkept! I might go in and fix it later. 

Here's how you can get the project running, if you want: 

1. Clone the repo: `git clone https://github.com/bhollan5/cloud_app_midterm.git`
2. CD into the directory: `cd cloud_app_midterm`
3. Run `pip install bottle` (if you don't have `pip`, you'll need to get it!)
4. Make sure you have Python installed
5. Make an account on (firebase)[firebase.google.com], make a new project, copy the config JSON for a web version of your project, and replace my config JSON in `static/planets.js` (Sorry, i'm not giving you access to my DB).
6. Run the project in your terminal with `python index.py`
7. View in browser at localhost:8080
8. Thanks! :) 
