import UserDocument from '../models/types/User.js'
import Mailer from '../vendor/MailTemplate.js'

const { APP_NAME } = process.env

class UserRegisteredMessage {
	private user: UserDocument

	constructor(user: UserDocument) {
		this.user = user
	}

	public mail(): this {
		new Mailer(this.user)
			.subject(`Hi ${this.user.name}, welcome to ${APP_NAME}!`)
			.heading(`Welcome ${this.user.name}`)
			.line('Lemon drops biscuit gummi bears chocolate cake. Powder sweet roll pie gummies brownie. Sweet cheesecake cookie tart pie marshmallow. Tootsie roll jelly beans halvah candy canes chocolate bar croissant lemon drops.')
			.line('Sweet roll pudding wafer ice cream apple pie. Apple pie cake lemon drops danish icing. Macaroon jujubes icing cookie. Powder bear claw chocolate bar toffee cupcake icing lemon drops bear claw lollipop.')
			.action({ content: 'Google here!', href: 'https://www.google.com/' })
			.sendMail()

		return this
	}
}

export default UserRegisteredMessage
