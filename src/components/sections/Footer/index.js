import React from "react";

const Footer = () => {
 const year = new Date();

  return (
    <>
      <footer
        className="w-full text-center p-6 bg-accent"
        style={{ backgroundColor: "#313131" }}
      >
        <div className="w-full h-[2px] bg-gray-600"></div>
        <div className="flex flex-col md:flex-row items-center justify-between mt-4">
          <p>&copy; Copyright All Rights Reserved {year.getFullYear()}</p>
          <p>
            Developed by{" "}
            <a
              href="https:/www.linkedin.com/in/taiwo-oloyede"
              className="text-primary hover:underline"
              target="blank"
            >
              Taiwo Oloyede
            </a>
          </p>
        </div>
      </footer>
    </>
  );
};

export default Footer;
