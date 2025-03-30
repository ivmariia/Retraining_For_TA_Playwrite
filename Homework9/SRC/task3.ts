interface Printable {
    print(): void;
}

abstract class User {
    private static nextId = 1000;
    public readonly id: number;
    public email: string;
    private password!: string;

    constructor(email: string, password: string) {
        this.id = User.nextId++;
        this.email = email;
        this.setPassword(password);
    }

    public changePassword(newPassword: string): void {
        this.setPassword(newPassword);
    }

    private setPassword(newPassword: string): void {
        if (newPassword.length < 6) {
            console.log("Password too short!");
        } else {
            this.password = newPassword;
        }
    }

    public get passwordPreview(): string {
        if (!this.password) return "";
        if (this.password.length <= 2) return this.password;

        return this.password[0] +
            "*".repeat(this.password.length - 2) +
            this.password[this.password.length - 1];
    }

    abstract showProfile(): void;
}

class Admin extends User implements Printable {
    public isActive: boolean = true;

    constructor(email: string, password: string) {
        super(email, password);
    }

    public showProfile(): void {
        if (this.isActive) {
            console.log(`https://softserve/profile/${this.id}`);
        } else {
            console.log("https://softserve/login");
        }
    }

    public print(): void {
        console.log("Admin");
    }
}

const admin = new Admin("admin@gmail.com", "Qwerty");

admin.changePassword("Weak");
console.log(admin.passwordPreview);  

admin.changePassword("Super-Pass");
console.log(admin.passwordPreview);  

admin.showProfile(); 
admin.isActive = false;
admin.showProfile(); 

admin.print();
