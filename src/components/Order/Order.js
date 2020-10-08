import React from "react"
import classes from "./Order.module.css"
class Order extends React.Component{

    state = {
        name : "",
        email : {
           value : "",
           valid  : false,
           clicked : false
        },
        phone : {
            value : "",
            valid  : false,
            clicked : false
        },
        noLeads : 0,
        totalLeads : 0,
        noAgents : 0,
        crmValue : "CRM-A",
        leadSources : {
            zillow : true,
            realtor : false,
            ylopo : false,
            others : false,
        },
        hearAboutUs : {
            google : true,
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
        let curremail = {...this.state.email}
        curremail.value = event.target.value;

        var re = /\S+@\S+\.\S+/;
        if(re.test(curremail.value)){
             curremail.valid = true;
        }
        else curremail.valid  = false;
        
        this.setState({email : curremail});
    }

    phoneChangeHandler=(event)=>{
        let currphone = {...this.state.phone}
        currphone.value = event.target.value;

        var re = /^[+]*[(]{0,1}[0-9]{1,4}[)]{0,1}[-\s\./0-9]*$/
        if(re.test(currphone.value) && currphone.value.length == 10) currphone.valid = true;
        else currphone.valid = false;
        
        this.setState({phone : currphone});
    }

    submitHandler = ()=>{
        if(this.state.name.length == 0) alert("Enter Valid Name !")
        else if(this.state.email.valid == false) alert("Enter Valid Email !")
        else if(this.state.phone.valid == false) alert ("Enter Valid Phone Number !")
        else alert(JSON.stringify(this.state))
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
        // console.log("helal")
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
        // console.log("helal")
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

    inputClicked = (event)=>{
        if(event.target.type == "email"){
            let currEmail = this.state.email;
            currEmail.clicked = true;
            this.setState({email : currEmail})
        }
        else{
            let currPhone = this.state.phone;
            currPhone.clicked = true;
            this.setState({phone : currPhone})
        }
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
                    <div className = {classes.text}>Name *</div>
                    <div><input placeholder = "Enter Your Name" className = {classes.inputs} type = "text" value = {this.state.name} 
                        onChange = {this.nameChangeHandler} />
                    </div>
                </div>
                <div className = {classes.emPhone}>
                    <div className = {classes.inputContainer}>
                        <div className = {classes.text}>E-mail Address *</div>
                        <div><input placeholder = "eg - abc@abc.com" onClick = {this.inputClicked} style = {{outline : this.state.email.clicked ? (this.state.email.valid ? '1.5px solid green' : '1.5px solid red') :null }} 
                            className = {classes.inputs} type = "email" value = {this.state.email.value} 
                            onChange = {this.emailChangeHandler} />
                        </div>
                    </div>

                    <div className = {classes.inputContainer}>
                        <div className = {classes.text}>Phone No. *</div>
                        <div><input placeholder = "+91-" onClick = {this.inputClicked} style = {{outline : this.state.phone.clicked ? (this.state.phone.valid ? '1.5px solid green' : '1.5px solid red') : null}} 
                            className = {classes.inputs} type = "text" value = {this.state.phone.value} 
                            onChange = {this.phoneChangeHandler} />
                        </div>
                    </div>
                </div>

                <div className = {classes.leads}>
                    <div className = {classes.inputContainer}>
                        <div className = {classes.text}>No. of Leads you generate in a month</div>
                        <div><input className = {classes.inputs} type = "number" min="0" max="100" 
                            onChange = {this.leadsChangeHandler} placeholder = "-" value = {this.state.noLeads}/>
                        </div>
                    </div>

                    <div className = {classes.inputContainer}>
                        <div className = {classes.text}>Total Leads in your CRM</div>
                        <div><input className = {classes.inputs} placeholder = "-" type = "number" min="0" 
                        max="100" value = {this.state.totalLeads} 
                            onChange = {this.totalLeadsHandler} />
                        </div>
                    </div>
                </div>

                <div className = {classes.crmAgents}>
                    <div className = {classes.inputContainer}>
                        <div className = {classes.text}>Which CRM do you use ?</div>
                        <div>
                            <select className = {classes.inputs} value = {this.state.crmValue} onChange = {this.crmHandler} >
                                <option>CRM-A</option>
                                <option>CRM-B</option>
                                <option>CRM-C</option>
                            </select>
                        </div>
                    </div>

                    <div className = {classes.inputContainer}>
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