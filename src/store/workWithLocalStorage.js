export const savedTaskList = localStorage.getItem("savedTaskList") || "[]";

const saveToLocalStorage = (list) => {
  localStorage.setItem("savedTaskList", JSON.stringify(list));
};
export default saveToLocalStorage;
