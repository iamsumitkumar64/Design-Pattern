# Factory Pattern (Creational)

Delegates object creation to a dedicated factory class/method instead of instantiating concrete classes directly with `new`.

---

### The Problem (`issue code.ts`)
- **Tight Coupling:** `NotificationService` directly instantiates concrete classes (`new SendMail()`, `new SendSMS()`).
- **Violates OCP:** Adding a new notification channel (e.g., WhatsApp) requires modifying `NotificationService` with more `if-else` branches.
- **Mixed Concerns:** Business logic is tangled with object creation logic.

### The Solution (`pattern code.ts`)
- **Common Interface:** All channels implement `NotificationInterface` (`notifyUser()`).
- **Centralized Creation:** `NotificationFactory.create(type)` encapsulates all `new` instantiation logic.
- **Loose Coupling:** `NotificationService` depends only on the interface and factory, remaining untouched when new channels are added.

### Key Takeaway
Use when you don't know exact types upfront or want to decouple object creation from business logic.
