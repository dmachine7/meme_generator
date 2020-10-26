import React, {Component} from "react";
import MemeGallery from "../Components/MemeGallery";

class MemeAPI extends Component {
  constructor (props) {
    super (props);
    this.state = {
      memes: [],
      isLoaded: false,
      error: null
    };
  }

  componentDidMount () {
    fetch ("https://api.imgflip.com/get_memes")
      .then (result => result.json())
      .then (
        (result) => {
          this.setState (
            {
              isLoaded: true,
              memes: result.data.memes
            }
          )
        },

        (error) => {
          this.setState (
            {
              isLoaded: true,
              error
            }
          )
        }
      )
  }

  render () {
    if (this.state.error) {
      return <div>Error Loading. Reload.</div>
    } else {
      return <MemeGallery memeArray = {this.state.memes} />
    }
  }
}

export default MemeAPI;