import React from "react";
import { BiSquareRounded } from "react-icons/bi";
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

const TaskList = (props) => {
  let tasks = props.tasks;

  return (
    <ul className="task-list">
      {tasks.map((task, i) => (
        <li key={i} className="task">
          <BiSquareRounded className="task-check" />
          <p>{task}</p>
        </li>
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
