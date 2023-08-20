import { fireEvent, screen } from "@testing-library/react";
import { render } from "CustomRender";
import Button from "./Button";

describe("Button", () => {
  it("renders correctly", () => {
    render(<Button>Click me</Button>);

    expect(screen.getByText("Click me")).toBeInTheDocument();
  });

  it("calls onClick handler when clicked", () => {
    const handleClick = jest.fn();
    render(<Button onClick={handleClick}>Click me</Button>);

    fireEvent.click(screen.getByText("Click me"));

    expect(handleClick).toHaveBeenCalledTimes(1);
  });

  it("renders as primary when primary prop is true", () => {
    render(<Button primary>Click me</Button>);

    expect(screen.getByText("Click me")).toHaveStyle(
      "background-color: ButtonFace"
    );
  });
});
