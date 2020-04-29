import { render, getByTestId } from "@testing-library/svelte";
import Loader from "./Loader.svelte";

describe("Loader component", () => {
  test("should render component correctly", () => {
    const { container, getByTestId } = render(Loader);

    expect(container).toContainElement(getByTestId('spinner'));
    expect(container).toBeVisible();
  });
});