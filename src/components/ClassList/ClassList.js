import React, { Component } from 'react';
import axios from 'axios'
import { Link } from 'react-router-dom'

export default class ClassList extends Component {
	constructor() {
		super()

		this.state = {
			students: []
		}

	}

	componentDidMount() {
		axios.get(`http://localhost:3005/students?class=${this.props.match.params.class}`).then(res => {
			this.setState({ students: res.data })
		})
	}

	render() {
		let studentsMap = this.state.students.map((x, i) => {
			return <Link to={`/student/${x.id}`} key={i}><h3>{x.first_name} {x.last_name}</h3></Link>
		})
		return (
			<div className="box">
				<button onClick={() => this.props.history.goBack()}>back</button>
				<h1>{this.props.match.params.class}</h1>
				<h2>ClassList:</h2>
				{studentsMap}
			</div>
		)
	}
}

