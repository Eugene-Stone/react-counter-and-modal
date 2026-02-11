import { Fragment, useState } from 'react';

import Counter from './components/Counter/Counter.jsx';
import Modal from './components/Modal/Modal.jsx';

function App() {
	const [count, setCount] = useState(0);

	return (
		<Fragment>
			<Counter count={count} setCount={setCount} />
			<Modal count={count} />
		</Fragment>
	);
}

export default App;
