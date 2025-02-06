# Screenshot

![Todolist](./screenshot.png)

# Retrospective
While the goal was to have a clear separation of concerns between the HTML, JS, and CSS code — where the HTML defines the document
structure, JS defines the behaviour of the elements/app, and CSS defines the styling of the elements — it became inevitable to have
HTML and CSS embedded within the JS code for this app. For example, in order to add a todo item when the user submits a task, the JS
is the component that extracts the text from the submitted form, generates the document nodes dynamically using the JS APIs, and attaches
the nodes to the DOM. Another observation was that the JS code is tightly coupled to how the HTML document is structured. In other words,
if the document structure changes, the JS code would also have to change to reflect the changes in thed document structure; otherwise,
the app will break. Hence, the separation of concerns by splitting the code between HTML and JS proved to be a bad idea and terrible for
maintainability, at least for interactive apps like this todolist app (but imagine much larger app with a considerably larger codebase).
My experience so far has taught me, as a general principle in programming, that it's best to put things together if they need to be
changed together. This is where, I believe, React came into the scene to solve this sort of problems.

Libraries like React aims to deliberately couple HTML, JS, and CSS by defining them together as a unit called a component. Each component
should have a clear purpose/boundary and do one thing well. Anything can be a component, such as buttons, navigation bars, search bars,
todo list items, tags, etc. By defining these components, it improves reusability, becomes easier to reason about, test, and maintain your
app. While it solves a major problem, it also brings along other challenges like state management, querying data, reconcilliation with the
DOM, hydration, server-side rendering, performance issues, etc., but they will not be discussed at this stage as they are not the focus
of this section.

While this approach of deliberately coupling HTML, JS, and CSS together and thinking about apps in terms of composing components together
works very well for interactive, dynamic client-side apps, they are an overkill for simple websites with minimal interactivity whose main
purpose is to display information to visitors/users. These websites generally need to be server-side rendered for SEO, and does not require
you to dynamically add or remove elements based on user interactions. They typically include some JS to trigger animations, transitions, and
some interactivity based on scroll, and other fancy techniques web designers implement, but they don't usually require embedding HTML
in the JS code. While there may be some CSS mixed in JS, since the general size of JS is relatively small, it does not become a major
challenge. Not only using libraries like React to implement such website will constrain you to environments that enable you to render React
on the server side, rendering React can degrade performance of your website compared to simply using the "traditional" way of using HTML,
JS, and CSS. Server-side rendering React is an additional process that your server will have to perform before sending the resulting HTML
down to the user whenever a user visits your website. Not only that, your website will not be interactive until the hydration process is
complete. I personally use plain-ol' HTML, JS, and CSS (with server-side templates if necessary) for simple websites and libraries like
React and Solid for interactive apps for this exact reason. You can also take the hybrid approach where you use React for small parts of
your app without using it for the entire website.

# Lesson Outcomes
- Tight coupling of HTML, JS, and CSS in interactive, dynamic client-side apps lead to solutions like React/Solid/Vue/Svelte/Angular/etc.
- Easier to reason about, maintain, and scale interactive apps with modern libraries/frameworks.

# Installing and running

This is a typical app bootstrapped with Vite:

```sh
git clone github.com/hwkd/js-playground
cd vanilla/todo
npm install
npm run dev
```
