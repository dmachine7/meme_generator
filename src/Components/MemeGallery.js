import React, {Component} from "react";
import "./MemeGallery.css";
import Makememe from "./Makememe";

class MemeGallery extends Component{
  constructor (props) {
    super (props);
    this.state = {
      memeArray: [],
      activeMeme: "",
      htwratio: 1
    };
  }
  
  static getDerivedStateFromProps (props, state) {
    return {
      memeArray: props.memeArray
    }
  }

  setURL = (item) => {
    let ratio = item.height/item.width;
    this.setState (
      {
        activeMeme: item.url,
        htwratio: ratio
      }
    )
    window.scrollTo(0,700);
  }

  render () {
    return (
      <div>
        <div className = "meme-gallery"> 
          {
            this.state.memeArray.map((item) => {
              let height="0%" , width="0%";
              if (item.height >= item.width) {
                height = "100%";
                width = "auto";
              } else {
                height = "auto";
                width = "100%";
              }
  
              return (
                <div className = "meme-card" onClick = {() => this.setURL(item)}>
                  <img className = "meme-img" src = {item.url} height = {height} width = {width} />
                  <div className = "meme-name">{item.name}</div>
                </div>
              )
            })
          }
        </div>
        <Makememe 
          memeurl = {this.state.activeMeme} 
          heightTowidth = {this.state.htwratio}
        />
      </div>
    )
  }
  
}

export default MemeGallery;
