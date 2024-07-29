import React from 'react';
import '../styles/AboutUs.css';

const AboutUs = () => {
  return (
    <div className="container mt-5">
      <h1 className="text-center mb-5 display-4 font-weight-bold">About Us</h1>

      <div className="row mb-5">
        <div className="col-lg-6 mb-4">
          <div className="shadow-box p-4">
            <h2 className="font-weight-bold">History</h2>
            <p className="text-muted">
              Founded in 1985, Springdale Public School has been dedicated to providing quality education and holistic development to students.
            </p>
          </div>
        </div>
        <div className="col-lg-6 mb-4">
          <div className="shadow-box p-4">
            <h2 className="font-weight-bold">Vision</h2>
            <p className="text-muted">
              To create a learning environment that fosters academic excellence, critical thinking, and ethical values.
            </p>
          </div>
        </div>
      </div>

      <div className="row mb-5">
        <div className="col-lg-6 mb-4">
          <div className="shadow-box p-4">
            <h2 className="font-weight-bold">Mission</h2>
            <p className="text-muted">
              To empower students with the knowledge, skills, and values needed to thrive in a dynamic world.
            </p>
          </div>
        </div>
        <div className="col-lg-6 mb-4">
          <div className="shadow-box p-4">
            <h2 className="font-weight-bold">Principal's Message</h2>
            <blockquote className="blockquote">
              <p className="mb-0">
                At Springdale, we believe in nurturing the potential of every student and guiding them towards a successful future.
              </p>
              <footer className="blockquote-footer font-italic">Principal, Springdale Public School</footer>
            </blockquote>
          </div>
        </div>
      </div>

      <section>
        <h2 className="font-weight-bold mb-4">Infrastructure and Facilities</h2>
        <ul className="list-unstyled">
          <li className="mb-2">State-of-the-art science and computer labs</li>
          <li className="mb-2">Spacious and well-equipped classrooms</li>
          <li className="mb-2">Library with a vast collection of books and digital resources</li>
          <li className="mb-2">Sports facilities including a playground, gymnasium, and swimming pool</li>
        </ul>
      </section>
    </div>
  );
};

export default AboutUs;
