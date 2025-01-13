import { AUTH_BASE_URL } from "../../../../env";
import { requests } from "../api";


// Home Luggage Get Today Data Service ----
export function requestHomeLuggageGetTodayDataService() {
    return requests.get(`${AUTH_BASE_URL}/orders`);
}
// End Home Luggage Get Today Data ----

// Home Luggage Get Past Data Service ----
export function requestHomeLuggageGetPastDataService(params) {
    return requests.get(`${AUTH_BASE_URL}/orders?period=${params.period}`);
}
// End Home Luggage Get Past Data ----
