 export default function App() {
    const [seconds, setSeconds] = React.useState(10);
  
    React.useEffect(() => {
      if (seconds > 0) {
        setTimeout(() => setSeconds(seconds - 1), 1000);
      } else {
        setSeconds('BOOOOM!');
      }
    });
  
    return (
      <div className="App">
        <div>
          {seconds}
        </div>
      </div>
    );
  }