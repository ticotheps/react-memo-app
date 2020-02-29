import React from 'react';

function Rerender({ seconds }) {
	// This console.log() statement should should be printing every second
	// in your console because this component is trying to update every
	// second even though the 'seconds' prop that is being passed to it is
	// hardcoded as a '1'.
	console.log('I am rendering');
	return <h3>I am updating every {seconds} seconds!</h3>;
}

export default Rerender;

// Because this component continues to rerender despite receiving the same
// exact hardcoded prop, it is doing extra work that it does not have to do
// which decreases performance.
