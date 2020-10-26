import React, {Component} from "react";
import MemeAPI from "../Apis/MemesApi";
import Uploadimage from "../Components/UploadImage";
import "./style.css";
import '@deckdeckgo/drag-resize-rotate';

export default class Tab extends Component {
  constructor (props) {
    super (props);
    this.state = {
      activeTab: 0
    };
  }

  Tabs = [
    {
      tabId: "0",
      tabName: "From Templates",
      tabContent: <MemeAPI />
    },
    {
      tabId: "1",
      tabName: "From Gallery",
      tabContent: <Uploadimage />
    }
  ]

  onClickTab = (e) => {
    let id = e.target.id;
    let index = this.Tabs.findIndex (
      (item) => {
        return item.tabId === id;
      }
    );
    this.setState (
      {activeTab: index}
    )
  }

  render () {

    return (
      <div className = "tabs">
        <ol className = "tab-list">
          {
            this.Tabs.map( (item) => {
              let classname = "tab-list-item";

              if (item.tabId == this.state.activeTab) {
                classname += " tab-list-active";
              }

              return (
                <li className = {classname} id = {item.tabId} onClick = {(e) => this.onClickTab(e)}>{item.tabName}</li>
              )
            })
          }
        </ol>
        <div className = "tab-content">
          {this.Tabs[this.state.activeTab].tabContent}
        </div>
      </div>
    )
  }
}