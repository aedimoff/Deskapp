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

  const handleClick = () => {
    let input = document.getElementById("input").value;
    let task = {task: input, completed: false}
    props.addTask(task)
  }

  return (
    <div className="task-form">
      <input
        type="text"
        placeholder="Add a task"
        className="input"
        id="input"
      />

      <button onClick={() => handleClick()}>Add</button>
    </div>
  );
};

const TaskItem = (props) => {
  let task = props.task.task;
  let completed = props.task.completed;

  const [clicked, toggleCompleted] = useState(!completed);

  const checkIcon = (e) => {
    return e ? <BiSquare /> : <BiCheckSquare />;
  };
  return (
    <li className="task-item">
      <div className="task">
        <div className="task-check" onClick={() => {toggleCompleted(!clicked), props.updateTask(task, completed)}}>
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

  updateTask(task, completed) {
    const tabs = this.state.tabs;
    const tab = tabs[this.state.selectedTab];
    const tasks = tab.content

    for(let i = 0; i < tasks.length; i++) {
      let item = tasks[i]
      if(item.task === task) {
        tasks[i] = {task: task, completed: !completed}
        break;
      }
    }

    this.setState({ tabs: tabs})
    localStorage.setItem("tabs", JSON.stringify(this.state.tabs));
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
            <TaskList className="task-list" tasks={tab.content} updateTask={this.updateTask}/>
            <TaskForm className="task-form" addTask={this.addTask} />
          </div>
        </div>
      </div>
    );
  }
}

export default Tasks;
