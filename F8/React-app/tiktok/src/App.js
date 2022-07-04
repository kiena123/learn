import { useState } from 'react';

function App() {
  const [job, setJob] = useState('')
  const [listJob, setListJob] = useState([])

  const handleSubmit = () => {
    setListJob(prev => [ ...prev, job] )
    setJob('')
  }

  return (
    <div style={{padding: 32}}>
      <input
        value={job}
        onChange={e => setJob(e.target.value)}
      />
      <button onClick={handleSubmit}>Add</button>
      <ul>
        {listJob.map((value, index) => (<li key={index}>{value}</li>) )}
      </ul>
    </div>
  );
}

export default App;
