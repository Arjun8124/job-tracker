import "./App.css";
export default function Job(props) {
  console.log(props.position);
  return (
    <div className="card">
      <h1>{props.position}</h1>
      <h2>Company Name :- {props.company}</h2>
      <h3>Time Duration :- {props.time}</h3>
    </div>
  );
}
