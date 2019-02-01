import React from "react";
import renderer from "react-test-renderer";
import Home from "../Home";

jest.mock("react-typed", () => () => <span id="mockTyped">mockUserCom</span>);

describe("Home", () => {
  it("it should render", () => {
    const component = renderer.create(<Home />);
    let tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
});
