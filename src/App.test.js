import  App  from './App'
import { render } from "@testing-library/react"
import React from "react"

test("renders h1 crom App", () => {
    const { getByText } = render(< App login="serkanozturkpmp"/>)
    const h1 = getByText(/There is no data!/)
    expect(h1).toHaveTextContent("There is no data!")
})