const mongoose = require("mongoose")

const orderschema = mongoose.Schema(
    {
        id :{
            type: Number
        },
        cart_reference_id :{
            type: mongoose.Schema.Types.ObjectId,
            ref:"Cart"
        },
        reference_id:{
            type: mongoose.Schema.Types.ObjectId,
            ref: "Customer"
        },
        urls :{
            type:Object,
        },
        date:{
            type:Object,

        },
        updated_at:{
            type:Object
        },
        source:{
            type:String,
            enum:["store",
                "landing",
                "forgotten_basket",
               " abandoned-cart",
                "campaign",
                "dashboard",
                "buy_as_gift",
                "mahly-app",
                "buy_now",
                "one-click",
               " complete_orde"],
               trim: true

        },
        source_device:{
            type:String 
        },
        source_details:{
            type:Object
        },
        status:{
            type:Object
        },
        is_price_quote :{
            type:Boolean
        },
        payment_method:{
            type:String
        },
        receipt_image:{
            type: String 
        },
        first_complete_at:{
            type:Object
        },
        currency:{
            type:String 
        },
        amounts:{
            type:Object
        }
        ,can_cancel:{
            type:Boolean
        },
        show_weight:{
            type:Boolean
        },
        can_reorder:{
            type:Boolean
        },
        is_pending_payment:{
            type:Boolean
        },
        pending_payment_ends_at :{
            type:Number
        },
        total_weight:{
            type:String 
        }
        ,rating_link:{
            type:String
        },
        shipping:{
            type:Object
        },shipment_branch:{
            type:Object
        },shipping:{
            type:Object
        },customer:{
            type:Object
        },bank:{
            type:Object
        },tags:{
            type:Object
        },store:{
            type:Object
        },shipments:{
            type:Array
        },
        items:{
            type:Array
        },product_reservations:{
            type:Array
        }
    }
)
const Order = mongoose.model("Order",orderschema)
module.exports = {Order}