// Interfaces for Products
export interface IButton {
    paint(): void;
}
export interface ICheckBox {
    paint(): void;
}




// Window Products
export class WindowButton implements IButton {
    public paint() {
        console.log("Window Button painted");
    }
}
export class WindowCheckBox implements ICheckBox {
    public paint() {
        console.log("Window CheckBox painted");
    }
}




// Mac Products
export class MacButton implements IButton {
    public paint() {
        console.log("Mac Button painted");
    }
}
export class MacCheckBox implements ICheckBox {
    public paint() {
        console.log("Mac CheckBox painted");
    }
}




// Application Utilities
export interface IApplication {
    button: IButton,
    checkbox: ICheckBox
}
type TApplication = "Mac" | "Windows"




// Application creational
export class Application {
    private currType: TApplication;
    private currApplication: IApplication;

    constructor(type: TApplication) {
        this.currType = type;
        this.currApplication = {
            button: {} as IButton,
            checkbox: {} as ICheckBox
        };
    }

    public CreateApplication() {
        if (this.currType === "Windows") {
            this.currApplication.button = new WindowButton();
            this.currApplication.checkbox = new WindowCheckBox();

            return this.currApplication;
        } else if (this.currType === "Mac") {
            this.currApplication.button = new MacButton();
            this.currApplication.checkbox = new MacCheckBox();

            return this.currApplication;
        }
    }
}




const app = new Application("Windows");
const obj = app.CreateApplication();
console.log(obj);


// issue
// The Application class knows about all concrete products.
// So if tomorrow you add Linux then you have to modify Application