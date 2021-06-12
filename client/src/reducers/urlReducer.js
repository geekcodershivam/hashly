import {
  URLS_SUCCESS,
} from '../actions/types';
const init = {
   data:{}
};
// eslint-disable-next-line import/no-anonymous-default-export
export default function (state = init, action) {
  switch (action.type) {
    case URLS_SUCCESS:
      return {
        data:action.payload
      };
    default:
      return state;
  }
}