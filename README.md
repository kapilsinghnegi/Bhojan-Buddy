# Bhojan Buddy

Bhojan Buddy is a ReactJS application that fetches data from Swiggy Live API and displays the list of restaurants with their respective dishes and prices. The user can add the dishes to the cart and checkout the total amount.

## Table of Contents

- [Installation](#installation)
- [Usage](#usage)
- [Features](#features)
- [Tech Stack](#tech-stack)

## Installation

To install and run this project locally, follow these steps:

1. Clone the repository:
   ```sh
   git clone https://github.com/your-username/bhojan-buddy.git
   ```
2. Navigate to the project directory:
   ```sh
   cd bhojan-buddy
   ```
3. Install the dependencies:
   ```sh
   npm install
   ```

## Usage

To start the development server, run:

```sh
npm start
```

Open your browser and navigate to `http://localhost:5173/` to see the application in action.
Make sure you've enabled `CORS extension` installed in your browser while fetching Swiggy Live API

## Features

- Elegant Shimmer UI fro data loading
- Fetch restaurants based on current location (Currently supports Delhi only)
- Search for restaurants by name
- Filter restaurants by top ratings
- View detailed information and prices for various dishes at any restaurant
- Add or remove items from the cart
- Calculate and display the total amount for checkout

## Tech Stack

- Frontend Library: ReactJS
- Build Tool: Vite
- Styling: Tailwind CSS
- API: Swiggy Live API
- Routing: React Router
- State management: Redux Toolkit

### Drop a ⭐ if you liked it
