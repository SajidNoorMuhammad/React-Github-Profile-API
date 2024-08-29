import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App(event) {

  const githubProfile = () => {
    const profileContainer = document.getElementById('container');
    const username = document.getElementById('username').value;
    fetch(`https://api.github.com/users/${username}`)
      .then((res) => res.json())
      .then(data => {
        if (data.message === 'Not Found') {
          profileContainer.innerHTML = "<p> User Not Found</p>"
        } else {
          profileContainer.innerHTML =
            `
            <img class=" pt-3" src=${data.avatar_url} alt="" />
            <h2>${data.name}</h2>
            <h3><b>Bio:</b> ${data.bio}</h3> <div></div>
            <h3><b>Location:</b> ${data.location}</h3> 
            <h3><b>Company:</b> ${data.company}</h3>                        
            <h3><b>Profile Link:</b><a href="${data.html_url}"> Github Account</a> </h3>
            <h3><b>Followers:</b> ${data.followers}</h3>
            <h3><b>Github Joined Date:</b> ${data.created_at.slice(0, 10)}</h3>
            <h3><b>Github Last Updated:</b> ${data.updated_at.slice(11, 19)}</h3>
            <h3 class=' pb-5'><b>Total Repositories:</b> ${data.public_repos}</h3>
            `
          profileContainer.innerHTML += "";
        }
      })
      .catch(error => {
        profileContainer.innerHTML = "Error Fetching During Process";
      });
  }

  return (
    <>
      <h1 className=' text-3xl font-serif font-bold text-amber-600 bg-amber-950 p-5 text-center underline'>Github Profile </h1>
      <p className='text-2xl font-serif font-bold text-amber-600 p-5 text-center underline'>Get Your Profile By Submit UserName</p>
      <div className=' flex justify-center items-center'>
        <input type="search" placeholder='Your Profile Name Here'
          id='username'
          className=' border-2 border-amber-900 p-2 w-[50%] rounded-md outline-none ' />
        <button className=' border-2 border-amber-900 p-2 w-[10%] rounded-md ml-2 text-amber-600 font-semibold hover:bg-amber-950 hover:underline'
          onClick={githubProfile}>
          Submit
        </button>
      </div>
      <div class='container bg-amber-800' id='container'>
      </div>
    </>
  )
}

export default App
