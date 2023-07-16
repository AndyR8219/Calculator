import React, { useState } from 'react';
import './App.css';

export function App() {
	const [counts, setCounts] = useState('');
	const [color, setColor] = useState('input black');
	const ops = ['+', '-'];

	const updateCounts = (value) => {
		setColor('input black');
		if (
			(ops.includes(value) && counts === '') ||
			(ops.includes(value) && ops.includes(counts.slice(-1)))
		) {
			return;
		}
		setCounts(counts + value);
	};

	const calculate = () => {
		setColor('input green');
		setCounts(eval(counts).toString());
	};
	return (
		<div className="container">
			<div className="wrapInput">
				<div className={color}>{counts}</div>
			</div>
			<Numbers data={counts} onClick={setCounts} />
			<button className="plus" onClick={() => updateCounts('+')}>
				+
			</button>
			<button className="minus" onClick={() => updateCounts('-')}>
				-
			</button>
			<button className="cancel" onClick={() => setCounts('')}>
				C
			</button>
			<button className="equals" onClick={calculate}>
				=
			</button>
		</div>
	);
}

function Numbers(props) {
	const arrNumbers = [9, 8, 7, 6, 5, 4, 3, 2, 1, 0];
	const num = arrNumbers.map((number) => {
		return (
			<button
				className="buttonNumber"
				key={number}
				onClick={(e) => {
					if (props.data !== '0')
						props.onClick(props.data + e.target.innerHTML);
					else props.onClick(e.target.innerHTML);
				}}
			>
				{number}
			</button>
		);
	});
	return num;
}
