interface NotificationInterface {
    notifyUser(): void;
}

export class SendSMS implements NotificationInterface {
    public notifyUser() {
        console.log("SMS Sent");
    }
}
export class SendMail implements NotificationInterface {
    public notifyUser() {
        console.log("Mail Sent");
    }
}

class NotificationService {
    private notification: NotificationInterface;
    constructor(notification: NotificationInterface) {
        this.notification = notification;
    }

    public sendNotification() {
        this.notification.notifyUser();
    }
}

const smsService = new NotificationService(new SendSMS());
smsService.sendNotification();





// new new just add this

class SendWhatsApp implements NotificationInterface {
    public notifyUser() {
        console.log("WhatsApp Sent");
    }
}

const whatsappService = new NotificationService(new SendWhatsApp());
whatsappService.sendNotification();