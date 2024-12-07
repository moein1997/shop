import {useState} from "react";

function VerifyAccount() {
    const [formData, setFormData] = useState({ username: '', verificationCode: '' });
    const [message, setMessage] = useState('');

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await fetch('/api/verify', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(formData),
            });
            const result = await response.json();
            setMessage(result.message);
        } catch (error) {
            setMessage('Error verifying account.');
        }
    };

    return (
        <div>
            <h2>Verify Your Account</h2>
            <form onSubmit={handleSubmit}>
                <input
                    type="text"
                    name="username"
                    placeholder="Username"
                    value={formData.username}
                    onChange={handleChange}
                />
                <input
                    type="text"
                    name="verificationCode"
                    placeholder="Verification Code"
                    value={formData.verificationCode}
                    onChange={handleChange}
                />
                <button type="submit">Verify</button>
            </form>
            {message && <p>{message}</p>}
        </div>
    );
}

export default VerifyAccount;