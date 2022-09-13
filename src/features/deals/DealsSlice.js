import { DEALS } from "../../app/shared/DEALS";

export const selectDealById = (id) => {
    return DEALS.find(
        (deal) => deal.id === parseInt(id)
    );
}

export const selectAllDeals = () => {
    return DEALS;
}