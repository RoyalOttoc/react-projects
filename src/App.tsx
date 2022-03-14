import React, {useState} from 'react';

function App() {
  const [value, setValue] = useState('');
  const onChange = (event: React.FormEvent<HTMLInputElement>) =>
    setValue(event.currentTarget.value);

  const onSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    console.log('submitted', value);
  };
  return (
    <div>
      <form onSubmit={onSubmit}>
        <input
          value={value}
          onChange={onChange}
          type="text"
          placeholder="search"
        />
        <button type="submit">submit</button>
      </form>
      <h1></h1>
    </div>
  );
}

export default App;
