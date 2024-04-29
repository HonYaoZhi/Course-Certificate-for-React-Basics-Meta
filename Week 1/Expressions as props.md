# Week 1 React Components
Component Use and Styling

## Expressions as props

You can pass almost any kind of expression as a prop.

What is happening here is several props are being passed to the `Example` component, and rendering each of these props’ values to the screen.

```jsx
const bool = false;
const str1 = "just";

function Example(props) {
    return (
        <div>
            <h2>
                The value of the toggleBoolean prop is:{props.toggleBoolean.toString()}
            </h2>
            <p>The value of the math prop is: <em>{props.math}</em></p>
            <p>The value of the str prop is: <em>{props.str}</em></p>
        </div>
    );
};

export default function App() {
    return (
        <div className="App">
            <Example
                toggleBoolean={!bool}
                math={(10 + 20) / 3}
                str={str1 + ' another ' + 'string'}
            />
        </div>
    );
};
```

When the `App` function is executed (rendered), the `Example(props)` function is indeed called automatically. This happens because of how React processes JSX elements:

### 1. JSX Transformation:
* When you write JSX code, it's transformed into regular JavaScript function calls during the build process. The `<Example>` tag becomes a function call to `React.createElement(Example, props).`

### 2. App Function Rendering:
* When the `App` function is executed, React needs to render its JSX content (the div with the `<Example>` component) on the screen.

### 3. Automatic Function Call:
* To render the `<Example>` component, React encounters the `React.createElement(Example, props)` function call (transformed from JSX).
React then automatically calls the `Example` function, passing the necessary props object.

#### So, in essence:
* You don't explicitly call `Example(props)` within `App()`.
* React takes care of calling it during the rendering process based on the JSX structure.
* The `<Example>` tag acts as a trigger for React to call the Example function with the appropriate props.
