import React, { Component } from "react";
import { BrowserRouter, Redirect, Route, Switch } from "react-router-dom";
import axios from "axios";
import "./layout.css";



export class Layout extends Component {

  public render() {
    return (
      <div className="layout">
        <h1>Layout</h1>
      </div>
    );
  }
}
