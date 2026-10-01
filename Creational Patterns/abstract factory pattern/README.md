# Abstract Factory Pattern (Creational)

Provides an interface to create **families of related or dependent objects** without specifying their concrete classes.

---

### The Problem (`issue code.ts`)
- **Direct Concrete Dependencies:** `Application` directly instantiates concrete classes (`new WindowButton()`, `new MacCheckBox()`).
- **Risk of Mismatched Products:** Nothing prevents mixing incompatible components (e.g., a Windows button with a Mac checkbox).
- **Violates OCP:** Adding a new OS/family (e.g., Linux) forces modifications inside the `Application` class.

### The Solution (`pattern code.ts`)
- **Family Factory Interface:** `GUIFactory` defines creation methods for the entire suite (`createButton()`, `createCheckBox()`).
- **Concrete Family Factories:** `WindowsFactory` and `MacFactory` guarantee all returned components match the same family.
- **Dependency Injection:** `Application` receives any `GUIFactory` through its constructor without knowing concrete classes.

### Factory vs. Abstract Factory
- **Factory:** Creates **one** product (e.g., Mail vs. SMS).
- **Abstract Factory:** Creates a **family** of related products (e.g., Windows Button + Windows CheckBox).

### Key Takeaway
Use when your system must produce cohesive families of products and prevent incompatible mixing.
