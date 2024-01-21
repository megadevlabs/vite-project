const About = () => {
  let marks = 60;
  return (
    <div>
      <h1> Hello 1</h1>
      <h4> Hello {5 + 7}</h4>
      <h4> Hello 3</h4>
      <h4> Hello 4 - {new Date().getTime()}</h4>

      <h1>Ternary Operator</h1>
      {marks > 80 ? <h3>Brilliant Result</h3> : <h3>Average Result</h3>}

      <h1>Immediately Invoked function expressions</h1>
      {(() => {
        if (marks > 80 && marks < 100) {
          return 'Brillient A+';
        } else if (marks >= 70 && marks < 80) {
          return 'A';
        } else if (marks >= 60 && marks < 70) {
          return 'A-';
        } else if (marks >= 50 && marks < 60) {
          return 'B';
        } else if (marks >= 40 && marks < 50) {
          return 'C';
        } else {
          return 'F';
        }
      })()}
    </div>
  );
};

export default About;
