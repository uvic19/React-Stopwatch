# React Stopwatch

A simple React-based stopwatch application that tracks time in seconds. This application features start, stop, and reset functionality.

## Features

- **Start**: Begins the stopwatch, incrementing time every second.
- **Stop**: Pauses the stopwatch.
- **Reset**: Resets the time to 0 seconds and stops the timer if it’s running.

## Technologies Used

- React
- CSS for styling

## Getting Started

### Prerequisites

Make sure you have the following installed on your machine:

- [Node.js](https://nodejs.org/) (version 12 or higher)
- [npm](https://www.npmjs.com/get-npm) (comes with Node.js)

### Installation

1. Clone the repository:

   ```bash
   git clone <repository-url>
   cd react-stopwatch
   ```

2. Install the dependencies:

   ```bash
   npm install
   ```

3. Start the development server:

   ```bash
   npm run dev
   ```

4. Open your web browser and go to [http://localhost:5173/](http://localhost:5173/)

## Usage

- Click the **Start** button to start the stopwatch.
- Click the **Stop** button to pause the stopwatch.
- Click the **Reset** button to reset the time to 0.

## Code Overview

The main functionality is implemented in the `App` component, which uses the following:

- **useRef**: Stores a reference to the timer interval.
- **useState**: Manages the stopwatch's time state.
  
### Key Functions

- `startTimer`: Starts the stopwatch, incrementing the time by 1 every second.
- `stopTimer`: Stops the stopwatch by clearing the interval.
- `resetTimer`: Stops the stopwatch and resets the time to 0.

## Folder Structure

```
/react-stopwatch
├── /src
│   ├── App.css
│   └── App.js
└── package.json
```

## Contributing

Contributions are welcome! Feel free to submit a pull request or open an issue.

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.

## Acknowledgements

- [React](https://reactjs.org/)
