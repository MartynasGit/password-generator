import React from 'react';

const Footer = () => (
  <div className="container Footer">
    <footer className=" text-center text-white">
      <div className="container p-2">
        <section className="mb-2">
          <a
            className="btn btn-outline-light btn-floating m-1"
            href="https://linkedin.com/in/martynasgum"
            role="button"
          >
            <i className="bi bi-linkedin"></i>
          </a>
          <a
            className="btn btn-outline-light btn-floating m-1"
            href="https://github.com/MartynasGit"
            role="button"
          >
            <i className="bi bi-github"></i>
          </a>
        </section>
      </div>
      <div className="text-center p-3">
        © {new Date().getFullYear()} Copyright: MartynasGit
      </div>
    </footer>
  </div>
);
export default Footer;
