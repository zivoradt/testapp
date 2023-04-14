
export class ActiveState{
    constructor(initialProducts) {
        this.initialProducts = initialProducts;
        this.activeProducts = initialProducts;
        this.searchedProducts = [];
        this.filters = [];
        this.activeSearch = false;
        this.activeElements = 6;
    }

    resetState(search)
    {
        if (!search)
            this.activeProducts = this.initialProducts;
        else
            this.activeProducts = this.searchedProducts;
    }

    addFilter(filter)
    {
        this.filters.push(filter);
    }

    resetAllFilters(){
        this.filters.forEach(f=>{
            this.resetFilter(f)
        })
    }

    resetFilter(filter){
        console.log(`Reset filter ${filter.name}`)
        if (filter) {
            filter.isActive = false;
            filter.selectedValue = 0;
        }
    }

    toggleFilter(filterName,value,search=false){
        console.log(`Toggle filter ${filterName}`);
        const filter = this.filters.find(filter => filter.name === filterName)
        if (filter) {
            if(filter.selectedValue !== value)
                this.resetState(this.activeSearch)
            if(value === 0)
                return this.resetFilter(filter)

            filter.isActive = true;
            filter.selectedValue = value;

            this.filterProducts()
        }
    }

    getActiveFilters(){
        return this.filters.filter(filter => filter.isActive);
    }

    filterProducts(){
        let activeFilters = this.getActiveFilters()
        activeFilters.forEach(filter =>{
            this.activeProducts = filter.filterFunction(this.activeProducts)
            this.activeProducts = filter.sortFunction(this.activeProducts);
        })
    }

    searchProducts(text){
        this.activeSearch = true;
        this.activeProducts = this.activeProducts.filter((prod)=>{
            let searchText = text.toLowerCase();
            let prodModel = prod.model.toLowerCase();
            let prodSeries = prod.series.toLowerCase();

            if(prodModel.includes(searchText) || prodSeries.includes(searchText) || prod.colors.includes(searchText)) {
                return prod;
            }
        });
        this.searchedProducts = this.activeProducts;
    }

    setNumberActiveElements(number){
        this.activeElements = number;
    }

  
    

}



