import * as React from "react"
// import { Router, Link, Location } from "gatsby"
import { Link, Location } from "@reach/router"
import { useSelector, useDispatch } from 'react-redux'
import { getUsers } from '../store/user/action'

import Layout from "../components/layout"
import SEO from "../components/seo"

const About = () => {
	const dispatch = useDispatch()

	const usersData = useSelector((state) => state.users.data)

	React.useEffect(() => {
		dispatch(getUsers())
	}, [])

	return (
		<Layout>
			<SEO title="About" />
			<h1>About</h1>
			<Link to="/">About</Link>
			<ul>
				{
					usersData.map(item => (
						<Link to={`/about?id=${item.id}`}>{ item.name }</Link>
					))
				}
			</ul>
		</Layout>
	)
}

export default About
