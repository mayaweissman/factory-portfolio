import React, { Component } from "react";
import "./menu.css";

interface MenuState {
  className: string;
}

export class Menu extends Component<any, MenuState> {
  public constructor(props: any) {
    super(props);
    this.state = {
      className: "",
    };
  }
  public render() {
    return (
      <div className="menu">
        <img src="./assets/images/logo_factory.svg" />

        <button className={this.state.className} 
        onMouseEnter={()=>this.setState({className: "slide-right"})}
        onMouseLeave={()=>this.setState({className: "slide-left"})}>
          <img
            className="mail-icon"
            src="./assets/images/white-email-icon-25.jpg"
          />
          <span className="btn-txt"># talk to us</span>
        </button>
      </div>
    );
  }
}
