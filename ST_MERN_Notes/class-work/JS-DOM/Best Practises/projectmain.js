//matchDriver+
//calculateFare+
//processPayment+
//createRide-
//saveRide-
//requestRide +
const DRIVERS = [
    { id: "D001", name: "Harshit", available: true },
    { id: "D002", name: "Kaushik", available: true },
    { id: "D003", name: "Kanishk", available: false }
]
const RIDERS = [
    { id: "R001", name: "Tanishq", walletBalance: 1000 },
    { id: "R002", name: "Starboy", walletBalance: 400 }
];
let RIDES = [];

function matchDriver(drivers) {
    for (const driver of drivers) {
        if (driver.available) {
            console.log(`Driver ${driver.name} is available and ready to ride`);
            return driver;
        }
    }
    console.log("No drivers available");
    return null;
}

function calculateFare(distance) {
    const fare = distance * 20;
    return fare;
}
function requestRide(riderId, distance) {
    const rider = RIDERS.find(r => r.id === riderId);
    if (!rider) {
        console.log("Rider not found");
        return;
    }
    const driver = matchDriver(DRIVERS);
    if (!driver) return;
    const fare = calculateFare(distance);
    if (processPayment(rider, fare)) {
        console.log(`Ride booked with ${driver.name} for ${distance} km. Fare: ${fare}`);
    }
}
function processPayment(rider, fare) {
    if (!rider || fare <= 0) {
        console.log('Invalid payment details');
        return false;
    }
    if (rider.walletBalance < fare) {
        console.log('Insufficient balance');
        return false;
    }
    rider.walletBalance -= fare;
    console.log(`Payment successful. Remaining balance: ${rider.walletBalance}`);
    return true;
}

requestRide("R001", 20);

