import React from "react"
import classes from "./Plan.module.css"

const plan = (props)=>{
    if(props.leads == null)
    {
        return (
            <div className = {classes.container}>
                <div className = {classes.leads}>
                    <div>Enterprise </div>
                </div>
                <div className = {classes.message}>
                    <div>
                    Want more than 80 classified leads each month ?
                    </div>
                </div>
                <div onClick = {props.clicked} className = {classes.start}>
                    <div>{props.value}</div>
                </div>
            </div>
        )
    }
    else{
        return (
            <div className = {classes.container}>
                <div className = {classes.leads}>
                    <div>Qualified {props.leads} </div>
                </div>

                <div className = {classes.per_qualified_lead}>
                    <div>{props.per_qualified_lead}</div>
                    <div> Per Qualified Lead</div>
                </div>
                    

                <div className = {classes.qualified_leads}>
                    <div>Qualified Leads Per Month</div>
                    <div> {props.leads} </div>
                </div>

                <div className = {classes.platform_fee}>
                    <div>Platform Fee Per Month</div>
                    <div> {props.platform_fee}</div>
                </div>

                <div className = {classes.package_price}>
                    <div> ${props.package_price}/mo </div>
                </div>
                <div onClick = {props.clicked} className = {classes.start}>
                    <div>{props.value}</div>
                </div>
            </div>
        )
    }
}

export default plan