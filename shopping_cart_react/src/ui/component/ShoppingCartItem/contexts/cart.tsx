import React, { useReducer, createContext, useEffect, ReactNode } from "react";
import useLocalStorage from "../hooks/useLocalStorage";

interface CartItem {
  id: number;
  quantity: number;
  // Add other properties of your cart item here
}

interface CartState {
  isCartOpen: boolean;
  items: CartItem[];
}

interface CartAction {
  type: string;
  payload?: {
    cartItem?: CartItem;
    cartItemId?: number;
  };
}

export const CartStateContext = createContext<CartState | undefined>(undefined);
export const CartDispatchContext = createContext<React.Dispatch<CartAction> | undefined>(undefined);

const initialState: CartState = {
  isCartOpen: false,
  items: [],
};

const reducer = (state: CartState, action: CartAction): CartState => {
  switch (action.type) {
    case "TOGGLE_CART_POPUP":
      return {
        ...state,
        isCartOpen: !state.isCartOpen,
      };
    case "ADD_TO_CART":
      const id = action.payload?.cartItem?.id;
      if (!id) return state;

      const isOld = state.items.map((item) => item.id).includes(id);
      let cartItems = null;
      if (isOld) {
        const items = state.items.map((item) => {
          if (item.id === id) {
            return {
              ...item,
              quantity: (item.quantity || 0) + 1,
            };
          }
          return item;
        });
        cartItems = [...items];
      } else {
        cartItems = [...state.items, action.payload?.cartItem!];
      }
      return {
        ...state,
        items: cartItems,
      };
    case "REMOVE_FROM_CART":
      return {
        ...state,
        items: state.items.filter(
          (item) => item.id !== action.payload?.cartItemId
        ),
      };
    case "CLEAR_CART":
      return {
        ...state,
        ...initialState,
      };
    default:
      throw new Error(`Unknown action: ${action.type}`);
  }
};

export const toggleCartPopup = (dispatch: any) => {
  return dispatch({
    type: "TOGGLE_CART_POPUP"
  });
};

export const addToCart = (dispatch: any, cartItem: CartItem) => {
  return dispatch({
    type: "ADD_TO_CART",
    payload: {
      cartItem: cartItem
    }
  });
};

export const removeFromCart = (dispatch: any, cartItemId: number) => {
  return dispatch({
    type: "REMOVE_FROM_CART",
    payload: {
      cartItemId: cartItemId
    }
  });
};

export const clearCart = (dispatch: any) => {
  return dispatch({
    type: "CLEAR_CART"
  });
};

interface CartProviderProps {
  children: ReactNode;
}

const CartProvider: React.FC<CartProviderProps> = ({ children }) => {
  const [persistedCartItems, setPersistedCartItems] = useLocalStorage(
    "cartItems",
    []
  );

  const persistedCartState: CartState = {
    isCartOpen: false,
    items: persistedCartItems || [],
  };

  const [state, dispatch] = useReducer(reducer, persistedCartState);

  useEffect(() => {
    setPersistedCartItems(state.items);
  }, [JSON.stringify(state.items)]);

  return (
    <CartDispatchContext.Provider value={dispatch}>
      <CartStateContext.Provider value={state}>
        {children}
      </CartStateContext.Provider>
    </CartDispatchContext.Provider>
  );
};

export default CartProvider;
