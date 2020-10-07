import React from "react"
import classes from "./Order.module.css"
class Order extends React.Component{

    state = {
        name : null,
        email : null,
        phone : null,
        noLeads : 0,
        totalLeads : 0,
        noAgents : 0,
        crmValue : "CRM-A",
        leadSources : {
            zillow : false,
            realtor : false,
            ylopo : false,
            others : false,
        },
        hearAboutUs : {
            google : false,
            facebook : false,
            email : false,
            friends : false,
            closers : false
        }
    }

    crmHandler = (event)=>{
        this.setState({crmValue : event.target.value})
    }
    nameChangeHandler =(event)=>{
        this.setState({name : event.target.value});
    }

    emailChangeHandler =(event)=>{
        this.setState({email : event.target.value});
    }

    phoneChangeHandler=(event)=>{
        this.setState({phone : event.target.value});
    }

    submitHandler = ()=>{
        alert(JSON.stringify(this.state))
    }

    leadsChangeHandler = (event)=>{
        this.setState({noLeads : event.target.value})
        // console.log(this.state.noLeads);
    }

    totalLeadsHandler = (event)=>{
        this.setState({totalLeads : event.target.value})
        // console.log(this.state.noLeads);
    }

    noAgentsChangeHandler = (event)=>{
        this.setState({noAgents : event.target.value})
        // console.log(this.state.noLeads);
    }

    sourcesHandler = (event)=>{
        console.log("helal")
        let currObj = {...this.state.leadSources}
        for(let keys in currObj)
        {
            if(keys==event.target.name) 
            {
                currObj[keys] = !currObj[keys]
            }
            else currObj[keys] = false;
        }

        this.setState({leadSources : currObj})
    }

    hearHandler = (event)=>{
        console.log("helal")
        let currObj = {...this.state.hearAboutUs}
        for(let keys in currObj)
        {
            if(keys==event.target.name) 
            {
                currObj[keys] = !currObj[keys]
            }
            else currObj[keys] = false;
        }

        this.setState({hearAboutUs : currObj})
    }

    render(){
        let selectedPlan = "Enterprise"
        if(this.props.planLeads) selectedPlan = "Qualified " + this.props.planLeads
        return (
            <div className = {classes.container}>
                <div style = {{'textAlign' :'center'}} className = {classes.text} >
                    Get Started With Squad Voice
                </div>
                <div className = {classes.planSelected}>
                    <div className = {classes.text}>Plan Selected : </div> 
                    <div style = {{'margin-left' : '15px'}}>{selectedPlan}</div>
                </div>
                <div>
                    <div className = {classes.text}>Name</div>
                    <div><input className = {classes.inputs} type = "text" value = {this.state.name} 
                        onChange = {this.nameChangeHandler} />
                    </div>
                </div>
                <div className = {classes.emPhone}>
                    <div style={{width: "45%"}}>
                        <div className = {classes.text}>E-mail Address</div>
                        <div><input className = {classes.inputs} type = "text" value = {this.state.email} 
                            onChange = {this.emailChangeHandler} />
                        </div>
                    </div>

                    <div style={{width: "45%"}}>
                        <div className = {classes.text}>Phone No.</div>
                        <div><input className = {classes.inputs} type = "text" value = {this.state.phone} 
                            onChange = {this.phoneChangeHandler} />
                        </div>
                    </div>
                </div>

                <div className = {classes.leads}>
                    <div style={{width: "45%"}}>
                        <div className = {classes.text}>No of Leads you generate in a month</div>
                        <div><input className = {classes.inputs} type = "number" min="0" max="100" 
                            onChange = {this.leadsChangeHandler} placeholder = "-"/>
                        </div>
                    </div>

                    <div style={{width: "45%"}}>
                        <div className = {classes.text}>Total Leads in your CRM</div>
                        <div><input className = {classes.inputs} placeholder = "-" type = "number" min="0" 
                        max="100" value = {this.state.totalLeads} 
                            onChange = {this.totalLeadsHandler} />
                        </div>
                    </div>
                </div>

                <div className = {classes.crmAgents}>
                    <div style={{width: "45%"}}>
                        <div className = {classes.text}>Which CRM do you use ?</div>
                        <div>
                            <select className = {classes.inputs} value = {this.state.crmValue} onChange = {this.crmHandler} >
                                <option>CRM-A</option>
                                <option>CRM-B</option>
                                <option>CRM-C</option>
                            </select>
                        </div>
                    </div>

                    <div style={{width: "45%"}}>
                        <div className = {classes.text}>No of Agents </div>
                        <div><input className = {classes.inputs} placeholder = "-" type = "number" min="0" max="100" value = {this.state.noAgents} 
                            onChange = {this.noAgentsChangeHandler} />
                        </div>
                    </div>
                </div>
                
                <div>
                    <div className = {classes.text}>
                        What are your biggest lead Sources ?
                    </div>
                    <div className = {classes.sources}>
                        <div>
                        <input name = "zillow" type="checkbox" checked = {this.state.leadSources.zillow} onChange = {this.sourcesHandler}
                        /> <label>Zillow</label>
                        </div>

                        <div>
                        <input type="checkbox" name = "realtor" checked = {this.state.leadSources.realtor} onChange = {this.sourcesHandler}
                        /> <label>Realtor</label>
                        </div>

                        <div>
                        <input type="checkbox" name = "ylopo" checked = {this.state.leadSources.ylopo} onChange = {this.sourcesHandler} 
                        /> <label>Ylopo</label>
                        </div>

                        <div>
                        <input type="checkbox" name = "others" checked = {this.state.leadSources.others} onChange = {this.sourcesHandler}
                        /> <label>Others</label>
                        </div>
                    </div>
                </div>

                <div>
                    <div className = {classes.text}>
                        How did you hear about us ?
                    </div>
                    <div className = {classes.sources}>
                        <div>
                        <input name = "google" type="checkbox" checked = {this.state.hearAboutUs.google} onChange = {this.hearHandler}
                        /> <label>Google</label>
                        </div>

                        <div>
                        <input name = "facebook" type="checkbox" checked = {this.state.hearAboutUs.facebook} onChange = {this.hearHandler}
                        /> <label>Facebook</label>
                        </div>

                        <div>
                        <input name = "email" type="checkbox" checked = {this.state.hearAboutUs.email} onChange = {this.hearHandler} 
                        /> <label>Email</label>
                        </div>

                        <div>
                        <input name = "friends" type="checkbox" checked = {this.state.hearAboutUs.friends} onChange = {this.hearHandler}
                        /> <label>Friends</label>
                        </div>

                        <div>
                        <input name = "closers" type="checkbox" checked = {this.state.hearAboutUs.closers} onChange = {this.hearHandler}
                        /> <label>Real Closers</label>
                        </div>
                    </div>
                </div>

                <div >
                    <button onClick = {this.submitHandler} className = {classes.submit}>Submit</button>
                </div>

            </div>
        )
    }
}


export default Order