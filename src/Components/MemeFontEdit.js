import React, {Component} from "react";
import "./MemeGallery.css";

export default class MemeFontEdit extends Component {
  constructor (props) {
    super (props);
    this.state = {
      textShadow: true
    };
  }

  increaseSize = () => {
    let component = document.getElementsByClassName("meme-download")[0];
    let style = window.getComputedStyle(component, null).getPropertyValue('font-size');
    let currentSize = parseFloat(style);
    component.style.fontSize = (currentSize + 5) + "px";
  }

  decreaseSize = () => {
    let component = document.getElementsByClassName("meme-download")[0];
    let style = window.getComputedStyle(component, null).getPropertyValue('font-size');
    let currentSize = parseFloat(style);
    component.style.fontSize = (currentSize - 5) + "px";
  }
  
  setColor = () => {
    let color = document.getElementById('color-input').value;
    let component = document.getElementsByClassName("meme-download")[0];
    component.style.color = color;
  }

  setFont = () => {
    let font = document.getElementById('select-font').value;
    let component = document.getElementsByClassName("meme-download")[0];
    component.style.fontFamily =  " " + font + " , sans-serif" ;
  }

  toggleTextShadow = () => {
    let text = document.getElementsByTagName("p");
    if (this.state.textShadow) {
      for (let i = 0; i<text.length; i++) {
        text[i].style.textShadow = "none";
      }
      this.setState ({ textShadow: false });
    } else {
      for (let i = 0; i<text.length; i++) {
        text[i].style.textShadow = " #000 0px 0px 1px, #000 0px 0px 1px,   #000 0px 0px 1px,#000 0px 0px 1px,   #000 0px 0px 1px,   #000 0px 0px 1px,#000 0px 0px 1px,   #000 0px 0px 1px,   #000 0px 0px 1px,#000 0px 0px 1px,   #000 0px 0px 1px,   #000 0px 0px 1px";
      }
      this.setState ({ textShadow: true });
    }
  }

  render () {
    return (
      <div className = "meme-font-edit">
        <div className = "meme-font-edit-option">
          <button className = "make-meme-button" onClick = {this.decreaseSize} >-</button>
          Font Size
          <button className = "make-meme-button" onClick = {this.increaseSize} >+</button>
        </div>
        <div className = "meme-font-edit-option">
          Select Font Color 
          <input type = "color" id = "color-input" onChange = {this.setColor} />
        </div>
        <div className = "meme-font-edit-option">
          Select Font
          <select id = "select-font" onChange = {this.setFont}>
            <option value = "Roboto" >Roboto</option>
            <option value = "Impact" >Impact</option>
            <option value = "Arial" >Arial</option>
          </select>
        </div>
        <div className = "meme-font-edit-option">
          <button className = "make-meme-button" onClick = {this.toggleTextShadow} >Toggle text shadow</button>
        </div>
      </div>
    )
  }
}