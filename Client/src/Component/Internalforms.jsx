import React from 'react'
import logo from "../../public/ihhlogo.png"
import { useState } from 'react';

export const Artistform = () => {
    const [Message, setm] = useState("");
    const [formData, setFormData] = useState({
      Artistkey: '',
      name: '',
      img: ''
    });
  
    const handleChange = (e) => {
      const { name, value } = e.target;
      setFormData({
        ...formData,
        [name]: value
      });
    };
  
    const handleSubmit = async (e) => {
      e.preventDefault();
  
      try {
        const response = await fetch('https://api.contactsushil.me/addartist', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify(formData)
        });
  
        if (response.ok) {
            setm("Artist Added")
            
        } else {
            setm("FAILED")
        }
      } catch (error) {
        console.error('Error:', error);
      }
    };
  return (
    <section className="bg-gray-50 dark:bg-gray-900">
        <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
          <a href="#" className="flex items-center mb-6 text-2xl font-semibold text-gray-900 dark:text-white">
            <img className="w-8 h-8 mr-2" src={logo} alt="logo"/>
            IHH Player   
          </a>
          <div className="w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700">
            <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
              <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
                Add New Artist
              </h1>
              <form className="space-y-4 md:space-y-6" onSubmit={handleSubmit}>
                <div>
                  <label htmlFor="text" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Artist Key</label>
                  <input
                    type="text"
                    name="Artistkey"
                    id="Artistkey"
                    value={formData.Artistkey}
                    onChange={handleChange}
                    className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    placeholder="Try to keep it SHORT"
                    required
                  />
                </div>
                <div>
  <label for="Name" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Name</label>
  <input
  type="text"
  name="name"
  id="name"
  value={formData.name}
  onChange={handleChange} 
  placeholder="Enter Artist Full Name"
  className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
  required
/>
</div>

                <div>
                  <label htmlFor="url" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Artist Image</label>
                  <input
                    type="url"
                    name="img"
                    id="img"
                    value={formData.img}
                    onChange={handleChange}
                    placeholder="Enter Artist Image URL"
                    className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    required
                  />
                </div>
                <button type="submit" className="w-full text-white bg-primary-600 hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800">ADD ARTIST</button>
                <p className="text-sm font-light text-gray-500 dark:text-gray-400">
                  <span className="font-medium text-primary-600 hover:underline dark:text-primary-500">{Message}</span>
                </p>
              </form>
            </div>
          </div>
        </div>
      </section>
  )
}
