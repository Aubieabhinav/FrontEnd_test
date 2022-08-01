import React from "react"
import { Link } from "react-router-dom"

function handleSubmit(event) {
    event.preventDefault();
}
export default function TemplateCreate() {
    const [data, setData] = React.useState({
        firstName: "",
        lastName: "",
        favColor: ""
        
    })
    function handleChange(event) {
        const [name, value] = event.target
        setData(prevData => {
            return {
                ...prevData,
                [name]: value
            }
        })
    }
    

    return (
        <div>
            <h1> Create Template </h1>
            <form className="Create-template">
                <input
                    type="text"
                    placeholder="FirstName"
                    name="firstName"
                    value={data.firstName}
                    onChange={handleChange}


                />
                <label > Enter your Last Name </label>
                <br />
                <br />
                <input
                    id="lastName"
                    placeholder="lastName"
                    value={data.lastNamet}
                    onChange={handleChange}
                    required

                />
                <br />
                <br />
                <select
                    id="favColor"
                    name="favColor"
                    onChange={handleChange}
                    value={data.favColor}
                >\
                    <option value=" " >--CHOOSE A COLOR</option>
                    <option value=" Red" >Red</option>
                    <option value=" Blue" >Blue</option>
                    <option value=" Green" >Green</option>
                </select>
                <Link to="/templatePreview">
                    <button> Create </button>
                </Link>

                <button onClick={handleSubmit}>Submit </button>
            </form>
        </div>
    )
}