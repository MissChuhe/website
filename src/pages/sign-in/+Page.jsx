import React, { useEffect } from 'react';

// eslint-disable-next-line react-refresh/only-export-components
export const meta = () => [
  { title: 'Sign In | Taifa Mobile' },
  {
    name: 'description',
    content:
      'Sign in to access Taifa Mobile account services and tools.'
  }
];

const RedirectPage = () => {
  useEffect(() => {
    window.location.href = 'http://beta.taifamobile.co.ke/site/register';
  }, []);

  return null; // Renders nothing
};

export default RedirectPage;