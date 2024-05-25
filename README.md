# Cal-C-2.0
This project is a modern, responsive calculator app built with React. The app includes a standard calculator, a theme switcher, and a feature switcher with a converter. It supports keyboard inputs and includes advanced functionalities such as handling unary operations, maintaining a calculation history, and displaying formatted numbers along with arrow key based swapping.

## Features

- **Basic Calculations**: Perform addition, subtraction, multiplication, division, and percentage calculations.
- **Keyboard Support**: Use your keyboard for input, including support for backspace and enter keys.
- **Theme Switcher**: Toggle between light and dark themes.
- **Calculation History**: Access previous calculations easily.
- **Responsive Design**: Adapts to different screen sizes for a seamless experience on any device.

## Installation

To get started with the calculator app, follow these steps:

1. **Clone the repository:**
    ```sh
    git clone <repository-url>
    cd calculator-app
    ```

2. **Install dependencies:**
    ```sh
    npm install
    ```

3. **Start the development server:**
    ```sh
    npm run dev
    ```

4. **Build for production:**
    ```sh
    npm run build
    ```

5. **Preview the production build:**
    ```sh
    npm run preview
    ```

## Usage

1. **Calculator**: Use the calculator interface to perform calculations. The buttons support both mouse and keyboard inputs.
2. **Converter**: Use the converter interface to perform conversions between various measurement units. The buttons support both mouse and keyboard inputs.
3. **Theme Switcher**: Click the theme switcher button to toggle between light and dark modes.
4. **Feature Switcher**: Use the feature switcher to toggle between the calculator and a converter.

## Code Overview

### Main Components

- **App.js**: The main component that includes the layout, theme switcher, and feature switcher.
- **Calculator.js**: The calculator component that handles all calculator functionalities.
- **Converter.js**: The converter component that handles all converter functionalities.

### Button Configuration

The calculator buttons are configured in the `Buttons` object within `Calculator.js` and `Converter.js`. Each button has properties such as `value`, `label`, `className`, and `type`.

### State Management

- **useState**: Used to manage the state of selected feature index, input values, calculation results, and history.
- **useRef**: Used to reference buttons for handling keyboard input.

### Styling

Styled using Tailwind CSS classes within JSX for responsive and adaptive UI.

### Dependencies

- **react**: Library for building user interfaces.
- **react-dom**: Serves as the entry point to the DOM.
- **react-icons**: Provides a collection of popular icons.
- **auto-text-size**: Automatically adjusts text size based on container size.
- **tailwindcss**: Utility-first CSS framework for styling.

## Contributing

Feel free to fork this repository and submit pull requests. For major changes, please open an issue first to discuss what you would like to change.

## Contact

If you have any questions, feel free to reach out via email or create an issue in the repository.

Enjoy using the Calculator App!