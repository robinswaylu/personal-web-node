(function() {
  var app = angular.module('gemStore', ['store-directives']);

  app.controller('StoreController', function(){
    this.products = gems;
  });

  app.controller('ReviewController', function() {
    this.review = {};

    this.addReview = function(product) {
      product.reviews.push(this.review);

      this.review = {};
    };
  });

   

  var gems = [{
      name: '2016 Mazda 3 ',
      description: "Purposeful styling, fuel-efficient engines and an ideal ride and handling balance keep the 2015 Mazda 3 among our favorites in the compact car class.",
      cool: 184,
      price: 17845,
      rarity: 26,
      color: 'Red',
      faces: 140,
      images: [
        "m3.jpg",
        "m32.jpg",
        "m33.jpg"
      ],
      reviews: []
    }, {
      name: '2016 BMW i3',
      description: "For electric vehicle shoppers desiring some sportiness and luxury-brand panache, the 2015 BMW i3 is a very compelling choice. That the i3 is also surprisingly practical only furthers its appeal.",
      cool: 170,
      price: 42400,
      rarity: 127,
      color: 'Blue',
      faces: 92,
      images: [
        "i.jpg",
        "i2.jpg",
        "i3.jpg",
      ],
      reviews: []
    }, {
      name: 'Tesla Model S',
      description: "As both the ultimate eco-friendly luxury car and an absurdly fast sports sedan, we simply love the Model S. With an aptly named “Ludicrous Mode,” the top-spec, all-wheel-drive P90D hits 60 mph in 2.8 seconds. And yes, the optional Autopilot can do the driving for you in certain situations. The other trim levels offer varying performance and range as you move down the lineup, but all offer a classy cabin and electrifying driving experience. We gave the Model 70 and 70D a 10Best award for 2016.",
      cool: '329 to 691',
      price: 71100,
      rarity: 101,
      color:'Black',
      faces: 140,
      images: [
        "t.jpg",
        "t2.jpg",
        "t3.jpg"
      ],
      reviews: []
    }];
})();
