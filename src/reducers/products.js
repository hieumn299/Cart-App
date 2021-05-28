import * as types from '../constants/ActionType';

var initialState = [{
        id: 1,
        name: 'Iphone 7 Plus',
        image: 'https://cdn.tgdd.vn/Products/Images/42/74110/iphone-7-gold-600x600-1-600x600.jpg',
        description: 'Sản phẩm do Apple sản xuất',
        price: 1500,
        inventory: 10,
        rating: 4
    },
    {
        id: 2,
        name: 'Iphone 8 Plus',
        image: 'https://didongviet.vn/pub/media/catalog/product//8/p/8p-min_1.jpg',
        description: 'Sản phẩm do Apple sản xuất',
        price: 2500,
        inventory: 30,
        rating: 3
    },
    {
        id: 3,
        name: 'Iphone Xr',
        image: 'https://cdn.tgdd.vn/Products/Images/42/114115/iphone-x-64gb-hh-600x600.jpg',
        description: 'Sản phẩm do Apple sản xuất',
        price: 3500,
        inventory: 40,
        rating: 5
    }
];

const myReducer = (state = initialState, action) => {
    switch (action.type) {
        case types.ADD_TO_CART:
            return state;
        default:
            return [...state];
    }
}
export default myReducer;