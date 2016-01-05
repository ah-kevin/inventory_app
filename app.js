System.register(["angular2/core", "angular2/platform/browser"], function(exports_1) {
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1, browser_1;
    var Product, ProductImage, PriceDisplay, ProductDepartment, ProductRow, ProductList, InventoryApp;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (browser_1_1) {
                browser_1 = browser_1_1;
            }],
        execute: function() {
            Product = (function () {
                function Product(sku, name, imageUrl, department, price) {
                    this.sku = sku;
                    this.name = name;
                    this.imageUrl = imageUrl;
                    this.department = department;
                    this.price = price;
                }
                return Product;
            })();
            ProductImage = (function () {
                function ProductImage() {
                }
                ProductImage = __decorate([
                    core_1.Component({
                        selector: 'product-iamge',
                        host: { 'class': 'ui small image' },
                        inputs: ['product'],
                        template: "\n        <img class=\"product-image\" [src]=\"product.imageUrl\">\n    "
                    }), 
                    __metadata('design:paramtypes', [])
                ], ProductImage);
                return ProductImage;
            })();
            PriceDisplay = (function () {
                function PriceDisplay() {
                }
                PriceDisplay = __decorate([
                    core_1.Component({
                        selector: 'price-display',
                        inputs: ['price'],
                        template: "\n<div class=\"price-display\">${{ price }}</div> "
                    }), 
                    __metadata('design:paramtypes', [])
                ], PriceDisplay);
                return PriceDisplay;
            })();
            ProductDepartment = (function () {
                function ProductDepartment() {
                }
                ProductDepartment = __decorate([
                    core_1.Component({
                        selector: 'product-department',
                        inputs: ['product'],
                        template: "\n<div class=\"product-department\">\n<span *ngFor=\"#name of product.department; #i=index\">\n<a href=\"#\">{{ name }}</a>\n<span>{{i < (product.department.length-1) ? '>' : ''}}</span>\n    </span>\n  </div>\n"
                    }), 
                    __metadata('design:paramtypes', [])
                ], ProductDepartment);
                return ProductDepartment;
            })();
            ProductRow = (function () {
                function ProductRow() {
                }
                ProductRow = __decorate([
                    core_1.Component({
                        selector: "product-row",
                        inputs: ['product'],
                        host: { 'class': 'item' },
                        directives: [ProductImage, ProductDepartment, PriceDisplay],
                        template: "\n<product-iamge [product]=\"product\"></product-iamge>\n<div class=\"content\">\n    <div class=\"header\">{{ product.name }}</div>\n    <div class=\"meta\">\n        <div class=\"product-sku\">SKU #{{ product.sku }}</div>\n    </div>\n    <div class=\"description\">\n        <product-department [product]=\"product\"></product-department>\n    </div>\n</div>\n<price-display [price]=\"product.price\"></price-display>\n    "
                    }), 
                    __metadata('design:paramtypes', [])
                ], ProductRow);
                return ProductRow;
            })();
            ProductList = (function () {
                function ProductList() {
                    this.onProductSelected = new core_1.EventEmitter();
                }
                ProductList.prototype.clicked = function (product) {
                    this.currentProduct = product;
                    this.onProductSelected.emit(product);
                };
                ProductList.prototype.isSelected = function (product) {
                    if (!product || !this.currentProduct) {
                        return false;
                    }
                    return product.sku === this.currentProduct.sku;
                };
                ProductList = __decorate([
                    core_1.Component({
                        selector: "product-list",
                        directives: [ProductRow],
                        inputs: ['productList'],
                        outputs: ['onProductSelected'],
                        template: "\n\n    <div class=\"ui items\">\n        <product-row\n            *ngFor=\"#myProduct of productList\"\n            [product]=\"myProduct\"\n            (click)=\"clicked(myProduct)\"\n            [class.selected]=\"isSelected(myProduct)\"\n        >\n\n        </product-row>\n    </div>\n\n    "
                    }), 
                    __metadata('design:paramtypes', [])
                ], ProductList);
                return ProductList;
            })();
            InventoryApp = (function () {
                function InventoryApp() {
                    this.products = [
                        new Product('MYSHOES', 'Black Running Shoes', '/resources/images/products/black-shoes.jpg', ['Men', 'Shoes', 'Running Shoes'], 109.99),
                        new Product('NEATOJACKET', 'Blue Jacket', '/resources/images/products/blue-jacket.jpg', ['Women', 'Apparel', 'Jackets & Vests'], 238.99),
                        new Product('NICEHAT', 'A Nice Black Hat', '/resources/images/products/black-hat.jpg', ['Men', 'Accessories', 'Hats'], 29.99)
                    ];
                }
                InventoryApp.prototype.productWasSelected = function (product) {
                    console.log('Product clicked: ', product);
                };
                InventoryApp = __decorate([
                    core_1.Component({
                        selector: "inventory-app",
                        directives: [ProductList],
                        template: "\n        <div class=\"inventory-app\">\n               <product-list\n                [productList]=\"products\"\n\n                (onProductSelected)=\"productWasSelected($event)\"\n                >\n               </product-list>\n        </div>\n    "
                    }), 
                    __metadata('design:paramtypes', [])
                ], InventoryApp);
                return InventoryApp;
            })();
            browser_1.bootstrap(InventoryApp);
        }
    }
});
//# sourceMappingURL=app.js.map