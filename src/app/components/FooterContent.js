import React from "react/addons";

class FooterContent extends React.Component{
   render(){
       return <div className="form-field clear declaration stage1" data-uid="AU_F21">
		<div className="section-header">
			<div className="section-field-label maxWidth">
				<div className="section-subheader-text clear">
					Please make sure the information above is correct as you won't be able to change it later. If you continue, we will use your personal information to:
				</div>
			</div>
			<div className="section-field-label-points">
				<ul>
					<li>
						<p><b>Perform a credit check</b> <span>to determine your eligibility for this card. For more details see our</span> <a href="http://icm.aexp-static.com/Internet/IntlAcquisition/DECA/Intl-Digital-Acquisition/DYNA/en_AU/common/pdf/AXP_Credit_Information_Policy_2014.pdf" target="_blank" title="Credit Reporting Information Policy">Credit Reporting Information Policy</a></p>
					</li>
					<li>
						<p><b>Contact you about this application</b> <span>and send you information about offers, products and services. You can change your marketing preferences at any time online, or opt-out of email marketing by clicking 'unsubscribe' on our e-mails. For more details about how we collect and manage personal information, see our</span> <a href="http://icm.aexp-static.com/Internet/IntlAcquisition/DECA/Intl-Digital-Acquisition/DYNA/en_AU/common/pdf/AXP_CM_Privacy_Statement_2014.pdf" target="_blank" title="Privacy Statement">Privacy Statement</a></p>
					</li>
				</ul>
			</div>
			<div className="clear"></div>
		</div>
	</div>
   } 
}

export default FooterContent;