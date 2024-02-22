import "@testing-library/jest-dom";
import { render } from "@testing-library/react";
import TaskList from "../components/TaskList";
import { TASKS } from "../data";

test("displays all items when initially rendered", async () => {
  const { container } = render(<TaskList tasks={TASKS} />);
  await new Promise((resolve) => setTimeout(resolve, 2000));
  expect(container.querySelectorAll(".task")).toHaveLength(TASKS.length);
});
