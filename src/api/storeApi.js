const API_URL = 'https://fakestoreapi.com';

// Получение всех товаров
export const getAllProducts = async () => {
  try {
    const response = await fetch(`${API_URL}/products`);
    if (!response.ok) throw new Error('Не удалось загрузить товары');
    return await response.json();
  } catch (error) {
    console.error('Ошибка при загрузке товаров:', error);
    throw error;
  }
};

// Получение одного товара по ID
export const getProductById = async (id) => {
  try {
    const response = await fetch(`${API_URL}/products/${id}`);
    if (!response.ok) throw new Error('Не удалось загрузить товар');
    return await response.json();
  } catch (error) {
    console.error(`Ошибка при загрузке товара с ID ${id}:`, error);
    throw error;
  }
};

// Получение категорий товаров
export const getCategories = async () => {
  try {
    const response = await fetch(`${API_URL}/products/categories`);
    if (!response.ok) throw new Error('Не удалось загрузить категории');
    return await response.json();
  } catch (error) {
    console.error('Ошибка при загрузке категорий:', error);
    throw error;
  }
};

// Получение товаров по категории
export const getProductsByCategory = async (category) => {
  try {
    const response = await fetch(`${API_URL}/products/category/${category}`);
    if (!response.ok) throw new Error(`Не удалось загрузить товары из категории ${category}`);
    return await response.json();
  } catch (error) {
    console.error(`Ошибка при загрузке товаров из категории ${category}:`, error);
    throw error;
  }
};

// Заглушка для имитации оформления заказа
export const submitOrder = async (orderData) => {
  return new Promise((resolve) => {
    // Имитация сетевой задержки
    setTimeout(() => {
      resolve({
        success: true,
        orderId: `ORDER-${Date.now()}`,
        message: 'Заказ успешно оформлен'
      });
    }, 1500);
  });
}; 