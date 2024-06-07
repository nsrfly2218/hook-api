const express = require('express');
const bodyParser = require('body-parser');
const json = require("json")
const mongoose = require("mongoose")
const Order = require("./Module/Order")
mongoose.connect("mongodb+srv://widers:Ab6432987@sala-app2.jls5rsb.mongodb.net/webhoke").then(()=>{
    console.log("connction is scssfoyl")
    }).catch(()=>{
        console.log("game over try again")
})

const app = express();
const cors = require("cors")
app.use(cors({origin:"*"}))
app.use(bodyParser.json());
app.use(express.json())

app.get("/getorder",async(req,res) =>{
    const orders = await Order.find()
    res.status(200).json(orders)
})

app.post('/webhook',async (req, res) => {
    const orderr = new order({
        id : req.body.id,
        cart_reference_id: req.body.cart_reference_id,
        reference_id: req.body.reference_id,
        urls:req.body.urls,
        date:req.body.date,
        updated_at:req.body.updated_at,
        source:req.body.source,
        source_device:req.body.source_device,
        source_details:req.body.source_details,
        status:req.body.status,
        is_price_quote:req.body.is_price_quote,
        payment_method:req.body.payment_method,
        receipt_image:req.body.receipt_image,
        first_complete_at:req.body.first_complete_at,
        currency:req.body.currency,
        amounts:req.body.amounts,
        can_cancel:req.body.can_cancel,
        show_weight:req.body.show_weight,
        can_reorder:req.body.can_reorder,
        is_pending_payment:req.body.is_pending_payment,
        pending_payment_ends_at:req.body.pending_payment_ends_at,
        total_weight:req.body.total_weight,
        rating_link:req.body.rating_link,
        shipping:req.body.shipping,
        shipments:req.body.shipments,
        shipment_branch:req.body.shipment_branch,
        customer:req.body.customer,
        items:req.body.items,
        bank:req.body.bank,
        product_reservations:req.body.product_reservations,
        tags:req.body.tags,
        store:req.body.store

    })
    const resulat = await orderr.save()
    res.status(200).send(resulat)

    
});


const PORT = 1099|| 3000;

app.listen(PORT, () => {
    console.log(`Webhook receiver listening on port ${PORT}`);
});