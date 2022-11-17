export const save = (item) => {
  const key = item.constructor.name.toLowerCase();
  const data = JSON.parse(localStorage.getItem(key) || '[]');

  item.id = Math.max(0, ...data.map((object) => parseInt(object.id, 10))) + 1;
  data.push(item);
  localStorage.setItem(key, JSON.stringify(data));

  return item;
};

export const getAll = (cls) => {
  const key = cls.name.toLowerCase();
  return JSON.parse(localStorage.getItem(key) || '[]');
};

export const removeAll = (cls) => {
  const key = cls.name.toLowerCase();
  localStorage.removeItem(key);
};
