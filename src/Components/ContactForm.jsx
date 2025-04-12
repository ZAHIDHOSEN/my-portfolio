import axios from 'axios';
import React from 'react';

const ContactForm = () => {
  const handleSubmit = async (e) =>{
    e.preventDefault()
    const form = e.target 
    const name = form.name.value; 
    const email = form.email.value;
    const message = form.message.value;
    const formData = {name,email,message}
    console.log(formData);

    try{
      const data= await axios.post(`https://my-portfolio-server-gilt.vercel.app/contact`,formData)
      console.log(data.data);

    }
    catch(err){
      console.log(err,'some error');
    }
  }
    return (
         <div className="card border w-full max-w-sm shrink-0 shadow-2xl border-purple-500">
        <div className="card-body">
          <form  onSubmit={handleSubmit} >
          <fieldset  className="fieldset">
            <label className="fieldset-label">Name</label>
            <input type="text" name='name' className="input bg-white text-black" placeholder="Name" />
            <label className="fieldset-label">Email</label>
            <input type="email" name='email' className="input bg-white text-black" placeholder="Email" />
            <label className="fieldset-label">Message</label>
            <input type="text" name='message' className="h-20 input bg-white text-black" placeholder="Whats in you mind" />
       
            <button className="btn btn-neutral mt-4 bg-red-400">Submit</button>
          </fieldset>
          </form>
        </div>
      </div>
    );
};

export default ContactForm;