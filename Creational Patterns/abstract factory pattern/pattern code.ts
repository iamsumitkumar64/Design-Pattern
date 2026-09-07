// Interfaces for Products
export interface IButton {
    paint(): void;
}

export interface ICheckBox {
    paint(): void;
}



// Window Products
export class WindowButton implements IButton {
    public paint(): void {
        console.log("Window Button painted");
    }
}
export class WindowCheckBox implements ICheckBox {
    public paint(): void {
        console.log("Window CheckBox painted");
    }
}



// Mac Products
export class MacButton implements IButton {
    public paint(): void {
        console.log("Mac Button painted");
    }
}
export class MacCheckBox implements ICheckBox {
    public paint(): void {
        console.log("Mac CheckBox painted");
    }
}




// Application Utilities
export interface IApplication {
    button: IButton;
    checkbox: ICheckBox;
}

// Abstract Factory
export interface IGUIFactory {
    createButton(): IButton;
    createCheckBox(): ICheckBox;
}





// Windows Factory
export class WindowsFactory implements IGUIFactory {
    public createButton(): IButton {
        return new WindowButton();
    }
    public createCheckBox(): ICheckBox {
        return new WindowCheckBox();
    }
}




// Mac Factory
export class MacFactory implements IGUIFactory {
    public createButton(): IButton {
        return new MacButton();
    }
    public createCheckBox(): ICheckBox {
        return new MacCheckBox();
    }
}




// Application
export class Application {
    private currApplication: IApplication;

    constructor(factory: IGUIFactory) {
        this.currApplication = {
            button: factory.createButton(),
            checkbox: factory.createCheckBox()
        };
    }

    public CreateApplication(): IApplication {
        return this.currApplication;
    }
}





// Windows
const windowsApp = new Application(new WindowsFactory());
const windowsObj = windowsApp.CreateApplication();
console.log(windowsObj);






// Mac
const macApp = new Application(new MacFactory());
const macObj = macApp.CreateApplication();
console.log(macObj);









// if need to add linux then dont need to modify APplication

// Linux Products
export class LinuxButton implements IButton {
    public paint(): void {
        console.log("Linux Button painted");
    }
}
export class LinuxCheckBox implements ICheckBox {
    public paint(): void {
        console.log("Linux CheckBox painted");
    }
}



// Linux Factory
export class LinuxFactory implements IGUIFactory {
    public createButton(): IButton {
        return new LinuxButton();
    }
    public createCheckBox(): ICheckBox {
        return new LinuxCheckBox();
    }
}



const linuxApp = new Application(new LinuxFactory());
const linuxObj = linuxApp.CreateApplication();
console.log(linuxObj);