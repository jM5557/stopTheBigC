"use strict";

var MainWrapper = function MainWrapper(Component) {
	return React.createClass({

		getInitialState: function getInitialState() {
			return {
				"synonyms": ["A Free Market", "Commercialism", "Capitalism"],
				"c_synonym": 0,
				"displayNext": false,
				"messages": ["Psst...here, have some money", "Here, take some more", "You fell for a capitalist scheme! Scroll down to learn how to avoid future traps like this"]
			};
		},

		getAndSetProperty: function getAndSetProperty(el, prop, max, factor) {
			var amount = window.getComputedStyle(el, null).getPropertyValue(prop);
			var asNum = parseInt(amount.substring(0, amount.length - 2));

			if (asNum >= max) return;

			asNum += (this.state.c_synonym + 1) * factor;

			return asNum;
		},

		pageClicked: function pageClicked() {
			var index = this.state.c_synonym < this.state.synonyms.length - 1 ? this.state.c_synonym + 1 : 0;
			this.setState({ c_synonym: index });

			if (!this.state.displayNext && index == this.state.synonyms.length - 1) this.state.displayNext = true;

			var size = this.getAndSetProperty(document.getElementById("dollar_bill_wrapper"), "bottom", 200, 55);
			var size_small = this.getAndSetProperty(document.getElementById("dollar_bill_small"), "max-width", 210, 45);

			document.getElementById("dollar_bill_wrapper").style.bottom = size + "px";
			document.getElementById("dollar_bill_small").style.maxWidth = size_small + "px";
		},

		render: function render() {
			return React.createElement(
				"div",
				null,
				React.createElement(
					"section",
					{ id: "main_wrapper" },
					React.createElement(
						"div",
						{ id: "main_content" },
						React.createElement(
							"p",
							{ id: "c_word" },
							this.state.synonyms[this.state.c_synonym]
						),
						React.createElement(
							"div",
							{ id: "dollar_bill_wrapper_small", onClick: this.pageClicked },
							!this.state.displayNext ? this.state.messages[this.state.c_synonym] : this.state.messages[this.state.synonyms.length - 1],
							React.createElement("img", { alt: "dollar_bill_small", src: "../images/money_money_small.png", id: "dollar_bill_small" })
						),
						React.createElement(
							"p",
							{ id: "quote" },
							"\"Capitalism knows only one color: that color is green; all else is necessarily subservient to it, hence, race, gender and ethnicity cannot be considered within it.\""
						),
						React.createElement(
							"p",
							{ id: "quote_source" },
							"~ Thomas Sowell"
						),
						React.createElement(
							"div",
							{ id: "dollar_bill_wrapper", onClick: this.pageClicked },
							!this.state.displayNext ? this.state.messages[this.state.c_synonym] : this.state.messages[this.state.synonyms.length - 1],
							React.createElement("img", { alt: "dollar-bill", src: "../images/money_money.png", id: "dollar_bill" })
						)
					)
				),
				this.state.displayNext && React.createElement(Component, null)
			);
		}
	});
};

