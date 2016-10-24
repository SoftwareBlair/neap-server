# Neap Server

> This is my first server for learning to build a NEAP app.

## Development

1. Set up Database
 - Create and Apply migrations
1. Set up knex.js queries
1. Set up Environment Variables
1. Set up Route Configurations
1. Create a file in routes folder for that resource
1. Add route handlers for that resource
1. Add a controler (optional)

## Deployment

1. Setup Heroku
  - `heroku create`
1. Push to Heroku
  - `git push heroku master`
1. Setup db
  - `heroku addons:create heroku-postgresql:hobby-dev`
1. Run migrations
  - `heroku run knex migrate:latest --env production`
1. Run seeds
  - `heroku run knex seed:run --env production`
1. Heroku restart
