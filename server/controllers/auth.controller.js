const BaseError = require('../errors/base.error');
const userModel = require('../models/user.model');
const bcrypt = require('bcrypt');

class AuthController {
	async login(req, res, net) {
		try {
			const { email, password } = req.body;

			const user = await userModel.findOne({ email });
			if (!user) return res.json({ failure: 'User not found' });

			const isVaildPassword = await bcrypt.compare(password, user.password);
			if (!isVaildPassword) return res.json({ failure: 'Password is incorrect' });
			res.json({ user });
		} catch (error) {
			next(error);
		}
	}
	async register(req, res, net) {
		try {
			const { email, password, fullName } = req.body;

			const user = await userModel.findOne({ email });
			if (user) throw BaseError.BadRequest('User already exists');

			const hashedPassword = await bcrypt.hash(password, 10);
			const newUser = await userModel.create({ email, password: hashedPassword, fullName });

			res.json({ user: newUser });
		} catch (error) {
			next(error);
		}
	}
}

module.exports = new AuthController();
