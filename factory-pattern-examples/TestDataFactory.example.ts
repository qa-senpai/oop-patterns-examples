interface User {
  email: string;
  password: string;
  firstName: string;
  lastName: string;
}

interface Product {
  id: string;
  name: string;
  price: number;
  category: string;
}

/*
 * Цілком ок використовувати подібні фабрики для підготовки тестових даних
 */

class TestDataFactory {
  private static userCounter = 0;
  private static productCounter = 0;

  static createValidUser(): User {
    this.userCounter++;
    return {
      email: `user${this.userCounter}@example.com`,
      password: "ValidPass123!",
      firstName: `TestUser${this.userCounter}`,
      lastName: "Doe",
    };
  }

  static createInvalidUser(): User {
    return {
      email: "invalid-email",
      password: "123", // надто короткий
      firstName: "",
      lastName: "",
    };
  }

  static createAdminUser(): User {
    return {
      email: "admin@example.com",
      password: "AdminPass123!",
      firstName: "Admin",
      lastName: "User",
    };
  }

  static createProduct(
    category: "electronics" | "clothing" | "books"
  ): Product {
    this.productCounter++;

    const productData = {
      electronics: {
        name: `Smartphone ${this.productCounter}`,
        price: 299.99,
        category: "electronics",
      },
      clothing: {
        name: `T-Shirt ${this.productCounter}`,
        price: 19.99,
        category: "clothing",
      },
      books: {
        name: `Book ${this.productCounter}`,
        price: 12.99,
        category: "books",
      },
    };

    return {
      id: `product_${this.productCounter}`,
      ...productData[category],
    };
  }

  static createProductList(
    count: number,
    category?: "electronics" | "clothing" | "books"
  ): Product[] {
    const products: Product[] = [];
    for (let i = 0; i < count; i++) {
      const productCategory =
        category || (["electronics", "clothing", "books"][i % 3] as any);
      products.push(this.createProduct(productCategory));
    }
    return products;
  }
}
