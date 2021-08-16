import React from "react";

class Headers extends React.Component {
  render() {
    const selected = this.props.selectedTab;
    const headers = this.props.tabs.map((tab, idx) => {
      const header = tab.title;
      const status = idx === selected ? "active" : "";

      return (
        <li
          key={idx}
          id={status}
          onClick={() => this.props.toggleTab(idx)}
        >
          {header}
        </li>
      );
    });
    return <ul className="tab-header">{headers}</ul>;
  }
}

class TaskForm extends React.Component {

  inputValue() {
    return document.getElementById("input").value;
  }
  render() {
    return (
      <div>
        <input type="text" 
        placeholder="Add a new task"
        id="input"/>

        <button onClick={()=> this.props.addTask(this.inputValue())}>Add</button>
      </div>
    );
  }
}

class Tasks extends React.Component {
  constructor(props) {
    super(props);
    this.state = { selectedTab: 0, content: "hello" };
    this.toggleTab = this.toggleTab.bind(this);
    this.addTask = this.addTask.bind(this);
  }

  toggleTab(idx) {
    this.setState({selectedTab: idx})
  };

  addTask(task) {
    this.setState({content: task})
  }

  render() {
    const tab = this.props.tabs[this.state.selectedTab];
    console.log("STATE", this.state)
    return (
      <div className="tasks card large">
        {/* <h1>My Weekly Tasks</h1> */}
        <div className="tabs">
          <Headers
            selectedTab={this.state.selectedTab}
            toggleTab={this.toggleTab}
            tabs={this.props.tabs}
          ></Headers>
          <div className="tab-content">
            <TaskForm 
            addTask={this.addTask}/>
            <article>{this.state.content}</article>
          </div>
        </div>
      </div>
    );
  }
}

export default Tasks;
