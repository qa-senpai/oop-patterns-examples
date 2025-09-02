# OOP Patterns Examples

## 📁 Структура проекту

### 🏗️ Основи ООП (`classes-examples/`)

Приклади базових концепцій об'єктно-орієнтованого програмування:

- **`Employee.ts`** - Демонстрація наслідування з базовим класом `Employee` та підкласами `Developer`, `Tester`, `Designer`
- **`DriverLicense.ts`** - Простий клас для роботи з водійськими правами
- **`DriverLicence_WithIncapsulation.ts`** - Той самий клас, але з демонстрацією інкапсуляції (приватні поля)
- **`Document.ts`** - Приклад роботи з документами
- **`House.ts`** - Базовий клас будинку

### 🎯 Design Patterns

#### 1. Singleton Pattern (`singleton-pattern-example/`)

**Файл:** `Auth.ts`

Патерн, що гарантує існування лише одного екземпляру класу в додатку.

**Ключові елементи:**

- Приватний конструктор
- Статичне поле `instance`
- Статичний метод `getInstance()`
- Lazy initialization

**Переваги:**

- ✅ Єдиний екземпляр класу
- ✅ Глобальна точка доступу
- ✅ Економія пам'яті

```typescript
const auth = Auth.getInstance(); // Завжди поверне той самий екземпляр
```

#### 2. Factory Pattern (`factory-pattern-examples/`)

**Файли:**

- `PageObjectFactory.ts` - Фабрика для створення page objects
- `TestDataFactory.example.ts` - Фабрика для створення тестових даних

Патерн для створення об'єктів без вказівки точного класу об'єкта.

**Переваги:**

- ✅ Відокремлення логіки створення об'єктів
- ✅ Легке додавання нових типів об'єктів
- ✅ Централізоване управління створенням

#### 3. Builder Pattern (`builder-pattern-examples/`)

**Файл:** `request.spec.ts`

Патерн для покрокового створення складних об'єктів.

**Особливості:**

- Fluent API (ланцюжок викликів)
- Можливість створення об'єктів з різними конфігураціями
- Читабельний код для створення складних структур

```typescript
const booking = new BookingBuilder()
  .withFirstName("John")
  .withLastName("Smith")
  .build();
```

#### 4. Page Object Pattern (`pageObject-pattern-example/`)

Патерн для організації автоматизованих тестів UI.

**Переваги:**

- ✅ Відокремлення логіки тесту від деталей UI
- ✅ Багаторазове використання коду
- ✅ Легке обслуговування при змінах UI

#### 5. Barrel Export Pattern (`barrelExport-pattern-example/`)

**Файл:** `index.ts`

Патерн для централізованого експорту модулів.

**Переваги:**

- ✅ Спрощення імпортів
- ✅ Інкапсуляція структури проекту
- ✅ Легший рефакторинг

```typescript
// Замість багатьох імпортів
import { LoginPage } from "./pages/LoginPage/LoginPage";
import { ProductsPage } from "./pages/ProductsPage/ProductsPage";

// Один імпорт
import { LoginPage, ProductsPage } from "./pages";
```

### Запуск тестів

```bash
# Встановлення залежностей
npm install

# Запуск всіх тестів
npx playwright test

# Запуск конкретного тесту
npx playwright test login.spec.ts

# Показати звіт
npx playwright show-report
```

## 📚 Навчальні цілі

Цей репозиторій створено для вивчення:

1. **Основних принципів ООП:**

   - Інкапсуляція
   - Наслідування
   - Поліморфізм
   - Абстракція

2. **Design Patterns:**

   - Creational Patterns (Singleton, Factory, Builder)
   - Structural Patterns (Page Object)
   - Behavioral Patterns

3. **Організації тестового коду:**

   - Page Object Pattern
   - Component-based architecture
   - Barrel exports

4. **TypeScript особливостей:**
   - Типізація
   - Інтерфейси
   - Класи та абстрактні класи

## 🚀 Розпочати роботу

```bash
# Клонувати репозиторій
git clone <repository-url>

# Перейти в директорію
cd oop-practice

# Встановити залежності
npm install

# Встановити браузери для Playwright
npx playwright install
```

## 📖 Додаткові ресурси

- [TypeScript Documentation](https://www.typescriptlang.org/docs/)
- [Playwright Documentation](https://playwright.dev/)
- [Design Patterns](https://refactoring.guru/design-patterns)

---

**Автор:** qa-senpai  
**Репозиторій:** oop-patterns-examples
