import React from "react/addons";

class ToolTip extends React.Component {
    render() {
        return <div>
            <div
                uid="field.uid"
                error-message="message"
                type="field.type"
                help-msg="helpMsg"
                className="errorMsgContainer">
                <div
                    className="errorFields tooltip greenToolTip"
                    style={{
                    top: '11.5px',
                    left: '490px',
                    opacity: 1}}>
                    <span className="error-arrow" style="top: 13px;">
                        <i className="icon"></i>
                    </span>
                    <span className="message">Including your Driver's Licence will help us process your application faster.</span>
                </div>
            </div>
        </div>;
    }
}

export default ToolTip;