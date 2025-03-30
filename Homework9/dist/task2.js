"use strict";
var PackageStatus;
(function (PackageStatus) {
    PackageStatus[PackageStatus["Pending"] = 0] = "Pending";
    PackageStatus[PackageStatus["InTransit"] = 1] = "InTransit";
    PackageStatus[PackageStatus["Delivered"] = 2] = "Delivered";
    PackageStatus[PackageStatus["Lost"] = 3] = "Lost";
})(PackageStatus || (PackageStatus = {}));
const item = {
    id: 224,
    weight: 22.5,
    dimensions: {
        length: 105,
        width: 44,
        height: 50.5
    },
    sender: "Nick Scot",
    description: "Super power inside.",
    status: PackageStatus.Pending,
    deliver(isSuccess) {
        this.status = isSuccess
            ? PackageStatus.Delivered
            : PackageStatus.Lost;
    },
    get statusName() {
        return PackageStatus[this.status];
    }
};
item.deliver(true);
console.log(item.statusName);
