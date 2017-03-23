import React from "react/addons";
import Input from "./MyInput";
import Select from "./MySelect";
import FooterContent from "./FooterContent";

class AboutYou extends React.Component{

    constructor(props){
        super(props);
        this.onChange = this.onChange.bind(this);
        this.onClick = this.onClick.bind(this);
        this.state={};
        this.stateOptions={
            FirstName:'', 
            MiddleName:'', 
            LastName:'', 
            TitleOptions:[{value: 'Select Title', text: 'Select Title'},{value: 'MR', text: 'Mr'}],
            Months:[{value: "MM", text: "MM"},{value: "01", text: "01"},{value: "02", text: "02"},{value: "03", text: "03"},{value: "04", text: "04"}, {value: "05", text: "05"},{value: "06", text: "06"},{value: "07", text: "07"},{value: "08", text: "08"},{value: "09", text: "09"},{value: "10", text: "10"},{value: "11", text: "11"},{value: "12", text: "12"}],
            AddMonths:[{value: "Months", text: "Months"},{value: "01", text: "01"},{value: "02", text: "02"},{value: "03", text: "03"},{value: "04", text: "04"}, {value: "05", text: "05"},{value: "06", text: "06"},{value: "07", text: "07"},{value: "08", text: "08"},{value: "09", text: "09"},{value: "10", text: "10"},{value: "11", text: "11"},{value: "12", text: "12"}],
            Days:[{value: "DD", text: "DD"},{value: "01", text: "01"},{value: "02", text: "02"},{value: "03", text: "03"},{value: "04", text: "04"}, {value: "05", text: "05"},{value: "06", text: "06"},{value: "07", text: "07"},{value: "08", text: "08"},{value: "09", text: "09"},{value: "10", text: "10"},{value: "11", text: "11"},{value: "12", text: "12"}],
            Years:[{value: "YYYY", text: "YYYY"},{value: "1980", text: "1980"},{value: "1981", text: "1981"},{value: "1982", text: "1982"},{value: "1983", text: "1983"}, {value: "1984", text: "1984"},{value: "1985", text: "1985"}],  
            AddYears:[{value: "YYYY", text: "YYYY"},{value: "01", text: "01"},{value: "02", text: "02"},{value: "03", text: "03"},{value: "04", text: "04"}, {value: "05", text: "05"},{value: "06", text: "06"}]  
        }      
    }

    onClick(){
        alert(JSON.stringify(this.state));
    }

    onChange(eArgs){
        console.log(eArgs);
        var obj = {};
        var name= eArgs.target.name;
        var value = eArgs.target.value;
        obj[name]=value;
        this.setState(obj);
        console.log(this.state);
    }

    render(){
        return <div className="leftWrapper"><form name="cardAppForm" className="formContainer">
            <Select className='colSpan1' name= "Title" labelText="Title" onChange={this.onChange} options={this.stateOptions.TitleOptions}/>
            <Input className='colSpan2' labelText="FirstName" labelContent="Legal First Name" inputType="text" name= "FirstName" onChange={this.onChange} placeholderText="First Name" />
            <Input className='colSpan1' labelText="MiddleName" labelContent="Middle Name(optional)" inputType="text" name= "MiddleName" onChange={this.onChange} placeholderText="Middle Name" />
            <Input className='colSpan2' labelText="LastName" labelContent="Legal Last Name" inputType="text" name= "LastName" onChange={this.onChange} placeholderText="Last Name" />
            <Input className='colSpan1' labelText="HomeTelephone" labelContent="Home Telephone Number" inputType="number" name= "HomeTelephone" onChange={this.onChange} placeholderText=""/>
            <Input className='colSpan2' labelText="MobileTelephone" labelContent="Mobile Telephone Number" inputType="number" name= "MobileTelephone" onChange={this.onChange} placeholderText=""/>
            <Select className='colSpan1' name= "Day" labelText="Date of Birth" onChange={this.onChange} options={this.stateOptions.Days}/>
            <Select className='colSpan1' name= "Month" labelText="" onChange={this.onChange} options={this.stateOptions.Months}/>
            <Select className='' name= "Year" labelText="" onChange={this.onChange} options={this.stateOptions.Years}/>
            <Input className='' labelText="DriversLicense" labelContent="Drivers license Number(Optional)" inputType="number" name= "DriversLicense" onChange={this.onChange} placeholderText=""/>
            <Input className='' labelText="ResidentialAddress" labelContent="Residential Address" inputType="text" name= "ResidentialAddress" onChange={this.onChange} placeholderText=""/>
            <Select className='colSpan2' labelText= "How long have you lived at Address?" name="AddYears" onChange={this.onChange} options={this.stateOptions.AddYears}/>
            <Select className='colSpan1' name= "AddMonths" labelText="" onChange={this.onChange} options={this.stateOptions.AddMonths}/>
            
            <Input labelText="AnnualSalary" labelContent="Your Annaul Salary Before Tax" inputType="number" name= "AnnaulSalary" onChange={this.onChange} placeholderText=""/>
            
            <FooterContent />
            <div>
                <div submit-form-data="">
                    <div className="clear snrButton">
                        <button type="button" className="application-submit-button" onClick={this.onClick}>SAVE &amp; CONTINUE</button>
                    </div>
                </div>
            </div>
        </form>
        </div>;
    }
}

export default AboutYou;