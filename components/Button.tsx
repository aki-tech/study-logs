import React from 'react'

const Button = ({ children, theme = "primary" }) => {
  let themeColor: string;
  
  switch(theme) {
    case 'primary':
      themeColor = 'bg-blue-500';
      break;
    case 'google':
      themeColor = 'bg-google';
      break;
    case 'facebook':
      themeColor = 'bg-facebook';
      break;
    case 'twitter':
      themeColor = 'bg-twitter';
      break;
  }

  const classSet = [
    'py-4 rounded-full inline-block px-10',
    themeColor,
    theme ? 'font-bold' : 'border',
    theme && theme !== 'primary' && 'text-white',
  ]
    .filter(Boolean)
    .join(' ');

  return (
      <div className={classSet}>{children}
    </div>
  );
};

export default Button;
