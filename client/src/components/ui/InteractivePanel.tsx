import * as React from "react"

const Buttons = () => {
    const [something, setSomething] = React.useState(0); //<- for counter placeholders
    const [something2, setSomething2] = React.useState(0); //<- for counter placeholders

    const doSomething = () => {    //<- event listener placeholder
        setSomething(something + 1234)  
    }

    const doSomething2 = () => {    //<- event listener placeholder
        setSomething2((something2 + 5) * 2)  
    }

    return (
        <div>
            <div>{something}</div>
            <div>{something2}</div>

            <button type = "button" onClick={doSomething}>BUTTON</button>
            <button type = "button" onClick={doSomething2}>BUTTON</button>

            {/* returns something */}
            
        </div>
    )


}

export default Buttons;