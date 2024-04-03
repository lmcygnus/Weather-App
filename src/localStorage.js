const setData = (name, object) => {
  localStorage.setItem(name, JSON.stringify(object));
};

const lookData = (object) => {
  const data = localStorage.getItem(object);
  if (data) {
    return JSON.parse(data);
  } else {
    return null;
  }
};

const deleteFromLocalStorage = (
  array,
  propertyName,
  currentProject,
  setName
) => {
  let objectIndex = array.findIndex(
    (obj) => obj[propertyName] === currentProject
  );
  if (objectIndex !== -1) {
    array.splice(objectIndex, 1);
  }
  setData(setName, array);
};
export { setData, lookData, deleteFromLocalStorage };
