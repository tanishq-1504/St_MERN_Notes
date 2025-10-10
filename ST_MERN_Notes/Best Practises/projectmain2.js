// 🚗 Driver and Rider Data Stores
let drivers = [];
let rideRequests = [];

// 🧍 Add a new driver
function addDriver(name, location) {
  drivers.push({ name, location, available: true });
  console.log(`Driver ${name} added at ${location}`);
}

// 🙋 Add a new ride request
function requestRide(riderName, pickup, drop) {
  const ride = { riderName, pickup, drop, status: 'Pending' };
  rideRequests.push(ride);
  console.log(`Ride requested by ${riderName} from ${pickup} to ${drop}`);
  matchRide(ride);
}

// 🔄 Match ride to available driver
function matchRide(ride) {
  const availableDriver = drivers.find(d => d.available && d.location === ride.pickup);
  if (availableDriver) {
    availableDriver.available = false;
    ride.status = 'Accepted';
    ride.driver = availableDriver.name;
    console.log(`Ride accepted by ${availableDriver.name}`);
  } else {
    console.log('No available driver at pickup location');
  }
}

// ✅ Complete a ride
function completeRide(riderName) {
  const ride = rideRequests.find(r => r.riderName === riderName && r.status === 'Accepted');
  if (ride) {
    const driver = drivers.find(d => d.name === ride.driver);
    driver.available = true;
    ride.status = 'Completed';
    console.log(`Ride completed by ${ride.driver} for ${riderName}`);
  } else {
    console.log('No active ride found for this rider');
  }
}

// 📊 Show all rides
function showRides() {
  console.log('--- Ride History ---');
  rideRequests.forEach(r => {
    console.log(`${r.riderName}: ${r.pickup} → ${r.drop} | ${r.status} ${r.driver ? '| Driver: ' + r.driver : ''}`);
  });
}

// 🧪 Sample Usage
addDriver('Amit', 'Banjara Hills');
addDriver('Sara', 'Shaikpet');

requestRide('Tanishq', 'Shaikpet', 'Gachibowli');
requestRide('Riya', 'Banjara Hills', 'Madhapur');

completeRide('Tanishq');
showRides();