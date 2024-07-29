import React from 'react';
import '../styles/Academics.css'; 

const Academics = () => {
  return (
    <div className="container mt-5">
      <h1 className="text-center mb-4">Academics</h1>

      <section className="mb-5 shadow-box">
        <h2>Curriculum</h2>
        <div className="row">
          <div className="col-md-12">
            <table className="table curriculum-table">
              <thead>
                <tr>
                  <th>Grade</th>
                  <th>Subjects</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>Primary (Grades 1-5)</td>
                  <td>English, Mathematics, Science, Social Studies, Art, Physical Education</td>
                </tr>
                <tr>
                  <td>Secondary (Grades 6-10)</td>
                  <td>English, Mathematics, Science (Physics, Chemistry, Biology), Social Studies, Computer Science, Physical Education, Art</td>
                </tr>
                <tr>
                  <td>Senior Secondary (Grades 11-12)</td>
                  <td>
                    <strong>Science Stream:</strong> Physics, Chemistry, Biology, Mathematics, Computer Science, English
                    <br />
                    <strong>Commerce Stream:</strong> Accountancy, Business Studies, Economics, Mathematics, English
                  </td>
                </tr>
              </tbody>
            </table>
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
