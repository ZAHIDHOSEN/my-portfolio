import React from 'react';

const ContactForm = () => {
    return (
         <div className="card border w-full max-w-sm shrink-0 shadow-2xl border-purple-500">
        <div className="card-body">
          <fieldset className="fieldset">
            <label className="fieldset-label">Name</label>
            <input type="text" className="input bg-white text-black" placeholder="Name" />
            <label className="fieldset-label">Email</label>
            <input type="email" className="input bg-white text-black" placeholder="Email" />
            <label className="fieldset-label">Message</label>
            <input type="text" className="h-20 input bg-white text-black" placeholder="Whats in you mind" />
       
            <button className="btn btn-neutral mt-4 bg-red-400">Submit</button>
          </fieldset>
        </div>
      </div>
    );
};

export default ContactForm;