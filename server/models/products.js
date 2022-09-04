const mongoose = require('mongoose');


const productSchema = mongoose.Schema ({
    productName: {
        type: String,
        required: true,
    },
    inStock: {
        type: Number,
        required: true,
    },
    availStock: [
        {
            size: {
                type: String,
                required: true,
            },
            qty: {
                type: Number,
                required: true,
            },
            material: {
                type: String,
                required: true,
            },
            colour: {
                type: String,
                required: true,
            }
        }
    ],
    cost: {
        type: Number,
        required: true,
    },
    description: {
        type: String,
        required: true,
    }   
})

module.exports = mongoose.model('products', productSchema); // ADD products orders users (no schema in users)

// const products = {
//     inventory:[
//     {
//         id: 1,
//         productName: 'Flat Collar', 
//         inStock: 52, 
//         availStock: [
//             {
//                 size: "XS", 
//                 qty: 16, 
//                 material: [
//                     {
//                         nylon: 2,
//                         leather: 2,
//                         metal: 0,
//                         cotton: 3
//                     }
//                 ],
//                 colour: [
//                     {
//                         brown: 3,
//                         black: 1,
//                         blue: 3,
//                         pink: 2
//                     }
//                 ]
//             }, 
//             {
//                 size: "S", 
//                 qty: 20, 
//                 leashAttatchment: "yes",
//                 material: [
//                     {
//                         nylon: 2,
//                         leather: 2,
//                         metal: 1,
//                         cotton: 6
//                     }
//                 ],
//                 colour: [
//                     {
//                         brown: 2,
//                         black: 1,
//                         blue: 6,
//                         pink: 0
//                     }
//                 ]
//             },
//             {
//                 size: "M", 
//                 qty: 10, 
//                 material: [
//                     {
//                         nylon: 1,
//                         leather: 1,
//                         metal: 1,
//                         cotton: 3
//                     }
//                 ],
//                 colour: [
//                     {
//                         brown: 2,
//                         black: 0,
//                         blue: 0,
//                         pink: 2
//                     }
//                 ]
//             },
//             {
//                 size: "L", 
//                 qty: 16, 
//                 material: [
//                     {
//                         nylon: 2,
//                         leather: 0,
//                         metal: 5,
//                         cotton: 0
//                     }
//                 ],
//                 colour: [
//                     {
//                         brown: 3,
//                         black: 1,
//                         blue: 3,
//                         pink: 2
//                     }
//                 ]
//             },
//             {
//                 size: "XL", 
//                 qty: 18, 
//                 material: [
//                     {
//                         nylon: 1,
//                         leather: 0,
//                         metal: 1,
//                         cotton: 0
//                     }
//                 ],
//                 colour: [
//                     {
//                         brown: 5,
//                         black: 6,
//                         blue: 3,
//                         pink: 2
//                     }
//                 ]
//             }
//         ]       
//     },

