import { useState } from 'react';
import './Input.css';

function Input({ id, type = 'text', label, value, onChange, icon }) {
    const [focused, setFocused] = useState(false);
    const isActive = focused || (value && value.length > 0);

    return (
        <div className={`input-group ${isActive ? 'input-group--active' : ''}`}>
            {icon && <span className="input-group__icon">{icon}</span>}
            <input
                id={id}
                type={type}
                className="input-group__field"
                value={value}
                onChange={onChange}
                onFocus={() => setFocused(true)}
                onBlur={() => setFocused(false)}
                autoComplete={type === 'password' ? 'current-password' : 'email'}
            />
            <label className="input-group__label" htmlFor={id}>
                {label}
            </label>
            <span className="input-group__bar" />
        </div>
    );
}

export default Input;
