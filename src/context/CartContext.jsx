import React, { createContext, useReducer, useEffect, useContext } from 'react';

const CartContext = createContext();

const initialState = {
    items: [],
    totalAmount: 0,
    totalCount: 0,
};

// Функция для подсчета общей суммы корзины
const calculateTotals = (items) => {
    const totalAmount = items.reduce((sum, item) => sum + item.price * item.quantity, 0);
    const totalCount = items.reduce((count, item) => count + item.quantity, 0);
    return { totalAmount, totalCount };
};

const cartReducer = (state, action) => {
    switch (action.type) {
        case 'ADD_ITEM': {
            const { id, title, price, image, quantity = 1 } = action.payload;
            const existingItemIndex = state.items.findIndex(item => item.id === id);
            
            let updatedItems;
            
            if (existingItemIndex >= 0) {
                // Если товар уже есть в корзине, увеличиваем количество
                updatedItems = [...state.items];
                updatedItems[existingItemIndex] = {
                    ...updatedItems[existingItemIndex],
                    quantity: updatedItems[existingItemIndex].quantity + quantity
                };
            } else {
                // Если товара нет в корзине, добавляем его
                updatedItems = [...state.items, { id, title, price, image, quantity }];
            }
            
            const { totalAmount, totalCount } = calculateTotals(updatedItems);
            
            return { 
                ...state, 
                items: updatedItems,
                totalAmount,
                totalCount
            };
        }
        
        case 'REMOVE_ITEM': {
            const updatedItems = state.items.filter(item => item.id !== action.payload);
            const { totalAmount, totalCount } = calculateTotals(updatedItems);
            
            return { 
                ...state, 
                items: updatedItems,
                totalAmount,
                totalCount
            };
        }
        
        case 'UPDATE_QUANTITY': {
            const { id, quantity } = action.payload;
            
            // Обновляем количество товара
            const updatedItems = state.items.map(item => 
                item.id === id ? { ...item, quantity } : item
            );
            
            // Убираем товары с нулевым количеством
            const filteredItems = updatedItems.filter(item => item.quantity > 0);
            
            const { totalAmount, totalCount } = calculateTotals(filteredItems);
            
            return { 
                ...state, 
                items: filteredItems,
                totalAmount,
                totalCount
            };
        }
        
        case 'CLEAR_CART':
            return initialState;
            
        case 'INIT_CART':
            return {
                ...action.payload,
            };
            
        default:
            return state;
    }
};

export const CartProvider = ({ children }) => {
    const [state, dispatch] = useReducer(cartReducer, initialState);

    useEffect(() => {
        const storedCart = localStorage.getItem('cart');
        if (storedCart) {
            try {
                const parsedCart = JSON.parse(storedCart);
                dispatch({ type: 'INIT_CART', payload: parsedCart });
            } catch (error) {
                console.error('Ошибка при загрузке корзины из localStorage:', error);
            }
        }
    }, []);

    useEffect(() => {
        localStorage.setItem('cart', JSON.stringify(state));
    }, [state]);

    // Вспомогательные функции для работы с корзиной
    const addItem = (item) => {
        dispatch({ type: 'ADD_ITEM', payload: item });
    };

    const removeItem = (id) => {
        dispatch({ type: 'REMOVE_ITEM', payload: id });
    };

    const updateQuantity = (id, quantity) => {
        dispatch({ type: 'UPDATE_QUANTITY', payload: { id, quantity } });
    };

    const clearCart = () => {
        dispatch({ type: 'CLEAR_CART' });
    };

    const contextValue = {
        ...state,
        addItem,
        removeItem,
        updateQuantity,
        clearCart
    };

    return (
        <CartContext.Provider value={contextValue}>
            {children}
        </CartContext.Provider>
    );
};

// Хук для удобного использования контекста корзины
export const useCart = () => {
    const context = useContext(CartContext);
    if (!context) {
        throw new Error('useCart должен использоваться внутри CartProvider');
    }
    return context;
};

export default CartContext; 