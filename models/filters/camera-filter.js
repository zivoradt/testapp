import {Filter} from "../filter.js";
import {CAMERA_FILTER_NAME} from "../../constants/constants.js";
export class CameraFilter extends Filter{
    constructor() {
        super();
        this.name = CAMERA_FILTER_NAME
    }
    filterFunction(listProducts) {
        let filteredProducts = [];
        switch(this.selectedValue) {
            case 1:
                listProducts.forEach(el=>{
                    if (el.mainCamera > 48)
                        filteredProducts.push(el);
                })
                break;
            case 2:
                listProducts.forEach(el=>{
                    if (el.mainCamera === 48)
                        filteredProducts.push(el);
                })
                break;
            case 3:
                listProducts.forEach(el=>{
                    if (el.mainCamera < 48)
                        filteredProducts.push(el);
                })
                break;
            default:
                filteredProducts = listProducts;
        }

        return filteredProducts;
    }
}
