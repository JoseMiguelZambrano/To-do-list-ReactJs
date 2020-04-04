import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";

import tasks from "./data/tasks";
import Tasks from "./components/Tasks";
import TaskForm from "./components/TaskForm";

class App extends Component {
  state = {
    tasks: tasks,
  };

  addTask = (title, description) => {
    const newTask = {
      title: title,
      description: description,
      id: this.state.tasks.length,
    };
    this.setState({
      tasks: [...this.state.tasks, newTask],
    });
  };

  deleteTask = (id) => {
    const newTask = this.state.tasks.filter((task) => task.id !== id);
    this.setState({ tasks: newTask });
  };

  checkDone = (id) => {
    const newTask = this.state.tasks.map((task) => {
      if (id === task.id) {
        task.done = !task.done;
      }
      return task;
    });
    this.setState({ tasks: newTask });
  };

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1>Hello world</h1>
          <TaskForm addTask={this.addTask} />
          <Tasks
            tasks={this.state.tasks}
            deleteTask={this.deleteTask}
            checkDone={this.checkDone}
          />
        </header>
      </div>
    );
  }
}

export default App;
