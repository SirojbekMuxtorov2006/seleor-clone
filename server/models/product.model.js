const { Schema, model } = require('mongoose');

const productSchema = new Schema(
	{
		title: { type: String, required: true },
		category: { type: String, required: true },
		price: { type: Number, required: true },
		description: { type: String, required: true },
		imageUrl: { type: String, required: true },
		imageKey: { type: String, required: true },
		stripePriceId: { type: String },
		stripeProductId: { type: String },
	},
	{ timestamps: true }
);

module.exports = model('Product', productSchema);
