import {Filter} from "../filter.js";
import {SORT_FILTER_NAME} from "../../constants/constants.js";

export class SortFilter extends Filter{
    constructor() {
        super();
        this.name = SORT_FILTER_NAME
    }

    sortFunction(listProducts) {
        let sortedProducts = [];
        switch(this.selectedValue) {
            case 1:
                sortedProducts = listProducts.sort(
                    (a, b) => b.price - a.price
                );
                break;
            case 2:
                sortedProducts = listProducts.sort(
                    (a, b) => a.price - b.price
                );
                break;
            case 3:
                sortedProducts = listProducts.sort(
                    (a, b) => b.mainCamera - a.mainCamera
                );
                break;
            case 4:
                sortedProducts = listProducts.sort(
                    (a, b) => a.mainCamera - b.mainCamera
                );
                break;
            default:
                sortedProducts = listProducts
        }

        return sortedProducts;
    }
}
