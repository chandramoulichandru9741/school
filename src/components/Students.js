import React from 'react';

const Students = () => {
  const activities = [
    "Music", "Dance", "Drama", "Art", "Sports", "Robotics", "Debate Club", "Science Club"
  ];

  const clubsAndSocieties = [
    "Literary Society", "Environmental Club", "Astronomy Club", "Coding Club"
  ];

  const achievements = [
    "John Smith - National Level Math Olympiad Winner",
    "Sarah Lee - Gold Medalist in State Swimming Championship",
    "Tech Innovators Club - Winners of Inter-School Robotics Competition"
  ];

  const studentCouncil = [
    { position: 'President', name: 'Amy Parker', grade: 'Grade 12' },
    { position: 'Vice President', name: 'Rajiv Mehta', grade: 'Grade 11' },
    { position: 'Secretary', name: 'Lisa Wong', grade: 'Grade 10' }
  ];

  return (
    <div className="container mt-5">
      <h1 className="text-center mb-4">Student Life at Springdale</h1>
      
      <section className="mb-5">
        <h2>Extracurricular Activities</h2>
        <ul className="list-group">
          {activities.map((activity, index) => (
            <li className="list-group-item" key={index}>{activity}</li>
          ))}
        </ul>
      </section>

      <section className="mb-5">
        <h2>Clubs and Societies</h2>
        <ul className="list-group">
          {clubsAndSocieties.map((club, index) => (
            <li className="list-group-item" key={index}>{club}</li>
          ))}
        </ul>
      </section>

      <section className="mb-5">
        <h2>Achievements</h2>
        <ul className="list-group">
          {achievements.map((achievement, index) => (
            <li className="list-group-item" key={index}>{achievement}</li>
          ))}
        </ul>
      </section>

      <section>
        <h2>Student Council</h2>
        <ul className="list-group">
          {studentCouncil.map((member, index) => (
            <li className="list-group-item" key={index}>
              <strong>{member.position}:</strong> {member.name}, {member.grade}
            </li>
          ))}
        </ul>
      </section>
    </div>
  );
};

export default Students;
