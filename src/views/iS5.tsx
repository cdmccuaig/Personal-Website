import React, { Component } from "react";
import Navbar from "../components/Navbar";
import { IJob, IJobProject } from "../constants/interfaces";
import { iS5Info } from "../constants/constants";
import JobProjectCard from "../components/JobProjectCard";

class iS5 extends Component<any, IJob> {
  constructor(props: any) {
    super(props);
    this.state = iS5Info;
  }

  public render() {
    return (
      <div className="telus-container job-container">
        <Navbar
          titleImage={this.state.navbarLogo || this.state.logo}
          link={this.state.website}
        />
        <div className="telus-description-container job-description-container">
          <div className="telus-description-title job-description-title">{`My Work at ${this.state.title}`}</div>
          <div className="telus-description job-description">{`${this.state.description}`}</div>
        </div>
        <div className="telus-project-title-container job-project-title-container">
          <div className="telus-project-title job-projects-title">{`Some of the Projects I Worked On`}</div>
          <div className="telus-projects-container job-projects-container">
            {this.state.projects.map((project: IJobProject) => (
              <JobProjectCard info={project} />
            ))}
          </div>
        </div>
        <div className="telus-endnote-container job-endnote-container">
          <div className="telus-endnote-text job-endnote-text">
            {`Want more information about ${this.state.title}? Click here:`}
          </div>
          <div
            className="job-endnote-image-container"
            onClick={this.buttonHandler}
          >
            <img
              src={this.state.navbarLogo || this.state.logo}
              className="job-endnote-image"
              alt="logo"
            />
          </div>
        </div>
      </div>
    );
  }

  private buttonHandler = () => {
    if (this.state.website) {
      window.open(this.state.website, "mywindow");
    }
  };
}

export default iS5;