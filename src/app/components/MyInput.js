import React from "react/addons";

class MyInput extends React.Component {
	
    render(){
        return <div className={this.props.className}>
			<div className="form-field clear required edit">
		<div className="form-label form-left-content">
			<span className="asterisk">*</span> <span class="labelText">{this.props.labelContent||this.props.labelText}</span>
		</div>
		<div className="form-input form-right-content">
			<input name={this.props.name} className="text-field" type={this.props.inputType} onChange={this.props.onChange} placeholder={this.props.placeholderText} />
		</div>
	</div>
	</div>;
    }
}

export default MyInput;