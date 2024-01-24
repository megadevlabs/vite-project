import { useRef, useState } from 'react';

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

  const Demo = () => {
    alert('Clicked!');
  };

  const FormDataPostSubmit = event => {
    event.preventDefault();
    alert('Form Submitted!');
  };

  const myHeadLineInnerText = useRef();
  const myHeadLineInnerHTML = useRef();
  const change = () => {
    myHeadLineInnerText.current.innerText = 'Hello React UseRef() Hook Method';
    myHeadLineInnerHTML.current.innerHTML = '<i>Hello Inner Html</i>';
  };

  let myImg = useRef();
  const changeImg = () => {
    myImg.current.src = 'https://placehold.co/600x400?text=Hello+World';
    myImg.current.setAttribute('height', '200px');
    myImg.current.setAttribute('width', '300px');
  };

  let firstName,
    lastName = useRef();
  let mobile = useRef();
  const changeInput = () => {
    let fName = firstName.value;
    let lName = lastName.value;
    let mNum = mobile.current.value;
    alert(fName + ' ' + lName + ' ' + mNum);
  };

  let myHeadlineCss = useRef();
  const changeCssClass = () => {
    myHeadlineCss.current.classList.remove('text-success');
    myHeadlineCss.current.classList.add('text-danger');
  };

  let numV = useRef(0);
  let changeNumV = useRef();
  const changeNum = () => {
    let changeNV = numV.current++;
    changeNumV.current.innerText = changeNV;
  };

  let APIData = useRef(null);
  let showFetchData = useRef();
  // API Data Caching by Calling
  const fetchData = async () => {
    const response = await fetch('https://dummyjson.com/products');
    APIData.current = await response.json();
  };

  // Show API Caching Data
  const showData = () => {
    showFetchData.current.innerText = JSON.stringify(APIData.current);
  };

  // UseState
  let [number, setNumber] = useState(0);

  // useState Object
  const [myObj, setMyObj] = useState({
    key1: 'Value 1',
    key2: 'Value 2',
    key3: 'Value 3',
    key4: 'Value 4',
    key5: 'Value 5',
  });
  const myObjChange = () => {
    setMyObj(prevObj => ({
      ...prevObj, // Spread Operator
      key1: 'New Changed Value for Key 1',
      key3: 'New Changed Value for Key 3',
    }));
  };

  // Rendering Data Views
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

      <h1>Passing Any Kinds of Function using Props to a Chaild Component</h1>
      <button onClick={props.ChaildBtnClick}>Click Me</button>

      <h1>RESPONDING TO EVENTS - Managing Click Event</h1>
      <button
        onClick={() => {
          alert('Clicked!');
        }}
      >
        Submit
      </button>

      <button onClick={Demo}>Click Here</button>

      <h1>Managing Form Data Submit</h1>
      <form action="" onSubmit={FormDataPostSubmit}>
        <input type="text" placeholder="Name?" />
        <button type="submit">Submit</button>
      </form>

      <h1>
        React Hook - useRef method using InnerText, InnerHtml elements change
      </h1>
      <h3 ref={myHeadLineInnerText}></h3>
      <h3 ref={myHeadLineInnerHTML}></h3>
      <button onClick={change}>Click</button>

      <h1>React Hook - useRef method using Attribute change</h1>
      <img src="https://placehold.co/600x400" ref={myImg} alt="" />
      <button onClick={changeImg}>Click</button>

      <h1>React Hook - useRef Working with Input Element</h1>
      <input
        ref={fn => (firstName = fn)}
        type="text"
        placeholder="First Name?"
      />
      <br />
      <input ref={ln => (lastName = ln)} type="text" placeholder="Last Name?" />
      <br />
      <input ref={mobile} type="text" placeholder="Mobile Number?" />
      <br />
      <button onClick={changeInput}>Click</button>

      <h1>React Hook - useRef Working with CSS Class of Bootstrap</h1>
      <h2 className="text-success" ref={myHeadlineCss}>
        This is my Headline
      </h2>
      <button onClick={changeCssClass}>Click</button>

      <h1>React Hook - useRef Working with Persisted Mutable</h1>
      <h2 ref={changeNumV}>0</h2>
      <button onClick={changeNum}>Click</button>

      <h1>React Hook - useRef Working with Caching Expensive Computation</h1>
      <p ref={showFetchData}></p>
      <button onClick={fetchData}>Call API</button>
      <button onClick={showData}>Show Data</button>

      <h1>React Hook - useState Basic Working Details</h1>
      <h5>Number: {number}</h5>
      <button onClick={() => setNumber(number + 1)}>Click</button>

      <h1>
        React Hook - useState Immutable Object and use Spread Operator also
        Working Details
      </h1>
      <h4>{myObj.key1}</h4>
      <h4>{myObj.key3}</h4>
      <button onClick={myObjChange}>Click</button>
    </div>
  );
};

export default About;
