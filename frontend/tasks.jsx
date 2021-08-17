import React, { useState } from "react";
import { BiSquare, BiCheckSquare, BiTrash } from "react-icons/bi";
///use local storage to save values on reload

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
  const inputValue = () => {
    return document.getElementById("input").value;
  };

  return (
    <div className="task-form">
      <input
        type="text"
        placeholder="Add a task"
        className="input"
        id="input"
      />

      <button onClick={() => props.addTask(inputValue())}>Add</button>
    </div>
  );
};

const TaskItem = (props) => {
  let task = props.task;
  const [clicked, handleClick] = useState(true);

  const checkIcon = (e) => {
    return e ? <BiSquare /> : <BiCheckSquare />;
  };
  return (
    <li className="task-item">
      <div className="task">
        <div className="task-check" onClick={() => handleClick(!clicked)}>
          {checkIcon(clicked)}
        </div>
        <p id={`completed-${!clicked}`}>{task}</p>
      </div>
      <BiTrash id="trash"/>
    </li>
  );
};

const TaskList = (props) => {
  let tasks = props.tasks;

  return (
    <ul className="task-list">
      {tasks.map((task, i) => (
        <TaskItem key={i} className="task" task={task} />
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
    console.log(tabs);
    this.state = { selectedTab: 0, tabs: tabs };
    this.toggleTab = this.toggleTab.bind(this);
    this.addTask = this.addTask.bind(this);
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
  
  render() {
    const tab = this.state.tabs[this.state.selectedTab];

    return (
      <div className="tasks card large">
        <div className="tabs">
          <Headers
            selectedTab={this.state.selectedTab}
            toggleTab={this.toggleTab}
            tabs={this.props.tabs}
          />
          <div className="tab-content">
            <TaskList className="task-list" tasks={tab.content} />
            <TaskForm className="task-form" addTask={this.addTask} />
          </div>
        </div>
      </div>
    );
  }
}

export default Tasks;
