import React , {useState} from 'react'
// import PropTypes from 'prop-types'

export default function About() {
    const [mode , setMode] = useState ({
        color : "black",
        backgroundColor : "white",
        border : '1px solid black'
    });
    const [btnText , setBtnText] = useState("Enable Dark Mode");
    const [btnCol , setBtnCol] = useState ({
        color : "white",
        backgroundColor : "black"
    });
    const toggleMode = () => {
        if(mode.color === "black") {
            setMode({
                color : "white",
                backgroundColor : "black", 
                border : '1px solid white'
            });
            setBtnText("Enable Light Mode");
            setBtnCol({
                backgroundColor : "blue",
                color : "white"
            });

        }
        else {
            setMode({
                color : "black",
                backgroundColor : "white",
                border : '1px solid black'
            });
            setBtnText("Enable Dark Mode");
            setBtnCol({
                backgroundColor : "black",
                color : "white"
            });
        }
    }
    return (
        <>
            <div className="container" style = {mode}>
                <h1 className = "my-3">About US</h1>
                <div className="accordion my-3" id="accordionExample">
                    <div className="accordion-item" style = {mode}>
                        <h2 className="accordion-header" id="headingOne">
                        <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne" style = {mode}>
                            Accordion Item #1
                        </button>
                        </h2>
                        <div id="collapseOne" className="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
                        <div className="accordion-body">
                            <strong>This is the first item's accordion body.</strong> It is shown by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.
                        </div>
                        </div>
                    </div>
                    <div className="accordion-item" style = {mode}>
                        <h2 className="accordion-header" id="headingTwo">
                        <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo" style = {mode}>
                            Accordion Item #2
                        </button>
                        </h2>
                        <div id="collapseTwo" className="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#accordionExample">
                        <div className="accordion-body">
                            <strong>This is the second item's accordion body.</strong> It is hidden by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.
                        </div>
                        </div>
                    </div>
                    <div className="accordion-item" style = {mode}>
                        <h2 className="accordion-header" id="headingThree">
                        <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree" style = {mode}>
                            Accordion Item #3
                        </button>
                        </h2>
                        <div id="collapseThree" className="accordion-collapse collapse" aria-labelledby="headingThree" data-bs-parent="#accordionExample">
                        <div className="accordion-body">
                            <strong>This is the third item's accordion body.</strong> It is hidden by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.
                        </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="container">
                <button type = "button" className="btn my-3" onClick = {toggleMode} style = {btnCol}>{btnText}</button>
            </div>
        </>
    )
}
