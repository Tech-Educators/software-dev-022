# Reducer

## Use case:

- We want to implement different themes in our app (light, dark, colourblind-friendly, dyslexia-friendly...)
- We want themes to be available in the whole app, and also be added to future components

## Tool:

- Reducer to condense our state values into one reducer function

## Step 1

- Set up your reducer function with conditional logic (switch ... case)

## Step 2

- Refactor your useState hook into a useReducer hook to include the reducer function in it
- Add state and dispatch to the value prop in the context provider

## Step 3

- Update state in our components to use state and dispatch from reducer

## Step 4

- Use your context wherever it is needed
