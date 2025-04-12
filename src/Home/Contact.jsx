import React from 'react';
import ContactForm from '../Components/ContactForm';
import ContactInfo from '../Components/ContactInfo';

const Contact = () => {
    return (
        <div className='flex flex-col lg:flex-row md:flex-row gap-20 mt-20'>
            <ContactForm></ContactForm>
            <ContactInfo></ContactInfo>
        </div>
    );
};

export default Contact;