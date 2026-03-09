import './Button.css';

function Button({ children, onClick, variant = 'primary', type = 'button', fullWidth = false, disabled = false, id }) {
    return (
        <button
            id={id}
            type={type}
            className={`btn btn--${variant} ${fullWidth ? 'btn--full' : ''}`}
            onClick={onClick}
            disabled={disabled}
        >
            <span className="btn__content">{children}</span>
            <span className="btn__glow" />
        </button>
    );
}

export default Button;
