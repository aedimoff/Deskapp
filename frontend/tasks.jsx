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
          onClick={() => this.props.handleTabClick(idx)}
        >
          {header}
        </li>
      );
    });
    return <ul className="tab-header">{headers}</ul>;
  }
}

class Tasks extends React.Component {
  constructor(props) {
    super(props);
    this.state = { selectedTab: 0 };
    this.handleTabClick = this.handleTabClick.bind(this);
  }

  handleTabClick(idx) {
    this.setState({selectedTab: idx})
  };

  render() {
    const tab = this.props.tabs[this.state.selectedTab];

    return (
      <div className="tasks card large">
        {/* <h1>My Weekly Tasks</h1> */}
        <div className="tabs">
          <Headers
            selectedTab={this.state.selectedTab}
            handleTabClick={this.handleTabClick}
            tabs={this.props.tabs}
          ></Headers>
          <div className="tab-content">
            <article>{tab.content}</article>
          </div>
        </div>
      </div>
    );
  }
}

export default Tasks;
