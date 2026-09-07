interface NotificationInterface {
    notifyUser(): void;
}

class SendSMS implements NotificationInterface {
    notifyUser() {
        console.log("SMS Sent");
    }
}

class SendMail implements NotificationInterface {
    notifyUser() {
        console.log("Mail Sent");
    }
}

class SendWhatsApp implements NotificationInterface {
    notifyUser() {
        console.log("WhatsApp Sent");
    }
}

type NotifyType = "MAIL" | "SMS" | "WhatsApp";

// Factory
class NotificationFactory {
    static create(type: NotifyType): NotificationInterface {
        switch (type) {
            case "SMS": return new SendSMS();
            case "MAIL": return new SendMail();
            case "WhatsApp": return new SendWhatsApp();
            default:
                throw new Error(`Invalid Notify type`);
        }
    }
}

class NotificationService {
    public static sendNotification(type: NotifyType) {
        const notification = NotificationFactory.create(type);
        notification.notifyUser();
    }
}

NotificationService.sendNotification("WhatsApp");