import {Option} from "../models/option.js";
import {Product} from "../models/product.js";

export const DEFAULT_SORT_FILTER_VALUES = [
    new Option('Choose a way to sort',0),
    new Option('Price (High to low)',1),
    new Option('Price (Low to high)',2),
    new Option('Camera (High to low)',3),
    new Option('Camera (Low to high)',4)];
export const DEFAULT_COLOR_FILTER_VALUES = [
    new Option('Choose color',0),
    new Option('Black',1),
    new Option('Cream',2),
    new Option('Lavender',3),
    new Option('Green',4),
    new Option('Blue',5)
];
export const DEFAULT_SIM_FILTER_VALUES = [
    new Option('Choose SIM type',0),
    new Option('Single SIM',1),
    new Option('Dual SIM',2)
];
export const DEFAULT_CAMERA_FILTER_VALUES = [
    new Option('Choose camera', 0),
    new Option('More than 48MP',1),
    new Option('48MP',2),
    new Option('Less than 48MP',3)
];
export const INITIAL_PRODUCTS = [
    new Product(
        "GalaxyS",
        "Galaxy S23 Ultra",
        29000,
        ["green", "phantom black", "lavender", "cream"],
        200,
        "Dual SIM",
        "https://www.samsung.com/za/smartphones/galaxy-s23-ultra",
        "assets/s-series/GalaxyS23Ultra_Green.png",
        "green"
    ),
    new Product(
        "GalaxyS",
        "Galaxy S23",
        19500,
        ["lavender", "cream", "phantom black", "green"],
        50,
        "Dual SIM",
        "https://www.samsung.com/za/smartphones/galaxy-s23",
        "assets/s-series/GalaxyS23_Lavender.png",
        "lavender"
    ),
    new Product(
        "GalaxyS",
        "Galaxy S23 Plus",
        23750,
        ["lavender", "cream", "phantom black", "green"],
        50,
        "Dual SIM",
        "https://www.samsung.com/za/smartphones/galaxy-s23",
        "assets/s-series/GalaxyS23Plus_Cream.png",
        "cream"
    ),
    new Product(
        "GalaxyA",
        "Galaxy A04",
        2750,
        ["black", "deep green"],
        50,"Dual SIM",
        "https://www.samsung.com/za/smartphones/galaxy-a",
        "assets/a-series/GalaxyA04_DeepGreen.png",
        "deep green"
    ),
    new Product(
        "GalaxyA",
        "Galaxy A04e",2160,
        ["light blue", "black"],
        13,
        "Single SIM",
        "https://www.samsung.com/za/smartphones/galaxy-a",
        "assets/a-series/GalaxyA04e_LightBlue.png",
        "light blue"
    ),
    new Product(
        "GalaxyA",
        "Galaxy A14",
        3750,
        ["black", "light green"],
        13,
        "Single SIM",
        "https://www.samsung.com/za/smartphones/galaxy-a",
        "assets/a-series/GalaxyA14_LightGreen.png",
        "light green"
    ),
    new Product(
        "GalaxyZ",
        "Z-Fold4",
        27500,
        ["beige", "phantom black", "gray green"],
        48,
        "Dual SIM",
        "https://www.samsung.com/za/smartphones/galaxy-z-fold4",
        "assets/z-series/Z-Fold4-Phantomblack.png",
        "phantom black"
    ),
    new Product(
        "GalaxyZ",
        "Z-Flip4",
        23450,
        ["blue", "bora purple", "graphite", "pink gold"],
        50,
        "Single SIm",
        "https://www.samsung.com/za/smartphones/galaxy-z-flip4",
        "assets/z-series/Z-Flip4-BoraPurple.png",
        "bora purple"
    )
];
export const CAMERA_FILTER_NAME = 'camera-filter'
export const COLOR_FILTER_NAME = 'color-filter'
export const SIM_FILTER_NAME = 'sim-filter'
export const SORT_FILTER_NAME = 'sort-filter'


