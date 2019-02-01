import React from "react";
import renderer from "react-test-renderer";
import Home from "../Home";

// What we care about is the functionality of <HeroTyped />, but not
// the dependent component "Typed" from "react-typed" (which breaks our tests!)
// So we will just mock it using jest so we can test the main functionality
// of our component.
jest.mock("react-typed", () => () => <span id="mockTyped">mockTyped</span>);

describe("Home", () => {
  it("it should render", () => {
    const component = renderer.create(<Home />);
    let tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
});
