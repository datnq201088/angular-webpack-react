import React from 'react';

export default React.createClass({
	propTypes: {
	    data : React.PropTypes.array.isRequired
  	},
	render: function() {
		console.log('render');
		var i = 0;
		var rows = this.props.data.map(function(datum){
			i++;
			var clickHandler = function (e) {
				console.log("Still in reactJs!");
			}
			return (
				 <tr key={i} ngClick="{clickHandler}">
				 	<td> {datum[0]} </td>
				 	<td> {datum[1]} </td>
				 	<td> {datum[2]} </td>
				 	<td> {datum[3]} </td>
				 	<td> {datum[4]} </td>
				 </tr>
			);

		});
		console.log('finished render');
		return (
			<table>
			 {rows}
			</table>
		);
	}
});


