export const setItemInLocalStorage = (state) => {
  localStorage.setItem("todos", JSON.stringify(state));
};
