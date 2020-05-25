import Dialogs from './Dialogs';
import {addMessageCreator} from './../../redux/dialogs-reducer';
import {connect} from	"react-redux";
import {withAuthRedirect} from './../../hoc/withAuthRedirect';
import {compose} from 'redux';

let mapStateToProps	= (state) => {
	return	{ 
		states	 : state.MessagesPage,
	}
}

let mapDispatchToProps = (dispatch) => {

	return	{		
		addMessage : (value) => {
				dispatch(addMessageCreator(value))
		}
	}
}


export default compose(withAuthRedirect, connect(mapStateToProps, mapDispatchToProps))(Dialogs)

