const About = props => {
  let marks = 60;
  const city = ['Dhaka', 'London', 'Sweden', 'Berlin'];
  const status = true;

  const LoginStatusBtn = status => {
    if (status) {
      return <button>Logout Btn</button>;
    } else {
      return <button>Login Btn</button>;
    }
  };

  const renderSwitch = status => {
    switch (status) {
      case true:
        return <button>Logout Btn</button>;
      case false:
        return <button>Login Btn</button>;
      default:
        return null;
    }
  };

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

      <h1>JSX Looping</h1>
      <ul>
        {city.map((item, i) => {
          return <li key={i.toString()}>{item}</li>;
        })}
      </ul>

      <h1>JSX Conditional Rendring IF ELSE</h1>
      {/* Method 1 */}
      <h3>Login Status 1</h3>
      {status == true ? <button>Logout</button> : <button>Login</button>}

      {/* Method 2 */}
      <h3>Login Status 2</h3>
      {LoginStatusBtn(true)}

      <h1>JSX Conditional Rendring SWITCH CASE</h1>
      {renderSwitch(true)}

      <h1>JSX Conditional Rendring Ternary Operator</h1>
      {status ? <button>Logout</button> : <button>Login</button>}

      <h1>JSX Conditional Rendring Logical AND &&</h1>
      {status && <button>Logout Button</button>}

      <h1>Passing Simple Data using Props to a Chaild Component</h1>
      <h3>{props.title}</h3>
      <p>{props.desc}</p>

      <h1>Passing Info Data Object using Props to a Chaild Component</h1>
      <ul>
        <li>Name: {props.item.name}</li>
        <li>Age: {props.item.age}</li>
        <li>City: {props.item.dist}</li>
        <li>Mobile: {props.item.mobile}</li>
      </ul>
    </div>
  );
};

export default About;
