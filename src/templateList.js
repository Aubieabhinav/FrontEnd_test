import React from 'react';
// import TemplateCreate from '../templateCreate';
import { Link } from 'react-router-dom'

// const[data, setData] = React.useState({});
// function handleChange(event) {
//         setData()
// }
// function handleClick(event) {
//     event.preventDefault();
//     console.log("button clicked")
// }

//Create button should allow the user to add a template (Image 2), can add one more option to directly preview the form

export default function TemplateList() {
    return (
        <div>

            <h1 className='nav-heading'> Template List</h1>
            {/* <button onClick={navigateToCreateTemplate}> Create </button> */}
            <Link to="/templateCreate">
                <button> Create </button>
            </Link>


            <form>
                <div className='input -container'>
                    <h4> Template Name</h4>
                    <Link to=''>
                        <input
                            type="button"
                            action=""
                        // placeholder = "1. Template 1"

                        />
                        <br />
                        <br />

                        <input
                            type="button"
                            id=""
                        // placeholder="2. Template 2"
                        />
                        <br />
                        <br />
                        <input
                            id=""
                            // placeholder="3. Template 3"
                            type="button"
                        />
                        <br />
                        <br />
                        <input
                            id=""
                            // placeholder="4. Template 4"
                            type="button"
                        />
                    </Link>

                </div>
            </form>
        </div>
    )
}
