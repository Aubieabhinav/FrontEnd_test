// import logo from './logo.svg';
import React from 'react'
import './App.css';
// import TemplateCreate from './templateCreate';
// import TemplateList from './templateList';
// import TemplatePreview from './templatePreview';
import { useState } from 'react';
import {Link} from 'react-router-dom'
import axios from 'axios';

function App() {
  const [setData] = useState([]);


  async function getData() {
    axios
      .get("https://www.getpostman.com/collections/0b00fcaae9295e0d2b48", {})
      .then(function (response) {
        setData(response.data);
      })
  }
  console.log(getData)
  fetch("https://www.getpostman.com/collections/0b00fcaae9295e0d2b48", {
    method: "POST",
    body: JSON.stringify({
      title: ""
    }),
    headers: {
      "Conent-type": "application/json,charset : UTF-8"

    },
  })
    .then((response) => response.json())
    .then((json) => console.log(json));

  return (
    <>
      <div className="App">
        <h1 className='nav-heading'> Template List</h1>
        {/* <button onClick={navigateToCreateTemplate}> Create </button> */}
        <a href='/templateCreate'>
          <button>
            Create
          </button>
        </a>

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

    </>
  );
}

export default App;
