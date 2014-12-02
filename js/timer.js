// create custom component
var TimerExample = React.createClass({
	getInitialState: function () {
		// called before render function
		// object returned is assigned to this.state, for late reuse
		return { elapsed: 0 };
	},

	componentDidMount: function () {
		// componentDidMount is called by reacvt when comp rendered
		// on the page, we set the interval here
		this.timer = setInterval(this.tick, 50);
	},

	componentWillUnmount: function () {
		// this method is called before the comp is removed
		// from page and destroyed, we clear the interv here
		clearInterval(this.timer);
	},

	tick: function () {
		// called every 50ms, updates elapsed counter. calling setState
		// caused comp rerender
		this.setState({ elapsed: new Date() - this.props.start });
	},

	render: function () {
		var elapsed = Math.round(this.state.elapsed / 100);
		var seconds = (elapsed / 10).toFixed(1);
		// react will smartly update only the changed parts
		return <p>This example was started <b>{seconds}</b> ago</p>;
	}
});

React.renderComponent(
	<TimerExample start={Date.now()} />,
	document.body
);