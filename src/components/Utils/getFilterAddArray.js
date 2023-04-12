export const getFilterAddArray = (items, key, filterValue) => {
  return items.filter(item =>
    item[key].toLowerCase().includes(filterValue.toLowerCase().trim())
  );
};
