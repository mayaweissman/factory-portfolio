import React, { Component } from "react";
import { BrowserRouter, Redirect, Route, Switch } from "react-router-dom";
import axios from "axios";
import "./layout.css";
import { Menu } from "../menu/menu";
import { Home } from "../home/home";

export class Layout extends Component {
  public render() {
    return (
      <div className="layout">
        <header>
          <Menu />
        </header>
        <main>
          <Home/>
        </main>
      </div>
    );
  }
}
