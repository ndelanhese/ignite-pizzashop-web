import { render } from "@testing-library/react";
import { NavLink } from "./navLink";

describe("NavLink", () => {
	it("should highlight the nav link when is the current page link", () => {
		const wrapper = render(
			<>
				<NavLink href={"/home"} isTesting={false}>
					Home
				</NavLink>

				<NavLink href={"/about"} isTesting={true}>
					About
				</NavLink>
			</>,
		);

		expect(wrapper.getByText("Home").dataset.current).toEqual("false");
		expect(wrapper.getByText("About").dataset.current).toEqual("true");
	});
});
