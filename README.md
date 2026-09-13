# Dev-Stack

Dev-Stack is a React-based website where users can explore different development technologies and build their own development stack.

## Tech Used

- React
- JavaScript
- Vite
- CSS
- JSON
- React-Toastify

## Features

- Explore different development technologies
- Build your own development stack
- Add and remove technologies from your stack
- Responsive design for desktop, tablet, and mobile
- Toast notifications for stack actions
- Technology data loaded from JSON

---

# React Questions

## 1. What is JSX and why do we use it?

JSX is one kind of JavaScript syntax which look like html but it is not. And we use it in the react for building UI.

## 2. What is the difference between props and state?

The major different between props and State is that  
props is the information which has given by parent or we can say an information that has given by containing file.

and

State is one form of tracker that track the change of component and also modify the UI or the condition that been set by the function.

## 3. What is useState and where did you use it?

useState is the react hook which gives a way to modify the state.

I used it in Dev-Stack, for mobile menu, like when mobile menu will open or and when it wont.

## 4. What is useEffect and why was it needed for JSON?

useEffect is a React Hook that handles side effect and Fetching the JSON is the side effect. so, useEffect was needed for it.

## 5. Why do we need a unique key when using map() in React?

we need a unique `key` when using `map()` in React is because when we use map to generate multiple card or thing that time for tracking them we should label them as different so we can recall them.

## 6. What is conditional rendering? Give an example.

Conditional rendering is one kind of rendering which show different UI depend on condition. IN Dev-Stack i used it in stack, like when i had 0 stake that time UI was different and and when there is one that time is different UI.

## 7. How can a parent component pass data to a child, and how can a child send data back to the parent?

So, parent and child both use different way to pass data to eacher

parent to child: in this case, parents pass data though props

and

child to parent: parent gives some kinds of function to child like setStack which send request to parent that lets it to change.
