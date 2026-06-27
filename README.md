# React Demo Project - Job Portal

## Topics Covered

### Date: 25-06-2026 (Thursday)

### 1. Creating a Reusable Component

- Why reusable components are needed
- Creating a `JobPost` component
- Reusing the same component for multiple job posts

---

### 2. Props

- Passing data from Parent to Child
- Receiving props in a component
- Displaying dynamic data

---

### 3. Props Destructuring

- Accessing props using object destructuring
- Cleaner syntax
- Default values in destructuring

---

### 4. Exporting Components

- Named Export
- Default Export
- Difference between both

---

### 5. Rendering Multiple Components

- `Array.map()`
- Importance of `key` prop

---

### 6. Reusable Button Component

- Creating a reusable Button
- Passing dynamic text
- Dynamic styles
- Dynamic events (`onClick`)
- Rest (`...rest`) operator
- Spread (`...rest`) operator

---

## Date: 26-06-2026 (Friday)

### 7. React Icons

- Installing `react-icons`
- Importing icons
- Using icons inside components

```bash
npm install react-icons
```

---

### 8. State Management (`useState`)

- Why state is required
- Converting static data into state
- Updating state

---

### 9. Event Handling

- Handling button clicks
- Passing callback functions as props
- Child component invoking parent function

---

### 10. Deleting a Job Post

- Using `filter()`
- Updating state without mutating the original array

---

### 11. Loading State

- Using `useEffect`
- Using `setTimeout`
- Simulating API loading
- Displaying a loading spinner

---

### 12. Conditional Rendering

Displaying different UI based on application state:

- Loading Jobs
- No Job Posts Available
- Job List

---

### 13. Improving User Experience (UX)

- Loading indicator
- Delete functionality
- Empty state message
- Scrollable job list

---

## Date: 27-06-2026 (Saturday)

### 14. API Integration

- Understanding APIs
- Consuming public APIs
- Fetching posts from server
- Rendering API response data

Example API:

```text
https://jsonplaceholder.typicode.com/posts?_limit=6
```

---

### 15. Fetch API

Topics Covered

- Making GET requests
- Understanding asynchronous operations
- `.then()`
- `.catch()`
- Converting response to JSON

Example:

```js
fetch(url)
  .then(response => response.json())
  .then(data => setPosts(data))
  .catch(error => console.log(error));
```

---

### 16. Axios

Installation

```bash
npm install axios
```

Topics Covered

- `axios.get()`
- `async/await`
- Automatic JSON parsing
- Cleaner syntax compared to Fetch API

Example:

```js
const response = await axios.get(url);

setPosts(response.data);
```

---

### 17. Error Handling

Topics Covered

- `try`
- `catch`
- Handling failed requests
- Updating loading state on error

Example

```js
try {

 const response = await axios.get(url);

 setPosts(response.data);

}
catch(error){

 console.log(error);

}
```

---

### 18. Understanding useEffect

What is a Side Effect?

A side effect is any operation performed outside the rendering process.

Examples:

- API Calls
- Timers
- Event Listeners
- Local Storage
- DOM Manipulation
- WebSocket Connections
- Subscriptions

---

### 19. useEffect Scenarios

#### Scenario 1 — No Dependency Array

Runs after every render.

```js
useEffect(() => {

 console.log("Effect Executed");

});
```

Use Cases

- Debugging
- Logging
- Rarely used in production

---

#### Scenario 2 — Empty Dependency Array

Runs only once.

```js
useEffect(() => {

 fetchPosts();

}, []);
```

Equivalent to:

```text
Component Mounted
```

Common Usage

- API Calls
- Initial Setup
- Authentication Check

---

#### Scenario 3 — Dependency Array

Runs whenever dependency changes.

```js
useEffect(() => {

 fetchPosts();

}, [search]);
```

Runs when:

- `search` changes

---

#### Scenario 4 — Multiple Dependencies

```js
useEffect(() => {

 fetchPosts();

}, [search, page]);
```

Runs when:

- `search` changes
- `page` changes

Does not run for unrelated state changes.

---

### 20. Infinite API Calls

Example

```js
useEffect(() => {

 fetchPosts();

});
```

Flow

```text
Render

↓

API Call

↓

setState()

↓

Re-render

↓

API Call

↓

setState()

↓

Infinite Loop
```

Lesson Learned

Always provide a dependency array when making API calls.

---

### 21. Cleanup Function

Purpose

Cleaning resources before component unmounts.

Example

```js
useEffect(() => {

 const timer = setTimeout(() => {

 }, 2000);

 return () => {

   clearTimeout(timer);

 };

}, []);
```

Common Cleanup Tasks

- `clearTimeout()`
- `clearInterval()`
- `removeEventListener()`

---

## Concepts Practiced

- JSX
- Functional Components
- Props
- Props Destructuring
- Named Export
- Default Export
- useState
- useEffect
- Array.map()
- Array.filter()
- Event Handling
- Callback Functions
- Conditional Rendering
- React Icons
- API Calls
- Fetch API
- Axios
- Async/Await
- Try/Catch
- Dependency Arrays
- Side Effects
- Cleanup Functions
- Rest Operator
- Spread Operator
- CSS Variables
- Flexbox
- Reusable Components

---

## Next Topic

# React Router

Topics Planned

- Why Routing is required
- Single Page Applications (SPA)
- BrowserRouter
- Routes
- Route
- Link
- NavLink
- Dynamic Routes
- Nested Routes
- Protected Routes
- Outlet
- Navigate
- Route Parameters
- 404 Page Handling
