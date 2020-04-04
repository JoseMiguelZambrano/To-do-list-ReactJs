import React, { Component } from "react";

class Task extends Component {
  styleCompleted() {
    return {
      fontSize: "20px",
      color: this.props.task.done ? "gray" : "black",
      textDecoration: this.props.task.done ? "line-through" : "none",
    };
  }

  render() {
    const { task } = this.props;

    return (
      <React.Fragment>
        <p style={this.styleCompleted()}>
          {task.id}-{task.title}-{task.description}-{task.done}
          <input
            type="checkbox"
            onChange={this.props.checkDone.bind(this, task.id)}
          ></input>
          <button
            style={btn_delete}
            onClick={this.props.deleteTask.bind(this, task.id)}
          >
            x
          </button>
        </p>
      </React.Fragment>
    );
  }
}

const btn_delete = {
  fontSize: "18px",
  background: "#ea2027",
  color: "#fff",
  border: "none",
  padding: "10px 15px",
  borderRadius: "50%",
  cursor: "pointer",
};

export default Task;
