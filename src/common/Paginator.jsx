import React, {useState} from 'react';
import styles from './../components/Users/users.module.css'

let Paginator = (props, {portionSize = 9}) => {

	let [portionNumber, setPortionNumber] = useState(1);
	let pagesCount = Math.ceil(props.totalUsersCount/props.pageSize);
	let pages = [];
	for (let i=1; i < pagesCount; i++ ) {
		pages.push(i);
	}
	let portionCount = Math.ceil(pagesCount/portionSize);
	let firstOfPortionNumber = portionSize*(portionNumber - 1) + 1;
	let lastOfPortionNumber = portionSize*portionNumber;

	return 	<div className = {styles.but}>
				{ portionNumber > 1  &&  <button  onClick = {() =>setPortionNumber(portionNumber - 1)}>PREV</button> }

					{pages.filter(p => p >= firstOfPortionNumber && p <= lastOfPortionNumber ).map(p => { return <span className = {props.currentPage === p 
														? styles.cur 
														: styles.uncur} 
											onClick = {() => {props.onPageChanged(p)}}
											key = {p.toString()}>{' ' +p}</span> })}
		
				{ portionNumber < portionCount  &&  <button onClick = {() =>setPortionNumber(portionNumber + 1)}>NEXT</button> }
			</div>

}

export default Paginator;