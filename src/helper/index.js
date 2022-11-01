export function handleHashCategoryById(items) {
  const objData = {};
  for (let i = 0; i < items.length; i++) {
    objData[items[i].id] = { id: items[i].id, name: items[i].name };
  }
  return objData;
}
