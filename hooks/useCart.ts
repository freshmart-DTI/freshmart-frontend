import { ProductType } from '@/types/Product';
import { create } from 'zustand';
import { persist } from 'zustand/middleware';
import { useSession } from 'next-auth/react';

interface User {
  email: string;
}

interface CartItem {
  productId: string;
  storeId: string;
  quantity: number;
  name: string;
  price: number;
}

interface CartStore {
  items: CartItem[];
  addItem: (product: ProductType, storeId: string, quantity: number) => void;
  removeItem: (productId: string, storeId: string) => void;
  clearCart: () => void;
  setItems: (items: CartItem[]) => void;
}

const useCartStore = create<CartStore>()(
  persist(
    (set, get) => ({
      items: [],
      addItem: (product, storeId, quantity) => {
        const { items } = get();
        const existingItemIndex = items.findIndex(
          (item) => item.productId === product.id && item.storeId === storeId
        );

        if (existingItemIndex !== -1) {
          const updatedItems = [...items];
          updatedItems[existingItemIndex].quantity += quantity;
          set({ items: updatedItems });
        } else {
          set({
            items: [
              ...items,
              {
                productId: product.id,
                storeId,
                quantity,
                name: product.name,
                price: product.price,
              },
            ],
          });
        }
      },
      removeItem: (productId, storeId) => {
        set((state) => ({
          items: state.items.filter(
            (item) =>
              !(item.productId === productId && item.storeId === storeId)
          ),
        }));
      },
      clearCart: () => set({ items: [] }),
      setItems: (items) => set({ items }),
    }),
    {
      name: 'cart-storage',
    }
  )
);

const useCart = () => {
  const { data: session } = useSession();
  const cartStore = useCartStore();

  const syncWithDatabase = async (): Promise<void> => {
    if (session) {
      try {
        const response = await fetch('/api/v1/cart');
        const dbCart = await response.json();
        cartStore.setItems(dbCart.items);
      } catch (error) {
        console.error('Failed to fetch cart from database:', error);
      }
    }
  };

  const addToCart = async (
    product: ProductType,
    storeId: string,
    quantity: number
  ): Promise<void> => {
    cartStore.addItem(product, storeId, quantity);
    if (session) {
      try {
        await fetch('api/v1/cart', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ items: cartStore.items }),
        });
      } catch (error) {
        console.error('Failed to update cart in database:', error);
      }
    }
  };

  const removeFromCart = async (productId: string, storeId: string) => {
    cartStore.removeItem(productId, storeId);
    if (session) {
      try {
        await fetch('/api/cart', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ items: cartStore.items }),
        });
      } catch (error) {
        console.error('Failed to update cart in database:', error);
      }
    }
  };

  const clearCart = async (): Promise<void> => {
    cartStore.clearCart();
    if (session) {
      try {
        await fetch('api/cart', {
          method: 'DELETE',
        });
      } catch (error) {
        console.error('Failed to clear cart in database:', error);
      }
    }
  };

  return {
    cart: cartStore.items,
    addToCart,
    removeFromCart,
    clearCart,
    syncWithDatabase,
  };
};

export default useCart;
