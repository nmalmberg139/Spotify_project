export const initialState = {
    user: null,
    playlists: [],
    playing: false,
    on_Repeat: null,
    item: null,
    token: null,
}

const reducer = (state, action) =>{
    console.log(action);

    // Action -> type, [payload]
    switch(action.type) {
        case 'SET_USER':
        return {
            ...state,
            user: action.user,
        };
        case 'SET_TOKEN' :
            return{
                 ...state,
            token: action.token,
            } ;
        case 'SET_PLAYLISTs':
            return{
                ...state,
                playlists: action.playlists,
            };
        case 'SET_ON_REPEAT':
            return{
                ...state,
               on_Repeat: action.on_Repeat,
            }    

        default:
        return state;
    }
}
export default reducer