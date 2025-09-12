import React from 'react';

function TemplateSwitcher({ setTemplate }) {
  return (
    <div className="template-switcher">
      <button onClick={() => setTemplate('classic')}>Classic</button>
      <button onClick={() => setTemplate('modern')}>Modern</button>
      <button onClick={() => setTemplate('minimal')}>Minimal</button>
    </div>
  );
}

export default TemplateSwitcher;