var ComparisonEl = React.createClass({
	displayName: "ComparisonEl",

	render: function render() {
		return React.createElement(
			"div",
			null,
			React.createElement(
				"section",
				{ id: "time_to_stop_wrapper" },
				React.createElement(
					"p",
					{ className: "text_large" },
					"It's Time To Stop"
				),
				React.createElement(
					"p",
					{ className: "text_small" },
					"the Big C of Capitalism"
				),
				React.createElement(
					"div",
					{ id: "clock_el" },
					React.createElement(
						"div",
						{ id: "clock_face" },
						React.createElement("div", { className: "tick_mark vertical top" }),
						React.createElement("div", { className: "tick_mark vertical bottom" }),
						React.createElement("div", { className: "tick_mark horizontal left" }),
						React.createElement("div", { className: "tick_mark horizontal right" }),
						React.createElement("div", { id: "minute_hand" }),
						React.createElement("div", { id: "hour_hand" })
					)
				)
			),
			React.createElement(
				"section",
				{ id: "theories_wrapper" },
				React.createElement(
					"div",
					{ id: "capitalism_theory", className: "theory_wrapper" },
					React.createElement(
						"h1",
						null,
						"Capitalism \u2718"
					),
					React.createElement(
						"p",
						null,
						"We are always told that to be successful in life we need to work hard and persevere. What we are not often told, though, is that this is purely a capitalist scheme. Through Capitalism:"
					),
					React.createElement(
						"ul",
						null,
						React.createElement(
							"li",
							null,
							React.createElement(
								"strong",
								{ className: "list_item" },
								"The Rich Get Richer"
							),
							React.createElement(
								"p",
								null,
								"In a society that promotes private economic and financial growth, the ",
								React.createElement(
									"strong",
									null,
									"1%"
								),
								" benefit the most.",
								React.createElement("br", null),
								React.createElement("br", null),
								"While the rich thrive, our economy suffers. Who's to blame?"
							)
						),
						React.createElement(
							"li",
							null,
							React.createElement(
								"strong",
								{ className: "list_item" },
								"Society Is Founded on Greed"
							),
							React.createElement(
								"p",
								null,
								"A society that actively rewards large business and corporations also makes itself prone to the tyrannical rule of monopolies.",
								React.createElement("br", null),
								React.createElement("br", null),
								"Why own your part when you can have it all?"
							)
						),
						React.createElement(
							"li",
							null,
							React.createElement(
								"strong",
								{ className: "list_item" },
								"Our Environment Suffers"
							),
							React.createElement(
								"p",
								null,
								"Profit can be ripped right out of the ground. Those with the initiative to do so are rewarded handsomely, but at what cost to our natural environment and climate? Corporations and businesses get fatter as trees go down and production facilities go up. In a society where profit-maximization is key, this is an even bigger problem.",
								React.createElement("br", null),
								React.createElement("br", null),
								"After all, why settle for the green of the land when you can have green in your wallet?"
							)
						)
					)
				),
				React.createElement(
					"div",
					{ id: "communism_theory", "class": "theory_wrapper" },
					React.createElement(
						"h1",
						null,
						"Why not try Communism? \u2714"
					),
					React.createElement(
						"p",
						null,
						"Capitalist pigs do not want you to know about the peace and prosperity that can only be achieved through public ownership. It is true and if you don't believe me, off to the gulag with you! Through Communism:"
					),
					React.createElement(
						"ul",
						null,
						React.createElement(
							"li",
							null,
							React.createElement(
								"strong",
								{ className: "list_item" },
								"Nobody Owns Anything..."
							),
							React.createElement(
								"p",
								null,
								"To achieve a class-less society, everyone has to relinquish their natural right to private ownership. Don't worry, this is just to make things fair for everyone, not just for you.",
								React.createElement("br", null),
								React.createElement("br", null),
								"Now you can have as much (or as little) as the guy next to you. It's a win-win (lose-lose) for everyone!"
							)
						),
						React.createElement(
							"li",
							null,
							React.createElement(
								"strong",
								{ className: "list_item" },
								"...Except the Government. They Own Everything."
							),
							React.createElement(
								"p",
								null,
								"The people shouldn't be burdened with the ability to decide things. Just shut up and watch as your glorious government does its thing. It's alright, they know what they're doing. Mostly.",
								React.createElement("br", null),
								React.createElement("br", null),
								"Oh wait, you thought you'd have a say in something? That's cute."
							)
						),
						React.createElement(
							"li",
							null,
							React.createElement(
								"strong",
								{ className: "list_item" },
								"We Are All Comrades"
							),
							React.createElement(
								"p",
								null,
								"After a long day of siezing the means of production, why not crack open a cold one with the comrades!"
							)
						)
					)
				)
			),
			React.createElement(
				"footer",
				null,
				React.createElement("img", { alt: "ussr-tools", src: "../images/hammer_sickle_tools.png", id: "tools_img" }),
				React.createElement(
					"h1",
					null,
					"Fight the change. Stop Capitalism today."
				),
				React.createElement(
					"div",
					{ id: "creator_credits" },
					React.createElement(
						"span",
						{ id: "creator_name" },
						"Javier Minchala"
					),
					React.createElement(
						"span",
						{ id: "creator_email" },
						"contact: javierminchala@gmail.com"
					)
				),
				React.createElement(
					"p",
					{ id: "note" },
					"This website is purely ",
					React.createElement(
						"strong",
						null,
						"satire"
					),
					" and does not reflect the socio-economic viewpoints of its creator."
				)
			)
		);
	}
});

var AllContent = MainWrapper(ComparisonEl);

ReactDOM.render(React.createElement(AllContent, null), document.getElementById("root"));