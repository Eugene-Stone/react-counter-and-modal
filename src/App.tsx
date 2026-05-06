import { Fragment, useState } from 'react';

import Counter from './components/Counter/Counter';
import Modal from './components/Modal/Modal';

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
