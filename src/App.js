import React, { Component } from "react";
import "./App.css";
import FormGroup from "react-bootstrap/FormGroup";
import FormLabel from "react-bootstrap/FormLabel";
import FormControl from "react-bootstrap/FormControl";

let marked = require("marked");
class App extends Component {
  state = {
    markdown: ""
  };

  currentMarkdown = function (markdown) {
    this.setState({markdown});
  }

  render() {
    let { markdown } = this.state;
    return (
      <div className="App container">
        <div>
          <FormGroup controlId="formControlsTextarea">
            <h2 className="text-capitalize my-3"><span className='text-success' >dtoolz</span> markdown previewer</h2>
            <FormLabel><h3>Markdown Input</h3></FormLabel>
            <p className="text-capitalize lead" >type in your normal html codes in the input below, add bootstrap classes as well, to see your output!</p>
            <FormControl
              componentClass="textarea"
              placeholder="enter markdown"
              value={markdown}
              onChange={(e)=>this.currentMarkdown(e.target.value)}
            ></FormControl>
          </FormGroup>
        </div>
        <div>
          <h4>Markdown Output</h4>
          <div dangerouslySetInnerHTML = {{__html: marked(markdown)}} ></div>
        </div>
      </div>
    );
  }
}

export default App;
