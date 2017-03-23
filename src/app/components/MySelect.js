import React from "react/addons";

class MySelect extends React.Component {

    render(){
        return <div className={this.props.className}>
			<div className="form-field clear required edit error">
					<div className="form-label form-left-content">
						<span className="asterisk">*</span> <span class="labelText">{this.props.labelText}</span>
					</div>
					<div className="form-input form-right-content">
						<div className="style-select dropdownField" >
							<span className="dropDownArrow"></span> 
							<select name={this.props.name} className="form-control maxwidth" onChange={this.props.onChange} >
								{this.props.options.map(function(option){
									return (<option value={option.value}>
									{option.text}
								</option>);
								})}
							</select>
						</div>
					</div>
			</div>
			</div>;
    }
}

export default MySelect;