import './Modal.scss';
import { useState } from 'react';

function Modal({ count }) {
	const [isOpen, setIsOpen] = useState(false);
	const showClass = isOpen ? 'show' : '';

	function handleOpenModal() {
		if (isOpen) {
			setIsOpen(false);
		} else {
			setIsOpen(true);
		}
	}

	return (
		<div className="modal-box">
			<button onClick={handleOpenModal} className="open-modal-btn">
				Open modal
			</button>

			<div className={`overlay animated ${showClass}`}>
				<div className="modal">
					<svg onClick={handleOpenModal} height="200" viewBox="0 0 200 200" width="200">
						<title />
						<path d="M114,100l49-49a9.9,9.9,0,0,0-14-14L100,86,51,37A9.9,9.9,0,0,0,37,51l49,49L37,149a9.9,9.9,0,0,0,14,14l49-49,49,49a9.9,9.9,0,0,0,14-14Z" />
					</svg>
					<img src="https://media2.giphy.com/media/xT0xeJpnrWC4XWblEk/giphy.gif" />

					<h2>Counter value: {count}</h2>
				</div>
			</div>
		</div>
	);
}

export default Modal;
