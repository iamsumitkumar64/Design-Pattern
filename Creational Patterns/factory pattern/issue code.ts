export class SendSMS {
    public notifyUser() {
        console.log("SMS Sent");
    }
}

export class SendMail {
    public notifyUser() {
        console.log("Mail Sent");
    }
}

type NotifyType = "EMAIL" | "SMS";

class NotificationService {
    public static sendNotification(type: NotifyType) {
        if (type === "EMAIL") {
            const email = new SendMail();
            email.notifyUser();
        } else if (type === "SMS") {
            const sms = new SendSMS();
            sms.notifyUser();
        }
    }
}

NotificationService.sendNotification("EMAIL");

// if need new then extend this if-else
// messy code