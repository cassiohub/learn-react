
function selecionado(state = [], action = {}) {
    switch (action.type) {
        case 'SELECIONAR_POST':
					console.log("SELECIONANDO UM POST", state);
					let newState = [
						...state, action.photo
					]
					console.log("newState", newState);
					return newState;
        default:
            return state;
    }
};

export default selecionado;
