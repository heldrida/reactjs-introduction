var Counter = React.createClass({

	getInitialState: function () {
		return { count: 0 };
	},

	increment: function () {
		this.setState({ count: this.state.count + 1 });
	},

	render: function () {
		return (
			<div>
				<h1>Counter</h1>
				<p>{ this.state.count }</p>
				<button onClick={ this.increment }>Incremenet</button>
			</div>
		);
	}

});

React.renderComponent(
	<Counter />,
	document.body
);