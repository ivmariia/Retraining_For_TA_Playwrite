"use strict";
class User {
    constructor(email, password) {
        this.id = User.nextId++;
        this.email = email;
        this.setPassword(password);
    }
    changePassword(newPassword) {
        this.setPassword(newPassword);
    }
    setPassword(newPassword) {
        if (newPassword.length < 6) {
            console.log("Password too short!");
        }
        else {
            this.password = newPassword;
        }
    }
    get passwordPreview() {
        if (!this.password)
            return "";
        if (this.password.length <= 2)
            return this.password;
        return this.password[0] +
            "*".repeat(this.password.length - 2) +
            this.password[this.password.length - 1];
    }
}
User.nextId = 1000;
class Admin extends User {
    constructor(email, password) {
        super(email, password);
        this.isActive = true;
    }
    showProfile() {
        if (this.isActive) {
            console.log(`https://softserve/profile/${this.id}`);
        }
        else {
            console.log("https://softserve/login");
        }
    }
    print() {
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
