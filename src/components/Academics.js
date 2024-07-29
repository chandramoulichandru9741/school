import React from 'react';
import '../styles/Academics.css'; 

const Academics = () => {
  return (
    <div className="container mt-5">
      <h1 className="text-center mb-4">Academics</h1>

      <section className="mb-5 shadow-box">
        <h2>Curriculum</h2>
        <div className="row">
          <div className="col-md-6">
            <h3>Primary (Grades 1-5)</h3>
            <p>English, Mathematics, Science, Social Studies, Art, Physical Education</p>
          </div>
          <div className="col-md-6">
            <h3>Secondary (Grades 6-10)</h3>
            <p>English, Mathematics, Science (Physics, Chemistry, Biology), Social Studies, Computer Science, Physical Education, Art</p>
          </div>
        </div>
        <div className="row">
          <div className="col-md-6">
            <h3>Senior Secondary (Grades 11-12)</h3>
            <h4>Science Stream</h4>
            <p>Physics, Chemistry, Biology, Mathematics, Computer Science, English</p>
          </div>
          <div className="col-md-6">
            <h4>Commerce Stream</h4>
            <p>Accountancy, Business Studies, Economics, Mathematics, English</p>
          </div>
        </div>
      </section>

      <section className="mb-5 shadow-box">
        <h2>Teaching Methodologies</h2>
        <p>
          We use a blend of traditional and modern teaching techniques to cater to different learning styles.
        </p>
      </section>

      <section className="shadow-box">
        <h2>Educational Resources</h2>
        <p>
          Digital classrooms, interactive learning modules, and access to online educational platforms.
        </p>
      </section>
    </div>
  );
};

export default Academics;
