import React from 'react'
import { Link } from 'react-router';

function Button({ children, to, variant = 'primary', type = 'button', className = '', ...props }) {

    const variants = {
        primary:
            "bg-[#0F766E] text-white hover:bg-[#115E59]",

        secondary:
            "bg-[#F59E0B] text-white hover:bg-[#D97706]",

        outline:
            "border border-[#0F766E] text-[#0F766E] hover:bg-[#0F766E] hover:text-white",

        danger:
            "bg-red-600 text-white hover:bg-red-700",
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