import Contact from "../Components/Contact";
import {render,screen} from "@testing-library/react";
import "@testing-library/jest-dom";

test("should load contact us page",()=>{
    render(<Contact/>);

    const heading=screen.getAllByRole("heading");

    expect(heading[0]).toBeInTheDocument();
})

test("should 3 input boxes",()=>{
    render(<Contact/>);

    const inputboxes=screen.getAllByRole("textbox");

    expect(inputboxes.length).toBe(3);
})