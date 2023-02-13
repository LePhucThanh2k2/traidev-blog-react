import {
  GET_LIST_COMMENT,
  ACT_POST_NEW_COMMENT,
  REPLY_COMMENT,
  GET_LIST_CHILD_COMMENT,
} from "./action";

const initState = {
  dataComment: {
    currentPage: 1,
    listComment: [],
    totalComment: 0,
    totalPages: 0,
    exclude: [],
  },
  listChildComment: {},
};
function commentReducer(state = initState, action) {
  switch (action.type) {
    case GET_LIST_COMMENT:
      return {
        ...state,
        dataComment: {
          ...state.dataComment,
          listComment:
            action.payload.currentPage === 1
              ? action.payload.data
              : [...state.dataComment.listComment, ...action.payload.data],
          currentPage: action.payload.currentPage,
          totalComment: parseInt(action.payload.totalComment),
          totalPages: parseInt(action.payload.totalPages),
        },
      };
    case GET_LIST_CHILD_COMMENT:
      return {
        ...state,
        listChildComment: {
          ...state.listChildComment,
          [action.payload.parentId]: {
            listComment:
              action.payload.currentPage === 1
                ? action.payload.data
                : [
                    ...state.listChildComment[action.payload.parentId]
                      .listComment,
                    ...action.payload.data,
                  ],
            currentPage: action.payload.currentPage,
            totalComment: parseInt(action.payload.totalComment),
            totalPages: parseInt(action.payload.totalPages),
          },
        },
      };
    case REPLY_COMMENT:
      const newReplyComment = action.payload.data;
      const isExist = state.listChildComment[newReplyComment.parentId]
        ? true
        : false;
      // console.log("isExist", isExist);
      const data = {
        ...state.listChildComment,
        [newReplyComment.parentId]: {
          listComment: isExist
            ? [
                newReplyComment,
                ...state.listChildComment[newReplyComment.parentId].listComment,
              ]
            : [newReplyComment],

          // currentPage: action.payload.currentPage,
          // totalComment: parseInt(action.payload.totalComment),
          // totalPages: parseInt(action.payload.totalPages),
        },
      };
      return {
        ...state,
        listChildComment: data,
      };
    case ACT_POST_NEW_COMMENT:
      return {
        ...state,
        dataComment: {
          ...state.dataComment,
          listComment: [action.payload.data, ...state.dataComment.listComment],
          exclude: [action.payload.data.id, ...state.dataComment.exclude],
        },
      };
    default:
      return state;
  }
}
export default commentReducer;
