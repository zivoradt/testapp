import {Filter} from "../filter.js";
import {SIM_FILTER_NAME} from "../../constants/constants.js";

export class SimFilter extends Filter{
    constructor() {
        super();
        this.name = SIM_FILTER_NAME
    }

    filterFunction(listProducts) {
        let filteredProducts = [];
        switch(this.selectedValue) {
            case 1:
                listProducts.forEach(el=>{
                    if (el.sim.includes("Single SIM"))
                        filteredProducts.push(el);
                })
                break;
            case 2:
                listProducts.forEach(el=>{
                    if (el.sim.includes("Dual SIM"))
                        filteredProducts.push(el);
                })
                break;
            default:
                filteredProducts = listProducts;
        }

        return filteredProducts;
    }
}
