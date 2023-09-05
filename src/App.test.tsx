import {fireEvent, render, screen} from "@testing-library/react";
import {describe, expect} from "vitest";
import Panel from "./components/panel/Panel.tsx";

describe('Header tests: ',()=>{
    it('Add basic todo',()=>{
        render(<Panel/>)
        const input = screen.getByPlaceholderText('What needs to be done?')
        fireEvent.change(input,{
            target:{value:'todo 1'}
        })
        fireEvent.keyDown(input,{
            key:'Enter'
        })
        const count = screen.queryByText(/1 item left/i)
        expect(count).toBeInTheDocument()
    })

    it('Add empty todo',()=>{
        render(<Panel/>)
        const input = screen.getByPlaceholderText('What needs to be done?')
        fireEvent.change(input,{
            target:{value:' '}
        })
        fireEvent.keyDown(input,{
            key:'Enter'
        })
        const count = screen.queryByText(/0 item left/i)
        expect(count).toBeInTheDocument()
    })

    it('Remove a todo',()=>{
        render(<Panel/>)
        const input = screen.getByPlaceholderText('What needs to be done?')
        fireEvent.change(input,{
            target:{value:'todo 1'}
        })
        fireEvent.keyDown(input,{
            key:'Enter'
        })
        const checkbox = screen.getByTestId('checkbox')
        fireEvent.click(checkbox)

        const deleteButton = screen.getByTestId('delete-button')
        fireEvent.click(deleteButton)

        const count = screen.queryByText(/0 item left/i)
        expect(count).toBeInTheDocument()
    })
})