import {Filter} from "../filter.js";
import {COLOR_FILTER_NAME} from "../../constants/constants.js";

export class ColorFilter extends Filter {
    constructor() {
        super();
        this.name = COLOR_FILTER_NAME
    }

    filterFunction(listProducts) {
        let filteredProducts = [];
        switch(this.selectedValue) {
            case 1:
                listProducts.forEach(el=>{
                    if (el.colors.includes("black"))
                        filteredProducts.push(el);
                })
                break;
            case 2:
                listProducts.forEach(el=>{
                    if (el.colors.includes("cream"))
                        filteredProducts.push(el);
                })
                break;
            case 3:
                listProducts.forEach(el=>{
                    if (el.colors.includes("lavender"))
                        filteredProducts.push(el);
                })
                break;
            case 4:
                listProducts.forEach(el=>{
                    if (el.colors.includes("green"))
                        filteredProducts.push(el);
                })
                break;
            case 5:
                listProducts.forEach(el=>{
                    if (el.colors.includes("Blue"))
                        filteredProducts.push(el);
                })
                break;
            default:
                filteredProducts = listProducts;
        }

        return filteredProducts;
    }
}
