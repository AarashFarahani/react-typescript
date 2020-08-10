import React, { Component } from "react";
import "./App.css";
import Message from "./Message";

class App extends Component {
  render() {
    // let firstValue: string = "Many";
    // let firstValue: number = 34;
    // let firstValue: boolean = true;
    // let firstValue: number[] = [2, 3, 56];
    let firstValue: Array<string> = ["2", "3", "Manny"];
    let aTuple: [string, number] = ["Manny", 34];
    // enum Codes {
    //   first = 1,
    //   second = 2,
    // }

    // const warning = (): void => {
    //   console.log("Warning");
    // };

    return (
      <div className="App">
        <header className="App-header">
          {/* <Message name="Manny" message="This is a simple message"></Message> */}
          {/* <Message
            name={this.state.name}
            message={this.state.message}
          ></Message> */}
          <Message />

          <p>
            <div>
              The value {firstValue} is of {typeof firstValue} type!{" "}
            </div>
            <div>
              The value {aTuple[0]} is of {typeof aTuple[1]} type!
            </div>
          </p>
        </header>
      </div>
    );
  }
}

export default App;