//     {
//         id: 2,
//         productName: 'Head Collar', 
//         inStock: 52, 
//         availStock: [
//             {
//                 size: "XS", 
//                 qty: 10, 
//                 material: [
//                     {
//                         nylon: 1,
//                         leather: 1,
//                         metal: 0,
//                         cotton: 1
//                     }
//                 ],
//                 colour: [
//                     {
//                         brown: 2,
//                         black: 0,
//                         blue: 4,
//                         pink: 1
//                     }
//                 ]
//             }, 
//             {
//                 size: "S", 
//                 qty: 20, 
//                 material: [
//                     {
//                         nylon: 2,
//                         leather: 3,
//                         metal: 0,
//                         cotton: 6
//                     }
//                 ],
//                 colour: [
//                     {
//                         brown: 3,
//                         black: 1,
//                         blue: 3,
//                         pink: 2
//                     }
//                 ]
//             },
//             {
//                 size: "M", 
//                 qty: 18, 
//                 material: [
//                     {
//                         nylon: 3,
//                         leather: 0,
//                         metal: 0,
//                         cotton: 10
//                     }
//                 ],
//                 colour: [
//                     {
//                         brown: 3,
//                         black: 2,
//                         blue: 0,
//                         pink: 0
//                     }
//                 ]
//             },
//             {
//                 size: "L", 
//                 qty: 22, 
//                 material: [
//                     {
//                         nylon: 5,
//                         leather: 0,
//                         metal: 0,
//                         cotton: 10
//                     }
//                 ],
//                 colour: [
//                     {
//                         brown: 3,
//                         black: 4,
//                         blue: 0,
//                         pink: 0
//                     }
//                 ]
//             },
//             {
//                 size: "XL", 
//                 qty: 19, 
//                 material: [
//                     {
//                         nylon: 2,
//                         leather: 0,
//                         metal: 0,
//                         cotton: 8
//                     }
//                 ],
//                 colour: [
//                     {
//                         brown: 3,
//                         black: 1,
//                         blue: 3,
//                         pink: 2
//                     }
//                 ]
//             }
//         ]       
//     },
//     {
//         id: 3,
//         productName: 'Martingale', 
//         inStock: 52, 
//         availStock: [
//             {
//                 size: "XS", 
//                 qty: 13, 
//                 material: [
//                     {
//                         nylon: 2,
//                         leather: 0,
//                         metal: 1,
//                         cotton: 1
//                     }
//                 ],
//                 colour: [
//                     {
//                         brown: 3,
//                         black: 1,
//                         blue: 3,
//                         pink: 2
//                     }
//                 ]
//             }, 
//             {
//                 size: "S", 
//                 qty: 15, 
//                 material: [
//                     {
//                         nylon: 2,
//                         leather: 3,
//                         metal: 0,
//                         cotton: 6
//                     }
//                 ],
//                 colour: [
//                     {
//                         brown: 1,
//                         black: 1,
//                         blue: 1,
//                         pink: 1
//                     }
//                 ]
//             },
//             {
//                 size: "M", 
//                 qty: 18, 
//                 material: [
//                     {
//                         nylon: 3,
//                         leather: 0,
//                         metal: 0,
//                         cotton: 10
//                     }
//                 ],
//                 colour: [
//                     {
//                         brown: 0,
//                         black: 1,
//                         blue: 2,
//                         pink: 2
//                     }
//                 ]
//             },
//             {
//                 size: "L", 
//                 qty: 17, 
//                 material: [
//                     {
//                         nylon: 5,
//                         leather: 0,
//                         metal: 0,
//                         cotton: 10
//                     }
//                 ],
//                 colour: [
//                     {
//                         brown: 1,
//                         black: 1,
//                         blue: 0,
//                         pink: 0
//                     }
//                 ]
//             },
//             {
//                 size: "XL", 
//                 qty: 18, 
//                 material: [
//                     {
//                         nylon: 5,
//                         leather: 0,
//                         metal: 0,
//                         cotton: 8
//                     }
//                 ],
//                 colour: [
//                     {
//                         brown: 2,
//                         black: 1,
//                         blue: 2,
//                         pink: 0
//                     }
//                 ]
//             }
//         ]       
//     },
//     {
//         id: 4,
//         productName: 'Slip Collar', 
//         inStock: 52, 
//         availStock: [
//             {
//                 size: "XS", 
//                 qty: 13, 
//                 material: [
//                     {
//                         nylon: 2,
//                         leather: 0,
//                         metal: 1,
//                         cotton: 1
//                     }
//                 ],
//                 colour: [
//                     {
//                         brown: 3,
//                         black: 1,
//                         blue: 3,
//                         pink: 2
//                     }
//                 ]
//             }, 
//             {
//                 size: "S", 
//                 qty: 15, 
//                 material: [
//                     {
//                         nylon: 2,
//                         leather: 3,
//                         metal: 0,
//                         cotton: 6
//                     }
//                 ],
//                 colour: [
//                     {
//                         brown: 1,
//                         black: 1,
//                         blue: 1,
//                         pink: 1
//                     }
//                 ]
//             },
//             {
//                 size: "M", 
//                 qty: 18, 
//                 material: [
//                     {
//                         nylon: 3,
//                         leather: 0,
//                         metal: 0,
//                         cotton: 10
//                     }
//                 ],
//                 colour: [
//                     {
//                         brown: 0,
//                         black: 1,
//                         blue: 2,
//                         pink: 2
//                     }
//                 ]
//             },
//             {
//                 size: "L", 
//                 qty: 17, 
//                 material: [
//                     {
//                         nylon: 5,
//                         leather: 0,
//                         metal: 0,
//                         cotton: 10
//                     }
//                 ],
//                 colour: [
//                     {
//                         brown: 1,
//                         black: 1,
//                         blue: 0,
//                         pink: 0
//                     }
//                 ]
//             },
//             {
//                 size: "XL", 
//                 qty: 18, 
//                 material: [
//                     {
//                         nylon: 5,
//                         leather: 0,
//                         metal: 0,
//                         cotton: 8
//                     }
//                 ],
//                 colour: [
//                     {
//                         brown: 2,
//                         black: 1,
//                         blue: 2,
//                         pink: 0
//                     }
//                 ]
//             }
//         ]       
//     },
//     {
//         id: 5,
//         productName: 'E-Collar', 
//         inStock: 52, 
//         availStock: [
//             {
//                 size: "XS", 
//                 qty: 13, 
//                 material: [
//                     {
//                         nylon: 1,
//                         leather: 2,
//                         metal: 0,
//                         cotton: 1
//                     }
//                 ],
//                 colour: [
//                     {
//                         brown: 3,
//                         black: 1,
//                         blue: 3,
//                         pink: 2
//                     }
//                 ]
//             }, 
//             {
//                 size: "S", 
//                 qty: 18, 
//                 material: [
//                     {
//                         nylon: 1,
//                         leather: 0,
//                         metal: 5,
//                         cotton: 2
//                     }
//                 ],
//                 colour: [
//                     {
//                         brown: 3,
//                         black: 6,
//                         blue: 0,
//                         pink: 1
//                     }
//                 ]
//             },
//             {
//                 size: "M", 
//                 qty: 25, 
//                 material: [
//                     {
//                         nylon: 1,
//                         leather: 0,
//                         metal: 5,
//                         cotton: 10
//                     }
//                 ],
//                 colour: [
//                     {
//                         brown: 1,
//                         black: 3,
//                         blue: 3,
//                         pink: 2
//                     }
//                 ]
//             },
//             {
//                 size: "L", 
//                 qty: 29, 
//                 material: [
//                     {
//                         nylon: 1,
//                         leather: 6,
//                         metal: 0,
//                         cotton: 7
//                     }
//                 ],
//                 colour: [
//                     {
//                         brown: 8,
//                         black: 5,
//                         blue: 1,
//                         pink: 1
//                     }
//                 ]
//             },
//             {
//                 size: "XL", 
//                 qty: 30, 
//                 material: [
//                     {
//                         nylon: 6,
//                         leather: 1,
//                         metal: 8,
//                         cotton: 3
//                     }
//                 ],
//                 colour: [
//                     {
//                         brown: 8,
//                         black: 3,
//                         blue: 0,
//                         pink: 1
//                     }
//                 ]
//             }
//         ]       
//     },
//     {
//         id: 6,
//         productName: 'Smart Collar', 
//         inStock: 34, 
//         availStock: [
//             {
//                 size: "XS", 
//                 qty: 13, 
//                 material: [
//                     {
//                         nylon: 1,
//                         leather: 15,
//                         metal: 0,
//                         cotton: 2
//                     }
//                 ],
//                 colour: [
//                     {
//                         brown: 10,
//                         black: 1,
//                         blue: 2,
//                         pink: 3
//                     }
//                 ]
//             }, 
//             {
//                 size: "S", 
//                 qty: 13, 
//                 material: [
//                     {
//                         nylon: 2,
//                         leather: 1,
//                         metal: 0,
//                         cotton: 5
//                     }
//                 ],
//                 colour: [
//                     {
//                         brown: 2,
//                         black: 1,
//                         blue: 1,
//                         pink: 1
//                     }
//                 ]
//             },
//             {
//                 size: "M", 
//                 qty: 18, 
//                 material: [
//                     {
//                         nylon: 3,
//                         leather: 0,
//                         metal: 0,
//                         cotton: 10
//                     }
//                 ],
//                 colour: [
//                     {
//                         brown: 0,
//                         black: 1,
//                         blue: 2,
//                         pink: 2
//                     }
//                 ]
//             },
//             {
//                 size: "L", 
//                 qty: 17, 
//                 material: [
//                     {
//                         nylon: 5,
//                         leather: 0,
//                         metal: 0,
//                         cotton: 10
//                     }
//                 ],
//                 colour: [
//                     {
//                         brown: 1,
//                         black: 1,
//                         blue: 0,
//                         pink: 0
//                     }
//                 ]
//             },
//             {
//                 size: "XL", 
//                 qty: 18, 
//                 material: [
//                     {
//                         nylon: 5,
//                         leather: 0,
//                         metal: 0,
//                         cotton: 8
//                     }
//                 ],
//                 colour: [
//                     {
//                         brown: 2,
//                         black: 1,
//                         blue: 2,
//                         pink: 0
//                     }
//                 ]
//             }
//         ]       
//     },
//     {
//         id: 7,
//         productName: 'Pinch Collar', 
//         inStock: 52, 
//         availStock: [
//             {
//                 size: "XS", 
//                 qty: 13, 
//                 material: [
//                     {
//                         nylon: 2,
//                         leather: 0,
//                         metal: 1,
//                         cotton: 1
//                     }
//                 ],
//                 colour: [
//                     {
//                         brown: 3,
//                         black: 1,
//                         blue: 3,
//                         pink: 2
//                     }
//                 ]
//             }, 
//             {
//                 size: "S", 
//                 qty: 15, 
//                 material: [
//                     {
//                         nylon: 2,
//                         leather: 3,
//                         metal: 0,
//                         cotton: 6
//                     }
//                 ],
//                 colour: [
//                     {
//                         brown: 1,
//                         black: 1,
//                         blue: 1,
//                         pink: 1
//                     }
//                 ]
//             },
//             {
//                 size: "M", 
//                 qty: 18, 
//                 material: [
//                     {
//                         nylon: 3,
//                         leather: 0,
//                         metal: 0,
//                         cotton: 10
//                     }
//                 ],
//                 colour: [
//                     {
//                         brown: 0,
//                         black: 1,
//                         blue: 2,
//                         pink: 2
//                     }
//                 ]
//             },
//             {
//                 size: "L", 
//                 qty: 17, 
//                 material: [
//                     {
//                         nylon: 5,
//                         leather: 0,
//                         metal: 0,
//                         cotton: 10
//                     }
//                 ],
//                 colour: [
//                     {
//                         brown: 1,
//                         black: 1,
//                         blue: 0,
//                         pink: 0
//                     }
//                 ]
//             },
//             {
//                 size: "XL", 
//                 qty: 18, 
//                 material: [
//                     {
//                         nylon: 5,
//                         leather: 0,
//                         metal: 0,
//                         cotton: 8
//                     }
//                 ],
//                 colour: [
//                     {
//                         brown: 2,
//                         black: 1,
//                         blue: 2,
//                         pink: 0
//                     }
//                 ]
//             }
//         ]       
//     },
//     {
//         id: 8,
//         productName: 'Dog Harness', 
//         inStock: 52, 
//         availStock: [
//             {
//                 size: "XS", 
//                 qty: 10, 
//                 material: [
//                     {
//                         nylon: 1,
//                         leather: 1,
//                         metal: 0,
//                         cotton: 1
//                     }
//                 ],
//                 colour: [
//                     {
//                         brown: 2,
//                         black: 0,
//                         blue: 4,
//                         pink: 1
//                     }
//                 ]
//             }, 
//             {
//                 size: "S", 
//                 qty: 20, 
//                 material: [
//                     {
//                         nylon: 2,
//                         leather: 3,
//                         metal: 0,
//                         cotton: 6
//                     }
//                 ],
//                 colour: [
//                     {
//                         brown: 3,
//                         black: 1,
//                         blue: 3,
//                         pink: 2
//                     }
//                 ]
//             },
//             {
//                 size: "M", 
//                 qty: 18, 
//                 material: [
//                     {
//                         nylon: 3,
//                         leather: 0,
//                         metal: 0,
//                         cotton: 10
//                     }
//                 ],
//                 colour: [
//                     {
//                         brown: 3,
//                         black: 2,
//                         blue: 0,
//                         pink: 0
//                     }
//                 ]
//             },
//             {
//                 id: 10,
//                 productName: 'Standard Collar', 
//                 inStock: 52, 
//                 availStock: [
//                     {
//                         size: "XS", 
//                         qty: 10, 
//                         material: [
//                             {
//                                 nylon: 1,
//                                 leather: 1,
//                                 metal: 0,
//                                 cotton: 1
//                             }
//                         ],
//                         colour: [
//                             {
//                                 brown: 2,
//                                 black: 0,
//                                 blue: 4,
//                                 pink: 1
//                             }
//                         ]
//                     }, 
//                     {
//                         size: "S", 
//                         qty: 20, 
//                         material: [
//                             {
//                                 nylon: 2,
//                                 leather: 3,
//                                 metal: 0,
//                                 cotton: 6
//                             }
//                         ],
//                         colour: [
//                             {
//                                 brown: 3,
//                                 black: 1,
//                                 blue: 3,
//                                 pink: 2
//                             }
//                         ]
//                     },
//                     {
//                         size: "M", 
//                         qty: 18, 
//                         material: [
//                             {
//                                 nylon: 3,
//                                 leather: 0,
//                                 metal: 0,
//                                 cotton: 10
//                             }
//                         ],
//                         colour: [
//                             {
//                                 brown: 3,
//                                 black: 2,
//                                 blue: 0,
//                                 pink: 0
//                             }
//                         ]
//                     },
//                     {
//                         id: 2,
//                         productName: 'Head Collar', 
//                         inStock: 52, 
//                         availStock: [
//                             {
//                                 size: "XS", 
//                                 qty: 10, 
//                                 material: [
//                                     {
//                                         nylon: 1,
//                                         leather: 1,
//                                         metal: 0,
//                                         cotton: 1
//                                     }
//                                 ],
//                                 colour: [
//                                     {
//                                         brown: 2,
//                                         black: 0,
//                                         blue: 4,
//                                         pink: 1
//                                     }
//                                 ]
//                             }, 
//                             {
//                                 size: "S", 
//                                 qty: 20, 
//                                 material: [
//                                     {
//                                         nylon: 2,
//                                         leather: 3,
//                                         metal: 0,
//                                         cotton: 6
//                                     }
//                                 ],
//                                 colour: [
//                                     {
//                                         brown: 3,
//                                         black: 1,
//                                         blue: 3,
//                                         pink: 2
//                                     }
//                                 ]
//                             },
//                             {
//                                 size: "M", 
//                                 qty: 18, 
//                                 material: [
//                                     {
//                                         nylon: 3,
//                                         leather: 0,
//                                         metal: 0,
//                                         cotton: 10
//                                     }
//                                 ],
//                                 colour: [
//                                     {
//                                         brown: 3,
//                                         black: 2,
//                                         blue: 0,
//                                         pink: 0
//                                     }
//                                 ]
//                             },

// ], 
// };
// module.exports = products;
