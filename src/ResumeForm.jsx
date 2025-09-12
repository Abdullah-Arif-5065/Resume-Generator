import React from 'react';

function ResumeForm({ setResumeData }) {
  const handleChange = (e) => {
    const { name, value } = e.target;
    setResumeData(prev => ({ ...prev, [name]: value }));
  };

  return (
    <form className="resume-form">
      <input name="name" placeholder="Full Name" onChange={handleChange} />
      <input name="email" placeholder="Email" onChange={handleChange} />
      <textarea name="summary" placeholder="Professional Summary" onChange={handleChange} />
      {/* Add more fields as needed */}
    </form>
  );
}

export default ResumeForm;
