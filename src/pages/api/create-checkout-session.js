const stripe=require("stripe")(process.env.STRIPE_SECRET_KEY)
export default async (req,res)=>{
const {items}=req.body;
const transformedItems=items.map((item)=>({
    quantity:1,
    price_data:{
        currency:"usd",
        unit_amount:item.price*100,
        product_data:{
            name:item.title,
            description:item.description,
            images:[item.image],
        },

    }

}))

const session = await stripe.checkout.sessions.create({
    payment_method_types:["card"],
    shipping_options:[
        
    ],
    shipping_address_collection:{
        allowed_countries:["GB","US","CA"]
    },
    line_items:transformedItems,
    mode:"payment",
    success_url:`${process.env.HOST}/success`,
    cancel_url:`${process.env.HOST}/checkout`,
    metadata:{
        images:JSON.stringify(items.map((item)=>item.images))
    }
})
res.status(200).json({id: session.id})
}