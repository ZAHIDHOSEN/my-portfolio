import React from 'react';
import ContactForm from '../Components/ContactForm';
import ContactInfo from '../Components/ContactInfo';

const Contact = () => {
    return (
        <div className='lg:flex md:flex gap-20  mt-20 sm:'>
            <ContactForm></ContactForm>
            <ContactInfo></ContactInfo>
        </div>
    );
};

export default Contact;