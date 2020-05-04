import * as React from "react"
import { Link } from "gatsby"
import { useSelector, useDispatch } from 'react-redux'
import { increment, decrement } from '../store/counter/action'

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"

import { ButtonSuccess } from '../ui/great-button';

const IndexPage = () => {
	const [color, setColor] = React.useState('')
	const dispatch = useDispatch()

	const counter = useSelector(state => state.counter.count)

	const setColors = () => {
		if (color.length) {
			setColor('')
		} else {
			setColor('red')
		}
	}

	const incCount = () => {
		dispatch(increment())
	}

	const decCount = () => dispatch(decrement())

	return (
		<Layout>
			<SEO title="Home" />
			<h1>Hi people</h1>
			<p>Welcome to your new Gatsby site.</p>
			<p>Now go build something great.</p>
			<div style={{ maxWidth: `300px`, marginBottom: `1.45rem` }}>
				<Image />
			</div>
			<span>{ counter }</span>
			<div className="contner-link">
				<Link to="/page-2/">Go to page 2</Link>
				<Link to="/about/">Go to page about</Link>
				<button
					onClick={ incCount }
				>
          inc
				</button>
				<button
					onClick={ decCount }
				>
          dec
				</button>
				<ButtonSuccess
					onClick={ setColors }
					color={ color }
				>
          click me
				</ButtonSuccess>
			</div>
  	</Layout>
	)

}


export default IndexPage
