import React from "react/addons";

class RightWrapper extends React.Component {
    render(){
        return <div>
			<div className="sideBar" id="rightWrapper">
				<div className="rightCardArtImg">
					<img alt="The American Express® Platinum Card" className="card-art" id="rightWrapperImg" src="https://icm.aexp-static.com/Internet/IntlAcquisition/DECA/Intl-Digital-Acquisition/DYNA/en_AU/803/803_240X152_Plat_Chip_Ch12.gif" title="The American Express® Platinum Card"/>
				</div>
				<div className="offerBullets">
					<div className="cardArtTitile">
						<p className="rightSectionTitle">The American Express Platinum Card</p>
						<div className="clear"></div>
					</div>
					<div className="offerBulletsList">
						<ul id="benefits">
							
						</ul>
					</div>
				</div>
				<div className="rightHelpContent">
					<div>
						<div className="phone"></div>
						<span className="phone&quot;" title="1 300 557 743">1 300 557 743</span>
					</div>
					<div>
						<div className="faq"></div><a className="faq" href="https://icm.aexp-static.com/Internet/IntlAcquisition/DECA/Intl-Digital-Acquisition/DYNA/en_AU/common/faq/faq.html" target="_blank" title="Frequently Asked Questions">Frequently Asked Questions</a>		 
					</div>
				</div>
			</div>
		</div>;
    }
}

export default RightWrapper;
