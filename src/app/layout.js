// app/layout.tsx or app/layout.jsx
import React from "react";
import './globals.css' ;
export const Metadata = {
  title: "Your Website Title",
  description: "Your Website Description",
};

const RootLayout = ({ children }) => {
  return (
    <html lang="en">
      <body>
        {children}
      </body>
    </html>
  );
};

export default RootLayout;
