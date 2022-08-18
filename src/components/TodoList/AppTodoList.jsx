import { Component } from "react";
import shortid from 'shortid';
import TodoList from "./TodoList";
import initialTodos from "../../data/todos.json";
import TodoEditor from "./TodoEditor";
import Filter from './Filter'

class AppTodoList extends Component {
  state = {
    todos: initialTodos,
    filter: '',
  };

  deleteTodo = todoId => {
    this.setState(prevState => ({
      todos: prevState.todos.filter(todo => todo.id !== todoId),
    }));
  };

  toggleCompleted = todoId => {
    this.setState(({ todos }) => ({
        todos: todos.map(todo =>
            todo.id === todoId ? {...todo, completed: !todo.completed } : todo,
      ),
    }));
  };

  addTodo = text => {
      const todo = {
        id: shortid.generate(),
        text,
        completed:false,
      }

      this.setState(({todos}) => ({
          todos: [todo,...todos]
      }))

  }

  changeFilter = e => {
      this.setState({filter: e.currentTarget.value})
  }

  getVisibleTodos = () => {
    const {filter,todos}=this.state;
    const normilizeFilter = filter.toLowerCase();
     return todos.filter(todo => todo.text.toLowerCase().includes(normilizeFilter))
  }

//   calculateTodo = () => {
//     const {todos}=this.state;
//     return todos.reduce(
//         (acc, todo) => (todo.completed ? acc + 1 : acc),
//         0,
//       );
//   }

  calculateCompletedTodos = () => {
    const { todos } = this.state;

    return todos.reduce(
      (total, todo) => (todo.completed ? total + 1 : total),
      0,
    );
  };

  render() {
    const { todos, filter } = this.state;
    const completedTodos = this.calculateCompletedTodos();    
    const visibleTodos = this.getVisibleTodos();
    const totalTodoLength = todos.length;

    return (
      <>
        <div>
          <p>Общее количество: {totalTodoLength}</p>
          <p>Количество выполненных: {completedTodos}</p>
        </div>
        <TodoList
          todos={visibleTodos}
          onDeleteTodo={this.deleteTodo}
          onToggleCompleted={this.toggleCompleted}
        ></TodoList>

        <TodoEditor onSubmit={this.addTodo}>
        </TodoEditor>

        <Filter value={filter} onChange={this.changeFilter}>
        </Filter>

      
      </>
    );
  }
}

export default AppTodoList;
