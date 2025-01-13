const IHomeState = {
    hpomeSliceStatus: undefined,

    // Home Luggage Get Today Data ----
    homeLuggageGetTodayData: undefined,
    homeLuggageGetTodayDataStatus: undefined,

    // Home Luggage Get Past Data ----
    homeLuggageGetPastData: undefined,
    homeLuggageGetPastDataStatus: undefined
};

const IHomeError = {
    status: undefined,
    success: undefined,
    error: undefined
};

// Home Luggage Get Today Data ResponseBody ---- 
const IHomeLuggageGetTodayDataResponseBody = {
    success: '',
    data: {
        orders: [
            {
                _id: '',
                domain: '',
                dropOffDate: '',
                dropOffTime: '',
                pickupDate: '',
                pickupTime: '',
                bags: '',
                insurance: false,
                flexiblePickup: '',
                days: '',
                totalAmount: '',
                name: '',
                email: '',
                phone: '',
                note: '',
                status: '',
                payment_type: '',
                createdAt: '',
                environment: ''
            },
        ],
        count: '',
        totalAmount: '',
        pagination: {
            currentPage: 0,
            totalPages: 0,
            limit: 0,
            hasNextPage: false,
            hasPrevPage: false
        }
    }
};
// End Home Luggage Get Today Data ResponseBody  ---

// Home Luggage Get Past Data RequestBody ----
const IHomeLuggageGetPastDataRequestBody = {
    period: '',
};

// Home Luggage Get Past Data ResponseBody ----
const IHomeLuggageGetPastDataResponseBody = {
    success: '',
    data: {
        orders: [
            {
                _id: '',
                domain: '',
                dropOffDate: '',
                dropOffTime: '',
                pickupDate: '',
                pickupTime: '',
                bags: '',
                insurance: false,
                flexiblePickup: '',
                days: '',
                totalAmount: '',
                name: '',
                email: '',
                phone: '',
                note: '',
                status: '',
                payment_type: '',
                createdAt: '',
                environment: ''
            },
        ],
        count: '',
        totalAmount: '',
        pagination: {
            currentPage: 0,
            totalPages: 0,
            limit: 0,
            hasNextPage: false,
            hasPrevPage: false
        }
    }
};
// End Home Luggage Get Past Data ResponseBody ----
