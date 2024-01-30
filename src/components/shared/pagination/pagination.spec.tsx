import { render } from "@testing-library/react";
// import userEvent from "@testing-library/user-event";
import { expect, it } from "vitest";
import { TablePagination } from "./pagination";

describe("Pagination", () => {
	it("should display the right amount of pages and results", async () => {
		const wrapper = render(
			<TablePagination pageIndex={0} perPage={10} totalCount={200} />,
		);

		// const nextPageButton = wrapper.getByRole("button", {
		// 	name: "Próxima página",
		// });

		// const user = userEvent.setup();
		// await user.click(nextPageButton);

		expect(wrapper.getByText("Página 1 de 20")).toBeInTheDocument();
		expect(wrapper.getByText("Total de 200 item(s)")).toBeInTheDocument();
	});
});
