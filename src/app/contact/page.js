'use client';

import { useState } from 'react';
import Button from '../_components/Button';
import Image from 'next/image';
import Input from '../_components/Input';
import SegmentedButton from '../_components/SegmentedButton';
import TextArea from '../_components/TextArea';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    company: '',
    email: '',
    phone: '',
    budget: '',
    message: ''
  });

  // Handle form field changes
  const handleChange = (field, value) => {
    setFormData({
      ...formData,
      [field]: value
    });
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted with data:', formData);
    // Here you would typically send the data to your API
  };

  return (
    <div className="w-full max-w-5xl mx-auto">
      <h1 className="font-semibold py-8 text-6xl text-center text-white">Let's Talk!</h1>
      <form
        id="contact-form"
        className="grid grid-cols-1 md:grid-cols-2 gap-6 w-full mx-auto p-6"
        onSubmit={handleSubmit}>
        <Input 
          id="name" 
          label="Name" 
          type="text" 
          value={formData.name}
          onChange={(value) => handleChange('name', value)}
        />
        
        <Input 
          id="company" 
          label="Company" 
          type="text" 
          value={formData.company}
          onChange={(value) => handleChange('company', value)}
        />
        
        <Input 
          id="email" 
          label="Email" 
          type="email" 
          value={formData.email}
          onChange={(value) => handleChange('email', value)}
        />
        
        <Input 
          id="phone" 
          label="Phone" 
          type="tel" 
          value={formData.phone}
          onChange={(value) => handleChange('phone', value)}
        />
        
        <div className="md:col-span-2">
          <label className="block font-light text-lg mb-2 pl-8 text-white">Budget Range</label>
          <SegmentedButton 
            values={['$1.5K - $5K','$5K - $25K', '$25K - $50K', '$50K +']} 
            name="budget"
            defaultValue={formData.budget}
            onChange={(value) => handleChange('budget', value)}
          />
        </div>

        <div className="md:col-span-2">
          <TextArea
            id="message"
            label="Message"
            name="message"
            onChange={(e) => handleChange('message', e.target.value)}
            placeholder="Tell us about your project..."
            value={formData.message}
          />
        </div>
        
        <div className="md:col-span-2 flex justify-end mt-4">
          <Button
            disabled={false}
            form="contact-form"
          >
            Send
            <Image
              className="invert"
              src="/send.svg"
              alt="Send"
              width={24}
              height={24}
            />
          </Button>
        </div>
      </form>
    </div>
  );
}
