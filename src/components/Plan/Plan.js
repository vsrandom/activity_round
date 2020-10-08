import React from "react"
import classes from "./Plan.module.css"
import Aux from '../Aux/Aux'

const plan = (props)=>{
    if(props.leads == null)
    {
        return (
            <div className = {classes.container}>
                <div className = {classes.popular} style = {{background : props.leads == 40 ? 'orangered' : 'white'}}>
                    <div>Most Popular!</div>
                </div>
                <div className = {classes.leads}>
                    <div>Enterprise </div>
                </div>
                <div className = {classes.message}>
                    <div>
                    Want more than 80 qualified leads each month ?
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
            <Aux>             
            <div className = {classes.container} style = {{background : props.leads == 40 ? 'rgb(245, 244, 244)' : 'white'}}>
                <div className = {classes.popular} style = {{background : props.leads == 40 ? 'orangered' : 'white'}}>
                    <div>Most Popular!</div>
                </div>
                <div className = {classes.leads}>
                    <div>Qualified {props.leads} </div>
                </div>

                <div className = {classes.per_qualified_lead}>
                    <div style = {{'font-size': '2.5rem'}}>${props.per_qualified_lead}</div>
                    <div> Per Qualified Lead</div>
                </div>
                    

                <div className = {classes.qualified_leads}>
                    <div>Qualified Leads Per Month</div>
                    <div style = {{'font-size': '1.3rem'}}> ${props.leads} </div>
                </div>

                <div className = {classes.platform_fee}>
                    <div>Platform Fee Per Month</div>
                    <div style = {{'font-size': '1.3rem'}}> ${props.platform_fee}</div>
                </div>

                <div className = {classes.package_price}>
                    <div> ${props.package_price}/mo </div>
                </div>
                <div onClick = {props.clicked} style = {{'cursor' : 'pointer'}} className = {props.leads == 40 ? classes.popular : classes.start}>
                    <div>{props.value}</div>
                </div>
            </div>
            </Aux>
        )
    }
}

export default plan