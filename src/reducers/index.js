

let initialState = {
    username: "",
    moredetails: "",
    transferdetails: []

}


export default function rootReducer(state = initialState, action) {
    switch (action.type) {
        case 'Login':
            var data = action.username
            return (Object.assign({}, state, { username: data }))
        case 'Addmore':
            var data = { mobno: action.mobno, email: action.email };
            return (Object.assign({}, state, { moredetails: data }))
        case 'Transfer':
            var detail = { acno: action.acno, amt: action.amt }
            return (Object.assign({}, state, { transferdetails: [...state.transferdetails, detail] }))
        case 'logout': {
            console.log(initialState);
            return (Object.assign({}, initialState));

        }
        default:
            return state;
    }
}