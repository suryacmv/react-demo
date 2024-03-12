// components/ComposeEmail.js
import React, { useState } from 'react';

function ComposeEmail({ onSend }) {
    const [to, setTo] = useState('');
    const [subject, setSubject] = useState('');
    const [body, setBody] = useState('');

    const handleSend = () => {
        // Validate email fields
        if (!to || !subject || !body) {
            alert('Please fill in all fields.');
            return;
        }

        // Construct email object
        const email = {
            to,
            subject,
            body
        };

        // Call onSend callback with email object
        onSend(email);

        // Clear form fields
        setTo('');
        setSubject('');
        setBody('');
    };

    return (
        <div>
            <h2>Compose Email</h2>
            <form>
                <div>
                    <label>To:</label>
                    <input type="text" value={to} onChange={(e) => setTo(e.target.value)} />
                </div>
                <div>
                    <label>Subject:</label>
                    <input type="text" value={subject} onChange={(e) => setSubject(e.target.value)} />
                </div>
                <div>
                    <label>Body:</label>
                    <textarea value={body} onChange={(e) => setBody(e.target.value)} />
                </div>
                <button type="button" onClick={handleSend}>Send</button>
            </form>
        </div>
    );
}

export default ComposeEmail;
