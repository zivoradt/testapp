import {ActiveState} from "./state/state.js";
import {appendOptionsHelper, exportSelectedValue} from "./helpers/select-helper.js";
import {
    CAMERA_FILTER_NAME,
    COLOR_FILTER_NAME,
    DEFAULT_CAMERA_FILTER_VALUES,
    DEFAULT_COLOR_FILTER_VALUES,
    DEFAULT_SIM_FILTER_VALUES,
    DEFAULT_SORT_FILTER_VALUES, INITIAL_PRODUCTS, SIM_FILTER_NAME, SORT_FILTER_NAME
} from "./constants/constants.js";
import {SortFilter} from "./models/filters/sort-filter.js";
import {ColorFilter} from "./models/filters/color-filter.js";
import {SimFilter} from "./models/filters/sim-filter.js";
import {CameraFilter} from "./models/filters/camera-filter.js";

const scrollToTop = () => {
    const c = document.documentElement.scrollTop || document.body.scrollTop;
    if (c > 0) {
        window.requestAnimationFrame(scrollToTop);
        window.scrollTo(0, c - c / 8);
    }
};

export class Main{
    constructor() {
        this.activeState = new ActiveState(INITIAL_PRODUCTS);
    }

    bootstrap()
    {
        console.log('Feeding content');
        const sortSelect = document.getElementById('sort');
        const colorSelect = document.getElementById('color');
        const simSelect = document.getElementById('sim');
        const cameraSelect = document.getElementById('camera');
        const searchInput = document.getElementById('text_search');
        const searchButton = document.getElementById('search_button');
        const loadMoreButton = document.getElementById('load_more_button');
        const colorMatcher = document.querySelectorAll(".color__samples");
        

        appendOptionsHelper(sortSelect,DEFAULT_SORT_FILTER_VALUES);
        appendOptionsHelper(colorSelect,DEFAULT_COLOR_FILTER_VALUES);
        appendOptionsHelper(simSelect,DEFAULT_SIM_FILTER_VALUES);
        appendOptionsHelper(cameraSelect,DEFAULT_CAMERA_FILTER_VALUES);

        this.addEvent(sortSelect,SORT_FILTER_NAME);
        this.addEvent(colorSelect,COLOR_FILTER_NAME);
        this.addEvent(simSelect,SIM_FILTER_NAME);
        this.addEvent(cameraSelect,CAMERA_FILTER_NAME);

        this.activeState.addFilter(new SortFilter());
        this.activeState.addFilter(new ColorFilter());
        this.activeState.addFilter(new SimFilter());
        this.activeState.addFilter(new CameraFilter());

        

        searchButton.addEventListener('click',()=> {
            this.searchFunction(searchInput)
            sortSelect.selectedIndex = 0;
            colorSelect.selectedIndex = 0;
            simSelect.selectedIndex = 0;
            cameraSelect.selectedIndex = 0;
        })
        this.renderProducts();
        
        this.loadMore(loadMoreButton);
       
}

    renderProducts()
    {
        console.log('Rendering content');
        const productsContainer = document.getElementById('container');
        productsContainer.innerHTML='';
        let counter = 1;
        this.activeState.activeProducts.forEach(el=>{
                if(counter <= this.activeState.activeElements){
                    el.renderProduct(productsContainer)
                    counter++;
                }
        })
    }

    addEvent(selectEl,filterName)
    {
        selectEl.addEventListener('change',()=>{
            this.activeState.toggleFilter(filterName,exportSelectedValue(selectEl));
            this.renderProducts()
        });
    }

    searchFunction(searchInput){
        this.activeState.resetAllFilters()
        this.activeState.resetState()
        this.activeState.searchProducts(searchInput.value)
        this.renderProducts();
    }

    loadMore(buttonElement) {
        buttonElement.addEventListener('click', () => {
          this.loadButton(buttonElement)
          const currentActiveElements = this.activeState.activeElements;
          const newActiveElements = currentActiveElements === 6 ? 8 : 6;
          this.activeState.setNumberActiveElements(newActiveElements);
          this.renderProducts();
        });
      }

      loadButton(button) {
        const isShown = button.getAttribute('show') === 'true';
        button.textContent = isShown ? 'Show less products' : 'Load more products';
        button.setAttribute('show', isShown ? 'false' : 'true');
      }

     
      

    
    
}

new Main().bootstrap();
