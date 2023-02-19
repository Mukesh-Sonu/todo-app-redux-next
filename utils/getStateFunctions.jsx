import { setItemInLocalStorage } from "@/utils/setLocalStorageData";

export const updateTodoList = (state, action) => {
  return state.findIndex((obj) => obj.id === action.payload.id);
};

export const toggleComplete = (state, action) => {
  return state.findIndex((obj) => obj.id === action.payload.id);
};

export const deleteTodoItem = (state, action) => {
  const newList = state.filter((obj) => obj.id !== action.payload.id);
  setItemInLocalStorage(newList);
  return newList;
};

export const showActiveList = (list) => {
  return list.filter((obj) => obj.completed === false);
};

export const showCompletedList = (list) => {
  return list.filter((obj) => obj.completed === true);
};

export const getPendingCount = (list) => {
  return list?.filter((obj) => obj.completed === false)?.length;
};
