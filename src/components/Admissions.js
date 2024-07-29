import React from 'react';

const Admissions = () => {
  return (
    <div className="container mt-5">
      <h1 className="text-center mb-4">Admissions</h1>

      <section className="mb-5">
        <h2>Admission Process</h2>
        <p>
          Admission forms are available for download. Submit the completed form along with required documents at the school office.
        </p>
        <a href="/path/to/admission-form.pdf" className="btn btn-primary" download>
          Download Admission Form
        </a>
      </section>

      <section className="mb-5">
        <h2>Admission Criteria</h2>
        <p>
          Admission is based on merit and availability of seats. Entrance tests may be conducted for certain grades.
        </p>
      </section>

      <section>
        <h2>Important Dates</h2>
        <ul>
          <li><strong>Admission Form Availability:</strong> March 1st</li>
          <li><strong>Last Date for Submission:</strong> March 31st</li>
          <li><strong>Entrance Test:</strong> April 15th</li>
          <li><strong>Announcement of Results:</strong> April 30th</li>
        </ul>
      </section>
    </div>
  );
};

export default Admissions;
