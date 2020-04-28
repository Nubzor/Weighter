import { render } from "@testing-library/svelte";
import App from "./App.svelte";

describe("App component", () => {
  test("should render component correctly", () => {
    const { container } = render(App, {
      props: {
        name: 'World',
      }
    });

    expect(container).toContainHTML("<h1>Hello World!</h1>");
  });
});