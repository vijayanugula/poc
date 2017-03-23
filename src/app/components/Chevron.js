import React from "react/addons";

class Chevron extends React.Component{
    render(){
        return <div>
		<div className="chevronContainer">
			<div className="sectionContainer start active">
				<div className="leftArrow">
					<span className="leftArrowGrey"></span> <span className="leftArrowWhite"></span>
				</div>
				<p className="sectionTitleNumber">1</p>
				<p className="sectionTitleText">About You</p>
				<div className="rightArrow">
					<span className="rightArrowGrey"></span> <span className="rightArrowWhite"></span>
				</div>
			</div>
			<div className="sectionContainer">
				<div className="leftArrow">
					<span className="leftArrowGrey"></span> <span className="leftArrowWhite"></span>
				</div>
				<p className="sectionTitleNumber">2</p>
				<p className="sectionTitleText">Your Details &amp; Finances</p>
				<div className="rightArrow">
					<span className="rightArrowGrey"></span> <span className="rightArrowWhite"></span>
				</div>
			</div>
			<div className="sectionContainer end">
				<div className="leftArrow">
					<span className="leftArrowGrey"></span> <span className="leftArrowWhite"></span>
				</div>
				<p className="sectionTitleNumber">3</p>
				<p className="sectionTitleText">Card Options</p>
				<div className="rightArrow">
					<span className="rightArrowGrey"></span> <span className="rightArrowWhite"></span>
				</div>
			</div>
			<div className="clear"></div>
		</div>
	</div>
    }
}

export default Chevron;