# State Pattern (Behavioral)

Allows an object to alter its behavior when its internal state changes, avoiding tangled conditional branching.

---

### The Problem (`issue code.ts`)
- **Conditional Sprawl:** `getBook()` relies on nested, hardcoded `if-else` blocks checking user roles (`admin`, `librarian`, `student`) and book types.
- **Violates OCP:** Adding a new role (e.g., `guest`) or resource type requires modifying existing conditional logic.
- **Hard to Maintain:** Logic quickly becomes error-prone, brittle, and difficult to test as states grow.

### The Solution (`pattern code.ts`)
- **Declarative State Mapping:** Encapsulates state-to-permission mappings in a centralized lookup table (`PERMISSION_STATE`).
- **Clean Access Check:** `getBook()` delegates permission checks directly to the state definition rather than branching conditionals.
- **Easy Extension:** Adding new roles or permissions only requires updating the state map without touching core method logic.

### Key Takeaway
Use when an object's behavior changes dynamically based on its state/role to replace complex `switch`/`if-else` blocks with encapsulated state definitions.
