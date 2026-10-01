# Singleton Pattern (Creational)

Ensures a class has **only one instance** throughout the application lifecycle and provides a global access point to it.

---

### The Problem (`issue code.ts`)

- **Multiple Instances:** A public constructor allows `new Database(...)` to be called multiple times.
- **Resource Inefficiency:** Spawns duplicate connections/pools, wasting memory and risking inconsistent configuration or state across the app.

### The Solution (`pattern code.ts`)

- **Private Constructor:** Blocks direct instantiation with `new` from outside the class.
- **Static Cached Instance:** Stores the single shared instance in a private static variable (`Database.instance`).
- **Global Access Method:** `Database.getInstance()` initializes the instance on first access (lazy initialization) and returns the cached instance on subsequent calls.

### Key Takeaway

Use when exactly one shared instance must coordinate actions across an application (e.g., database connections, config stores, loggers).
