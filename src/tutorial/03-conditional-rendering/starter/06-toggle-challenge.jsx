import { useState } from 'react';

const ToggleChallenge = () => {
  const [showAlert, setShowAlert] = useState(false);

  //onClick function for button
  // const toggleAlert = () => {
  //   if (showAlert) {
  //     setShowAlert(false);
  //     return;
  //   }
  //   setShowAlert(true);
  // };
    
  //Alternative approach
  return (
    <div>
      <button className='btn' onClick={() => setShowAlert(!showAlert)}>toggle</button>
      {showAlert && <Alert />}
      
    
  
    </div>
  );
};

const Alert = () => {
  return <div className='alert alert-danger'>hello world</div>;
};


export default ToggleChallenge;
