import React from 'react/addons';

class Header extends React.Component {

    render() {
        return <div className="blueBanner" id="blue-banner">
					<div id="blue-banner-content">
						<div id="card-art-wrapper">
							<img alt="The American Express Platinum Card" src="https://icm.aexp-static.com/Internet/IntlAcquisition/DECA/Intl-Digital-Acquisition/DYNA/en_AU/803/803_240X152_Plat_Chip_Ch12.gif" />
						</div>
						<div id="banner-text-wrapper">
							<p id="productName">The American Express Platinum Card</p>
						</div>
						<div id="bannerImpLink">
							<a id="importantInfo">IMPORTANT INFORMATION</a>
						</div>
					</div>
				</div>;
    }
}

export default Header;