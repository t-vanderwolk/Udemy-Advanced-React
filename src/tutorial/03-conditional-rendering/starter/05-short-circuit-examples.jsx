import { useState } from 'react';

const ShortCircuitExamples = () => {
  // falsy
  const [text, setText] = useState('');
  // truthy
  const [name, setName] = useState('taylor');
  const [user, setUser] = useState({ name: 'ava' });
  const [isEditing, setIsEditing] = useState(false);

  return( 
    
      <div>
        <h2>{text || 'default value'}</h2>
        {text && (
          <div>
            <h2> whatever return</h2>
            <h2>{name}</h2>
          </div>
        )}
        {/* more info below */}
        {!text && (
          <div>
            <h2> whatever return</h2>
            <h2>{name}</h2>
          </div>
        )}
        {user && <SomeComponent name={user.name} />}
{/* 
      {!text && <div>
      <h2>whatever return</h2>
      <h2>{name}</h2>
      </div>} */}

  </div>
  );
};

const SomeComponent = ({name}) => {
  return(
    <div>
     <h2>whatever return</h2>
      <h2>{name}</h2>
      </div>
  )
}

export default ShortCircuitExamples;
