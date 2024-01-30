import { render } from "@testing-library/react";
import { NavLink } from "./navLink";

describe("NavLink", () => {
	it.skip("should highlight the nav link when is the current page link", () => {
		const wrapper = render(
			<>
				<NavLink href={"/home"}>Home</NavLink>

				<NavLink href={"/about"}>About</NavLink>
			</>,
		);

		expect(wrapper.getByText("Home").dataset.current).toEqual("false");
		expect(wrapper.getByText("About").dataset.current).toEqual("true");
	});
});
