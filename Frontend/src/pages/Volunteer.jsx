import React from 'react';

const Volunteer = () => {
  return (
    <div className="container mx-auto p-4">
      <div>
        <h1 className="text-2xl font-semibold mb-4">Volunteer Registration</h1>
        <p className="mb-4">Niti Chetna Foundation believes that unless members of the civil society are involved proactively in the process of development, sustainable change will not happen. We encourage and invite individuals for volunteer opportunities and volunteer registration, to be an active part of our organization and share the same vision and purpose as us – to work for the welfare of children and their families. Volunteers are the backbone of every organization – they not only carry the organization’s ideals within them, but also spread the message far and beyond, sensitizing the society towards the cause. Volunteer for NGO, volunteer to serve, spread some smiles!</p>
      </div>

      <form>
        <div className="flex flex-wrap justify-between">
          <div className="mb-4 w-full sm:w-1/2 lg:w-1/3">
            <label htmlFor="fullName" className="block font-semibold mb-1">Name *</label>
            <input type="text" id="fullName" name="fullName" className="border border-gray-300 px-3 py-2 rounded-md w-full" placeholder="Enter Your Full Name" required />
          </div>
          <div className="mb-4 w-full sm:w-1/2 lg:w-1/3">
            <label htmlFor="email" className="block font-semibold mb-1">Email ID *</label>
            <input type="email" id="email" name="email" className="border border-gray-300 px-3 py-2 rounded-md w-full" placeholder="Enter Your Email ID" required />
          </div>
          
          <div className="mb-4 w-full sm:w-1/2 lg:w-1/3">
            <label htmlFor="mobile" className="block font-semibold mb-1">Mobile *</label>
            <input type="tel" id="mobile" name="mobile" className="border border-gray-300 px-3 py-2 rounded-md w-full" placeholder="Enter Your Mobile" required />
          </div>
          <div className="mb-4 w-full sm:w-1/2 lg:w-1/3">
            <label htmlFor="whatsapp" className="block font-semibold mb-1">WhatsApp</label>
            <input type="tel" id="whatsapp" name="whatsapp" className="border border-gray-300 px-3 py-2 rounded-md w-full" placeholder="Enter Your WhatsApp Number" />
          </div>
          <div className="mb-4 w-full sm:w-1/2 lg:w-1/3">
            <label htmlFor="city" className="block font-semibold mb-1">City</label>
            <input type="text" id="city" name="city" className="border border-gray-300 px-3 py-2 rounded-md w-full" placeholder="Enter Your City" />
          </div>
          <div className="mb-4 w-full sm:w-1/2 lg:w-1/3">
            <label htmlFor="availability" className="block font-semibold mb-1">I am available to take on tasks that can be done</label>
            <select id="availability" name="availability" className="border border-gray-300 px-3 py-2 rounded-md w-full" defaultValue="">
              <option value="" disabled>Select</option>
              <option value="available">Available</option>
              <option value="not-available">Not Available</option>
            </select>
          </div>
          <div className="mb-4 w-full sm:w-1/2 lg:w-1/3">
            <label htmlFor="volunteeringStatus" className="block font-semibold mb-1">I can volunteer</label>
            <select id="volunteeringStatus" name="volunteeringStatus" className="border border-gray-300 px-3 py-2 rounded-md w-full" defaultValue="">
              <option value="" disabled>Select</option>
              <option value="yes">Yes</option>
              <option value="no">No</option>
            </select>
          </div>
        </div>
        <div className="mt-6">
          <button type="submit" className="bg-green-500 text-white px-4 py-2 rounded-md">Submit</button>
        </div>
      </form>
    </div>
  );
}

export default Volunteer;
