import React from "react";
import ShallowRenderer from "react-test-renderer/shallow";
import SubHeader from "./SubHeader";
import { render } from "react-dom";

describe("the <SubHeader /> component ", () => {
  const renderer = new ShallowRenderer();
  it("should render", () => {
    renderer.render(<SubHeader />);
    expect(renderer.getRenderOutput()).toMatchSnapshot();
  });
  it("should render with a dynamic title", () => {
    renderer.render(<SubHeader title="Test Application" />);
    expect(renderer.getRenderOutput()).toMatchSnapshot();
  });

  it("should render with a goBack button", () => {
    renderer.render(<SubHeader goBack={() => {}} />);
    expect(renderer.getRenderOutput()).toMatchSnapshot();
  });

  it("should render with a openForm button", () => {
    renderer.render(<SubHeader openForm={() => {}} />);
    expect(renderer.getRenderOutput()).toMatchSnapshot();
  });
});
