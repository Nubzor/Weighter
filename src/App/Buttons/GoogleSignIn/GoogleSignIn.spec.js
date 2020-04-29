import { render } from "@testing-library/svelte";
import GoogleSignIn from "./GoogleSignIn.svelte";

describe("GoogleSignIn component", () => {
  test("should render component correctly", () => {
    const { container } = render(GoogleSignIn);

    expect(container).toMatchSnapshot();
  });
});