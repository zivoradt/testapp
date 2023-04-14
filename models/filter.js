export class Filter{
    constructor() {
        this.selectedValue = 0;
        this.isActive = false;
    }

    filterFunction(listProducts){
        return listProducts;
    };

    sortFunction(listProducts){
        return listProducts;
    };
}
