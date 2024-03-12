
import './App.css';
import AppProxy from './AppProxy';
import FilterEx from './components/transition-hook-ex/FilterEx';

import { useState } from 'react';
import ComposeEmail from './components/email/ComposeEmail'
/* 

function App() {
  return (
    <div style={{ padding: "20px" }}>
      <header className="App-headxer" >
        {/* All the functionalities *}
{/* <AppProxy /> * }


{/* Transition Example with Filter  *}
        <FilterEx />

      </header>
    </div>
    // <div className="main">
    //   <Header />
    //   <Notes />
    // </div>
  );
}

*/
// App.js


function App() {
  const [sentEmails, setSentEmails] = useState([]);

  const handleSendEmail = (email) => {
    // Simulate sending email by adding it to the sentEmails state
    setSentEmails([...sentEmails, email]);
    alert('Email sent successfully!');
  };

  return (
    <div className="App">
      <h1>Email Application</h1>
      <ComposeEmail onSend={handleSendEmail} />
      {/* Display sent emails */}
      <div>
        <h2>Sent Emails</h2>
        <ul>
          {sentEmails.map((email, index) => (
            <li key={index}>
              <strong>To:</strong> {email.to}, <strong>Subject:</strong> {email.subject}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default App;

