let initialState = {
  popularMovies: {},
  topRatedMovies: {},
  upComingMovies: {},
  loading: true,
  movieList: [
    {
        index: '',
        
    }
],
// select 된 data를 담아주기 위해 생성
selectRowData: {}
};

export const selectRow = (index) => ({
  type: 'SELECTED_MOVIES',
  inputData: {
      index: index,
  }
})

function movieReducer(state = initialState, action) {
  let { type, payload } = action;
  switch (type) {
    case "GET_MOVIES_REQUEST":
      return { ...state, loading: true };

    case "GET_MOVIES_SUCCESS":
      return {
        ...state,
        popularMovies: payload.popularMovies,
        topRatedMovies: payload.topRatedMovies,
        upComingMovies: payload.upComingMovies,
        genreList: payload.genreList,
        loading: false,
      };

    case "GET_MOVIES_FAILURE":
      return { ...state, loading: false };


      case 'SELECTED_MOVIES':
            return {
                ...state,
                // state 에 action 으로 전달받은 id값과 일치하는 data가 있다면 return 해준다.
               movieList: state.movieList.find(row => row.index === action.movieList.index)
            }

            
      default:
        return { ...state }
    
    
  }
}



export default movieReducer;
