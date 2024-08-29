To-Do application


 Importing Dependencies:

 useState: A React hook used to manage local component state.
 useEffect: A React hook that allows you to perform side effects in function components, like fetching data or directly interacting with the DOM.



 Component Definition:

 todos: An array that holds the list of to-do items.
 input: A string that holds the current input value for a new or edited to-do item.
 editIndex: Tracks the index of the to-do item being edited. If null, a new item is being added



  Loading and Saving Data:

  The first useEffect runs when the component mounts, loading the saved to-do items from localStorage (if any) and updating the todos state.
  The second useEffect runs whenever the todos array changes. It saves the current todos array to localStorage, ensuring persistence across page reloads.



  Adding and Updating To-Do Items:

  addTodo Function: Handles both adding new to-do items and updating existing ones.
  If editIndex is not null, the function updates the to-do item at the specified index.
  If editIndex is null, the function adds a new to-do item.
  After adding or updating, the input field is cleared, and editIndex is reset. 




  Editing a To-Do Item:

  editTodo Function: Sets the current input to the value of the to-do item being edited and sets the editIndex to the index of that item.


  Deleting a To-Do Item:

  deleteTodo Function: Filters out the to-do item at the specified index and updates the todos state.



  Rendering the Component:

  JSX Structure: The component returns JSX that renders the UI for the to-do list.
  An input field for adding/editing to-do items.
  A button that triggers the addTodo function to add or update items.
  A ul element that iterates over the todos array and displays each to-do item with an edit (✎) and delete (✖) icon.
  The icons trigger editTodo and deleteTodo respectively.
  CSS-in-JS: The styles are written using the style jsx syntax, which is scoped to this component.



  Fetching To-Do Items on the Server:

  getServerSideProps: This is a special Next.js function that fetches data on each request, enabling server-side rendering.
  It tries to retrieve the todos from localStorage .
  Props Passing: The fetched data (initialTodos) is passed as props to the Home component, which then renders the Todo component.