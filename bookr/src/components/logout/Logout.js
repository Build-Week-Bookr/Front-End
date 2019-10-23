import React from 'react';

export default function Logout (props) {
const onLogout = () => {
    localStorage.clear();
    props.history.replace('/');
	};
	
	const onCancel = () => {
		props.history.push('/books')
	}

  return (
		<div>
			<p>Are you sure you want to log out?</p>
        <button onClick={onLogout}>Logout</button>
				<button onClick={onCancel}>Cancel</button>
    </div>
  )
}
