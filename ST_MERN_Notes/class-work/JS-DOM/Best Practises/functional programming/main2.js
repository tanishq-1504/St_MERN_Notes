function calculateTotalPrice(orderItems) {
    return orderItems.reduce((total, item) => total + item.price * item.quantity, 0);
}
function applyDiscount(totalPrice, discountCoupon) {
    const discountPercentage = DISCOUNT_MAPPINGS[discountCoupon] || 0;
    return totalPrice - (totalPrice * discountPercentage / 100);
}
function processPayment(amount) {
    if (amount <= TANISHQ_WALLET_BALANCE) {
        TANISHQ_WALLET_BALANCE -= amount;
        return true;
    }
    return false;
}
function getAddressById(addressId) {
    return TANISHQ_ADDRESSES.find(address => address.id === addressId) || null;
}
function assignDeliveryPartner(order, partnerId = "DEL001") {
    const partner = DELIVERY_PARTNERS.find(p => p.id === partnerId);
    if (partner) {
        partner.drops.push(order);
        order.deliveryPartner = partnerId;
    }
}
function createOrder(orderItems, finalPrice, deliveryAddress) {
    return {
        orderId: `ORD${ORDERS.length + 1}`,
        orderItems,
        orderPrice: finalPrice,
        deliveryAddress,
        status: "PLACED"
    };
}
function placeAnOrder(orderItems, discountCoupon, addressId) {
    const totalPrice = calculateTotalPrice(orderItems);
    const finalPrice = applyDiscount(totalPrice, discountCoupon);

    if (!processPayment(finalPrice)) {
        console.log("Insufficient wallet balance!");
        return;
    }

    const deliveryAddress = getAddressById(addressId);
    if (!deliveryAddress) {
        console.log("Invalid address ID!");
        return;
    }

    const newOrder = createOrder(orderItems, finalPrice, deliveryAddress);
    assignDeliveryPartner(newOrder);
    ORDERS.push(newOrder);

    console.log("ORDERS: ", ORDERS);
    console.log("DELIVERY PARTNERS: ", DELIVERY_PARTNERS);
}
const TANISHQ_CART_ITEMS = [
    {
        name: "0 to 1",
        price: 100,
        quantity: 2,
        deliveryDateAndTime: "16-12-2025 10:30:00 AM"
    },
    {
        name: "Apple 17 pro max",
        price: 180000,
        quantity: 1,
        deliveryDateAndTime: "25-12-2025 9:00:00 AM"
    }
];

placeAnOrder(TANISHQ_CART_ITEMS, "XMAS30", "TANISHQ002");