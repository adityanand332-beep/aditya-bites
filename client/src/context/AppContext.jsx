
import React, { createContext, useContext, useEffect, useMemo, useState } from 'react';

const C = createContext(null);

export const useApp = () => useContext(C);

const API = import.meta.env.VITE_API_URL || 'http://localhost:5000/api';

export function AppProvider({ children }) {
  const [user, setUser] = useState(() =>
    JSON.parse(localStorage.getItem('ab_user') || 'null')
  );

  const [token, setToken] = useState(() =>
    localStorage.getItem('ab_token') || ''
  );

  const [cart, setCart] = useState(() =>
    JSON.parse(localStorage.getItem('ab_cart') || '[]')
  );

  const [toast, setToast] = useState('');

  useEffect(() => {
    localStorage.setItem('ab_cart', JSON.stringify(cart));
  }, [cart]);

  useEffect(() => {
    if (toast) {
      const t = setTimeout(() => setToast(''), 2600);
      return () => clearTimeout(t);
    }
  }, [toast]);

  const request = async (path, options = {}) => {
    const res = await fetch(API + path, {
      ...options,
      headers: {
        'Content-Type': 'application/json',
        ...(token ? { Authorization: `Bearer ${token}` } : {}),
        ...(options.headers || {})
      }
    });

    const data = await res.json().catch(() => ({}));

    if (!res.ok) {
      throw new Error(data.message || 'Request failed');
    }

    return data;
  };

  const login = async (email, password) => {
    const d = await request('/auth/login', {
      method: 'POST',
      body: JSON.stringify({ email, password })
    });

    setToken(d.token);
    setUser(d.user);

    localStorage.setItem('ab_token', d.token);
    localStorage.setItem('ab_user', JSON.stringify(d.user));

    return d.user;
  };

  const register = async (payload) => {
    const d = await request('/auth/register', {
      method: 'POST',
      body: JSON.stringify(payload)
    });

    setToken(d.token);
    setUser(d.user);

    localStorage.setItem('ab_token', d.token);
    localStorage.setItem('ab_user', JSON.stringify(d.user));

    return d.user;
  };

  const logout = () => {
    setUser(null);
    setToken('');

    localStorage.removeItem('ab_user');
    localStorage.removeItem('ab_token');

    setToast('You have been logged out');
  };

  // Add food to cart with the correct MongoDB item ID
  const addToCart = (restaurant, item) => {
    const newItem = {
      itemId: item._id,
      name: item.name,
      price: item.price,
      image: item.image,
      restaurantId: restaurant._id,
      restaurantName: restaurant.name,
      quantity: 1
    };

    if (!item._id) {
      setToast('Food item ID is missing. Please refresh the page.');
      return;
    }

    setCart(old => {
      if (old.length && old[0].restaurantId !== restaurant._id) {
        setToast('Cart cleared — ordering from one restaurant at a time');
        return [newItem];
      }

      const found = old.find(x => x.itemId === item._id);

      if (found) {
        return old.map(x =>
          x.itemId === item._id
            ? { ...x, quantity: x.quantity + 1 }
            : x
        );
      }

      return [...old, newItem];
    });
  };

  const changeQty = (id, delta) => {
    setCart(old =>
      old
        .map(x =>
          x.itemId === id
            ? { ...x, quantity: x.quantity + delta }
            : x
        )
        .filter(x => x.quantity > 0)
    );
  };

  const clearCart = () => setCart([]);

  const value = useMemo(
    () => ({
      user,
      token,
      cart,
      toast,
      setToast,
      request,
      login,
      register,
      logout,
      addToCart,
      changeQty,
      clearCart
    }),
    [user, token, cart, toast]
  );

  return <C.Provider value={value}>{children}</C.Provider>;
}
