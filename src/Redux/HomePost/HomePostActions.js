import { MAKE_REQUEST_HOME_POST, REQUEST_SUCCESS_HOME_POST, REQUEST_FAIL_HOME_POST } from "./HomePostTypes";

export const makeRequestHomePost = () => { 
  console.log('making home post request')
  return {
    type: MAKE_REQUEST_HOME_POST
  }
}

export const requestSuccessHomePost = (list) => {
  console.log('in home post success')
  return {
    type: REQUEST_SUCCESS_HOME_POST,
    list
  }
}

export const requestFailHomePost = (error) => {
  console.log('in home post fail')
  return {
    type: REQUEST_FAIL_HOME_POST,
    error
  }
}

export const fetchHomePost = () => {
  console.log('in fetchHomePost')
  return (dispatch) => {
    console.log('in dispatch')
    dispatch(makeRequestHomePost());
    fetch(
      `https://api-minireseausocial.mathis-dyk.fr/posts`
    )
      .then((response) => response.json())
      .then((response) => {
        if (response.status === "error") {
          console.log('fetch home post fails')
          dispatch(requestFailHomePost(response.error));
        } else {
          console.log('fetch home post success')
          dispatch(requestSuccessHomePost(response));
        }
      });
  };
};