const About = () => {
  let marks = 90;
  return (
    <div>
      <h1> Hello 1</h1>
      <h4> Hello {5 + 7}</h4>
      <h4> Hello 3</h4>
      <h4> Hello 4 - {new Date().getTime()}</h4>

      <h1>Ternary Operator</h1>
      {marks > 80 ? <h3>Brilliant Result</h3> : <h3>Average Result</h3>}
    </div>
  );
};

export default About;
