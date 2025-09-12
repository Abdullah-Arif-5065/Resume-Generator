import React, { useState } from 'react';
import ResumeForm from './components/ResumeForm';
import ResumePreview from './components/ResumePreview';
import TemplateSwitcher from './components/TemplateSwitcher';
import './styles.css';

function App() {
  const [resumeData, setResumeData] = useState({});
  const [template, setTemplate] = useState('classic');

  return (
    <div className="app-container">
      <h1>🧾 Resume Builder</h1>
      <TemplateSwitcher setTemplate={setTemplate} />
      <ResumeForm setResumeData={setResumeData} />
      <ResumePreview data={resumeData} template={template} />
    </div>
  );
}

export default App;
