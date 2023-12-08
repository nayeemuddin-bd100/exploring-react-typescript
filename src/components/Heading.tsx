import React, { ReactElement } from 'react'

type headingProps = {title:string}

// const Heading = ({title}:{title:string}) => {
const Heading = ({ title }: headingProps): ReactElement => {
	return <div>{title}</div>;
};

export default Heading