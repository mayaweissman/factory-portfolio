import React, { Component } from "react";
import "./home.css";

interface HomeState {
  productsTypes: string[];
}

export class Home extends Component<any, HomeState> {
  public constructor(props: any) {
    super(props);
    this.state = {
      productsTypes: [
        "campaigns",
        "landings",
        "branding",
        "motion design",
        "ots",
        "interfaces",
        "websites",
        "platforms",
        "video marketing",
      ],
    };
  }

  public render() {
    return (
      <div className="home">
        <img src="./assets/images/SHOWREEL.png" />

        <div className="products-buttons">
          {this.state.productsTypes.map((p) => (
            <button><span className="hashtag">#</span>{p}</button>
          ))}
        </div>
      </div>
    );
  }
}
