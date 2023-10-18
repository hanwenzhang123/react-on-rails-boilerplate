# Boilerplate code
Solving M1 chip MacBook with a hard time running rails new to create a new project using Ruby version 3.2.2.

## Download Ruby view Homebrew
```sh
brew install ruby@3.2
brew link --overwrite ruby@3.2 --force
echo 'export PATH="/opt/homebrew/opt/ruby@3.1/bin:$PATH"' >> ~/.zshrc
source ~/.zshrc
```

## Start the App
### Back End
```sh
# Install Dependencies
bundle install

# Databse Related Setup
bundle exec rails db:create
bundle exec rails db:migrate
bundle exec rails db:seed

# Start the Backend Server
bundle exec rails server -p 3000
```

### Front End
```sh
# Install Dependencies
yarn install

# Building Frontend
yarn build

# Start the Client
yarn start
```