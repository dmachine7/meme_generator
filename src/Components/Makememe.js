import React, {Component} from "react";
import "./MemeGallery.css";
import '@deckdeckgo/drag-resize-rotate';
import domtoimage from 'dom-to-image';
import {saveAs} from 'file-saver';
import FileSaver from "file-saver";

class Makememe extends Component {
  constructor (props) {
    super (props);
    this.state = {
      imgurl: "",
      text: "",
      textID: 4,
      width: 600,
      height: 600
    };
    this.addText = this.addText.bind(this);
  }

  static getDerivedStateFromProps (props,state) {
    if (props.heightTowidth >= 1.0) {
      return {
        imgurl: props.memeurl,
        width: 600/props.heightTowidth,
        height: 600
      }
    } else {
      return {
        imgurl: props.memeurl,
        width: 600,
        height: 600*props.heightTowidth
      }
    }
  }

  updateState = (e) => {
    this.state.text = e.target.value;
  }

  addText = () => {
    let memetext = this.state.text;
    let textElem = document.getElementsByTagName("p")[this.state.textID];
    textElem.innerHTML = memetext;
    let textid = this.state.textID - 1;
    this.setState (
      {
        text: "",
        textID: textid
      }
    )
  }

  resetText = () => {
    let textList = document.getElementsByTagName("p");
    let i=0;
    for (i=0; i<textList.length; i++) {
      textList[i].innerHTML = "";
    }
    document.getElementById("make-meme-text-input").value = "";
    this.setState ({ 
      textID: 4
    })
  }

  increaseFont = () => {
    let elem = document.getElementsByClassName("meme-download")[0];
    let style = window.getComputedStyle(elem, null).getPropertyValue('font-size');
    let currentSize = parseFloat(style);
    elem.style.fontSize = (currentSize +5) + 'px';
  }

  decreaseFont = () => {
    let elem = document.getElementsByClassName("meme-download")[0];
    let style = window.getComputedStyle(elem, null).getPropertyValue('font-size');
    let currentSize = parseFloat(style);
    elem.style.fontSize = (currentSize -5) + 'px';
  }

  imgStyle = () => {
    let memeImage = document.getElementById("meme-img");
    memeImage.setAttribute("width","600");
    memeImage.setAttribute("height","600");
  }

  usestyle = {
    "--width": "200",
    "--height": "100",
    "--top": "0"
  }

  render () {

    const saveMeme = () => {
      domtoimage.toBlob(document.getElementsByClassName('meme-download')[0])
        .then(function(blob) {
          FileSaver.saveAs(blob, 'meme.png');
      });
    }
    return (
      <div className = "make-meme">
        <div className = "make-meme-image">
          <div className = "meme-download">
            <img alt = "your meme goes here" width = {this.state.width} height = {this.state.height} src = {this.state.imgurl}></img>
            <deckgo-drr style={this.usestyle} unit = "px"><p></p></deckgo-drr>
            <deckgo-drr style={this.usestyle} unit = "px"><p></p></deckgo-drr>
            <deckgo-drr style={this.usestyle} unit = "px"><p></p></deckgo-drr>
            <deckgo-drr style={this.usestyle} unit = "px"><p></p></deckgo-drr>
            <deckgo-drr style={this.usestyle} unit = "px"><p></p></deckgo-drr>
          </div>
        </div>
        <div className = "make-meme-text">
          <div id = "make-meme-text-head">Add your magic !</div>
            <input 
              id = "make-meme-text-input" 
              onChange = {(e) => this.updateState(e)} 
              placeholder = "Your text here" 
            />
            <button className = "make-meme-button" id = "add-button" onClick = {this.addText} >Add</button>
          <div className = "meme-font-options">
            <button className = "make-meme-button" onClick = {this.decreaseFont} >-</button>
            Font Size
            <button className = "make-meme-button" onClick = {this.increaseFont} >+</button>
          </div>
          <div className = "make-meme-action-button">
            <button className = "make-meme-button" onClick = {this.resetText} >Reset</button>
            <button className = "make-meme-button" onClick = {saveMeme} >Save</button>
          </div>
        </div>
      </div>
    )
  }
}

export default Makememe;