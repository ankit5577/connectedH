import React from "react";

function Footer() {
  return (
    <div className="p-2 bg-slate-700 w-full">
      <h2 className="text-center text-white text-sm font-normal">
        Made by: {" "}
        <a className="hover:text-indigo-400 shadow-md" target="_blank" rel="noreferrer" href="https://github.com/ankit5577">
           Ankit5577
        </a>
      </h2>
    </div>
  );
}

export default Footer;
