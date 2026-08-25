import React from 'react'
import { Link } from 'react-router';

function Button({ children, to, variant = 'primary', type = 'button', className = '', ...props }) {

    const variants = {
        primary:
            "bg-primary text-white hover:bg-primary-hover",

        secondary:
            "bg-secondary text-white hover:bg-secondary-hover",

        outline:
            "border border-primary text-primary hover:bg-primary hover:text-white",

        danger:
            "bg-danger text-white hover:bg-danger-hover",
    };

    // button styles for link tag 
    const buttonStyles = `
    inline-flex items-center justify-center
    px-5 py-2.5
    rounded-xl
    font-semibold
    transition-all duration-300
    cursor-pointer
    ${variants[variant]}
    ${className}
  `;

    // Navigation Button
    if (to) {
        return (
            <Link to={to} className={buttonStyles} {...props}>{children}</Link>
        )
    }

    // normal button 
    return (
        <button type={type} className={`px-5 py-2.5 rounded-xl font-semibold transition-all duration-300 cursor-pointer ${variants[variant]} ${className}`} {...props}>
            {children}
        </button>
    )
}

export default Button