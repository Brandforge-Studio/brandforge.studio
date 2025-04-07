'use client';

import Input from '../_components/Input';

export default function FormPage() {
  return (
    <div className="min-h-screen bg-gray-900 flex flex-col items-center justify-center p-4">
      <h1 className="text-3xl font-bold text-white mb-8">Form Layout Example</h1>
      
      <div className="w-full max-w-4xl mx-auto p-6">
        <form className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Two inputs that will be side by side on md+ screens */}
          <div>
            <Input id="firstName" label="First Name" type="text" />
          </div>
          <div>
            <Input id="lastName" label="Last Name" type="text" />
          </div>
          
          {/* Single input that spans full width */}
          <div className="md:col-span-2">
            <Input id="email" label="Email" type="email" />
          </div>
          
          {/* Two inputs that will be side by side on md+ screens */}
          <div>
            <Input id="password" label="Password" type="password" />
          </div>
          <div>
            <Input id="confirmPassword" label="Confirm" type="password" />
          </div>
        </form>
      </div>
    </div>
  );
} 