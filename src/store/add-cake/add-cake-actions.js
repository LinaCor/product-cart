export const ADD_TO_CARD = 'ADD_TO_CARD';
export const CHANGE_MORE = 'CHANGE_MORE';
export const CHANGE_LESS = 'CHANGE_LESS';
export const DELETE_CAKE = 'DELETE_CAKE';


export const addToCard = (id, desc, price, image) => ({
  type: ADD_TO_CARD,
  item: {
    id: id,
    desc: desc,
    price: price,
    image: image,
    quantity: 1,
  }
});

export const changeMore = (id) => ({
  type: CHANGE_MORE,
  id
});

export const changeLess = (id) => ({
  type: CHANGE_LESS,
  id
});

export const deleteCake = (id) => ({
  type: DELETE_CAKE,
  id
});
