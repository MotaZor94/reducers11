import { combineReducers} from 'redux'

const songsReducer = () => {
    return [
        {title: 'No Scrubs', duration: '4:05'},
        {title: 'Macarena', duration : '3:32'},
        {title: 'All star', duration: '3:32'},
        {title: 'All I want is You', duration: '5:32'}
    ]
}


const selectedSongReducer = ( selectedSong = null, action) => {
        if(action.type === 'SONG_SELECTED') {
            return action.payload
        }
    return selectedSong
    }

export default combineReducers({
    songs: songsReducer,
    selectedSong: selectedSongReducer
})
