import React from "react";

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
      <input type="text" placeholder="Add a task" className="input" id="input" />

      <button onClick={() => props.addTask(inputValue())}>Add</button>
    </div>
  );
};

const TaskList = (props) => {
  let tasks = props.tasks;

  if(!tasks.length) return "";

  return(
    <ul className="task-list">
      {tasks.map((task, i) => (
        <li key={i}
        className="task">
          {task}
        </li>
  ))}
    </ul>
  )
};
class Tasks extends React.Component {
  constructor(props) {
    super(props);
    this.state = { selectedTab: 0, tabs: this.props.tabs };
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
    document.querySelector(".input").value = "";
  }

  render() {
    const tab = this.props.tabs[this.state.selectedTab];

    return (
      <div className="tasks card large">
        <div className="tabs">
          <Headers
            selectedTab={this.state.selectedTab}
            toggleTab={this.toggleTab}
            tabs={this.props.tabs}
          ></Headers>
          <div className="tab-content">
            <TaskList tasks={tab.content} />
            <TaskForm addTask={this.addTask} />
          </div>
        </div>
      </div>
    );
  }
}

export default Tasks;
