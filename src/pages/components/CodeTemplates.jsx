import React from 'react';
import { Code, Layout, Timer } from 'lucide-react';

export const codeTemplates = {
    counter: {
        name: 'Counter',
        icon: Timer,
        code: `function App() {
  const [count, setCount] = React.useState(0);

  return (
    <div className="max-w-md mx-auto p-6 bg-white rounded-lg shadow-lg">
      <h1 className="text-3xl font-bold text-gray-800 mb-4">
        Counter Example
      </h1>
      <p className="text-xl mb-4 text-gray-600">Count: {count}</p>
      <div className="space-x-2">
        <button
          onClick={() => setCount(count + 1)}
          className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition"
        >
          Increment
        </button>
        <button
          onClick={() => setCount(count - 1)}
          className="px-4 py-2 bg-gray-500 text-white rounded hover:bg-gray-600 transition"
        >
          Decrement
        </button>
      </div>
    </div>
  );
}`
    },
    todoList: {
        name: 'Todo List',
        icon: Layout,
        code: `function App() {
  const [todos, setTodos] = React.useState([]);
  const [input, setInput] = React.useState('');

  const addTodo = (e) => {
    e.preventDefault();
    if (!input.trim()) return;
    setTodos([...todos, { id: Date.now(), text: input, completed: false }]);
    setInput('');
  };

  const toggleTodo = (id) => {
    setTodos(todos.map(todo =>
      todo.id === id ? { ...todo, completed: !todo.completed } : todo
    ));
  };

  return (
    <div className="max-w-md mx-auto p-6 bg-white rounded-lg shadow-lg">
      <h1 className="text-3xl font-bold text-gray-800 mb-4">Todo List</h1>
      
      <form onSubmit={addTodo} className="mb-4 flex gap-2">
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          className="flex-1 px-4 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
          placeholder="Add a new todo..."
        />
        <button
          type="submit"
          className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition"
        >
          Add
        </button>
      </form>

      <ul className="space-y-2">
        {todos.map(todo => (
          <li
            key={todo.id}
            onClick={() => toggleTodo(todo.id)}
            className="flex items-center p-3 bg-gray-50 rounded cursor-pointer hover:bg-gray-100"
          >
            <input
              type="checkbox"
              checked={todo.completed}
              className="mr-3"
              onChange={() => {}}
            />
            <span className={\`\${todo.completed ? 'line-through text-gray-500' : 'text-gray-800'}\`}>
              {todo.text}
            </span>
          </li>
        ))}
      </ul>
    </div>
  );
}`
    },
    apiExample: {
        name: 'API Example',
        icon: Code,
        code: `function App() {
  const [posts, setPosts] = React.useState([]);
  const [loading, setLoading] = React.useState(true);
  const [error, setError] = React.useState(null);

  React.useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/posts?_limit=5')
      .then(response => response.json())
      .then(data => {
        setPosts(data);
        setLoading(false);
      })
      .catch(err => {
        setError(err.message);
        setLoading(false);
      });
  }, []);

  if (loading) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <div className="animate-spin rounded-full h-12 w-12 border-4 border-blue-500 border-t-transparent"></div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="max-w-md mx-auto p-6 bg-red-50 rounded-lg">
        <h2 className="text-red-600 font-bold">Error:</h2>
        <p className="text-red-500">{error}</p>
      </div>
    );
  }

  return (
    <div className="max-w-2xl mx-auto p-6">
      <h1 className="text-3xl font-bold text-gray-800 mb-6">Blog Posts</h1>
      <div className="space-y-4">
        {posts.map(post => (
          <article key={post.id} className="p-6 bg-white rounded-lg shadow-lg">
            <h2 className="text-xl font-semibold text-gray-800 mb-2">
              {post.title}
            </h2>
            <p className="text-gray-600">{post.body}</p>
          </article>
        ))}
      </div>
    </div>
  );
}`
    }
};