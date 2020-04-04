import React, { Component } from "react";
import Task from "./Task";

class Tasks extends Component {
  render() {
    return (
      <div>
        {this.props.tasks.map((e) => (
          <Task
            task={e}
            key={e.id}
            deleteTask={this.props.deleteTask}
            checkDone={this.props.checkDone}
          />
        ))}
      </div>
    );
  }
}

export default Tasks;
