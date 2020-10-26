import React, {Component} from "react";
import Makememe from "./Makememe";
import "./style.css";

class Uploadimage extends Component {
  state = {
    memeurl: ""
  }
  display = (e) => {
    const reader = new FileReader();
    reader.onload = () => {
      this.setState ({
        memeurl: reader.result,
      })
    }
    reader.readAsDataURL(e.target.files[0]);
  }

  render () {
    return (
      <div>
        <div className = "upload-image">
          <label for = "upload-image-input" className = "upload-image-label">
            <input type = "file" id = "upload-image-input" accept = "image/*" onChange = {(e) => this.display(e)}/>
            Choose Meme
          </label>
        </div>
        <Makememe 
          memeurl = {this.state.memeurl} 
        />
      </div>
    )
  }
}

export default Uploadimage;