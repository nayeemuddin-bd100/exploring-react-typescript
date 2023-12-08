import React, { ReactNode } from "react";

type SectionProps = {
	title? : string;
	children: ReactNode;
};

// old way
// const Section: React.FC<{ title?: string; children: ReactNode }>


// cleaner version
const Section = ({ children, title = "Default Title" } : SectionProps) => {
	return (
		<>
			<h4>{title}</h4>
			<div>{children}</div>
		</>
	);
};

export default Section;
