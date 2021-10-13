import React, { useState } from "react";
import { Card, Button, InputGroup, FormControl } from "react-bootstrap";
import { BiSquare, BiCheckSquare, BiTrash } from "react-icons/bi";

class Headers extends React.Component {
  render() {
    const selected = this.props.selectedTab;
    const headers = this.props.tabs.map((tab, idx) => {
      const header = tab.title;
      const status = idx === selected ? "active" : "";

      return (
        <li key={idx} id={status} onClick={() => this.props.toggleTab(idx)}>
          {header}
        </li>
      );
    });
    return <ul className="tab-header">{headers}</ul>;
  }
}

const TaskForm = (props) => {
  const handleClick = () => {
    let input = document.getElementById("input").value;
    if (!input) {
      alert("Please enter text");
      return;
    }
    let task = { task: input, completed: false };
    props.addTask(task);
  };

  return (
    <div className="task-form">
      <InputGroup className="mb-3">
        <FormControl
          placeholder="Create a new task"
          aria-label="Create a new task"
          aria-describedby="basic-addon2"
          className="input"
          id="input"
        />
        <Button
          variant="outline-secondary"
          id="button-addon2"
          onClick={() => {
            handleClick();
          }}
        >
          Add
        </Button>
      </InputGroup>

      {/* <input
        type="textarea"
        placeholder="Create a new task"
        className="input"
        id="input"
      />

      <Button size="small" id="button" variant="outline-secondary" onClick={() => handleClick()}>
        Add Task
      </Button> */}
    </div>
  );
};

class TaskItem extends React.Component {
  // use constructor to set task to state then use setState to rerender component
  constructor(props) {
    super(props);

    this.state = { clicked: !this.props.task.completed };
  }

  getCheckIcon = (e) => {
    return e ? <BiSquare /> : <BiCheckSquare />;
  };

  render() {
    let { task, updateTask, toggleCompleted } = this.props;
    let { clicked } = this.state;
    return (
      <li className="task-item">
        <div className="task">
          <div
            className="task-check"
            onClick={() => {
              console.log("CLICK!");
              this.setState({ clicked: !clicked }),
                updateTask(task, clicked, "update");
            }}
          >
            {this.getCheckIcon(clicked)}
          </div>
          {console.log("task", task.task)}
          <div>{task.task}</div>
        </div>
        <BiTrash
          id="trash"
          onClick={() => {
            updateTask(task, clicked, "delete");
          }}
        />
      </li>
    );
  }
}

const TaskList = (props) => {
  let tasks = props.tasks;

  return (
    <ul className="task-list">
      {tasks.map((task, i) => (
        <TaskItem
          key={i}
          className="task"
          task={task}
          updateTask={props.updateTask}
        />
      ))}
    </ul>
  );
};

class Tasks extends React.Component {
  constructor(props) {
    super(props);
    const tabs = localStorage.tabs
      ? JSON.parse(localStorage.tabs)
      : this.props.tabs;
    this.state = { selectedTab: 0, tabs: tabs };
    this.toggleTab = this.toggleTab.bind(this);
    this.addTask = this.addTask.bind(this);
    this.updateTask = this.updateTask.bind(this);
  }

  toggleTab(idx) {
    this.setState({ selectedTab: idx });
  }

  addTask(task) {
    const tabs = this.state.tabs;
    tabs[this.state.selectedTab].content.push(task);
    this.setState({ tabs: tabs });
    localStorage.setItem("tabs", JSON.stringify(this.state.tabs));
    document.querySelector(".input").value = "";
  }

  updateTask(task, completed, action) {
    console.log("TRASH CLICKED", action);
    const tabs = this.state.tabs;
    const tab = tabs[this.state.selectedTab];
    const tasks = tab.content;

    for (let i = 0; i < tasks.length; i++) {
      let item = tasks[i];
      if (item.task === task.task) {
        console.log;
        if (action === "update") {
          tasks[i] = { task: task.task, completed: !completed };
          break;
        }
        if (action === "delete") {
          if (confirm("Permanently delete this task?")) {
            tasks.splice(i, 1);
          }
        }
      } else {
        console.log("ITEM NOT FOUND");
      }
    }

    this.setState({ tabs: tabs });
    localStorage.setItem("tabs", JSON.stringify(this.state.tabs));
  }

  render() {
    const tab = this.state.tabs[this.state.selectedTab];
    return (
      <Card
        style={{ height: "25rem" }}
        className="tasks"
      >
        <div className="tabs">
          <Headers
            selectedTab={this.state.selectedTab}
            toggleTab={this.toggleTab}
            tabs={this.props.tabs}
          />
          <div className="content-container">
            <div className="tab-content">
              <TaskList
                className="task-list"
                tasks={tab.content}
                updateTask={this.updateTask}
              />
              <TaskForm className="task-form" addTask={this.addTask} />
            </div>
          </div>
        </div>
      </Card>
    );
  }
}

export default Tasks;
