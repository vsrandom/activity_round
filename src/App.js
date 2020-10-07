import React from 'react';
import classes from "./App.module.css"
import HousePrice from './components/HousePrice/HousePrice'
import Plan from './components/Plan/Plan'
import Order from './components/Order/Order'
import Modal from './components/Modal/Modal'
import Aux from './components/Aux/Aux'

class App extends React.Component{

  state = {
    selectedPlan : "plan_300_400",
    plansData : {
        plan_100_200 : {
            qualified_20 : {
                leads : 20,
                per_qualified_lead : 69,
                platform_fee : 299,
                package_price : 1679,
                value : "Start Your Trial"
            },
            
            qualified_40 : {
              leads : 40,
              per_qualified_lead : 67,
              platform_fee : 599,
              package_price : 3279,
              value : "Start Your Trial"
            },

            qualified_60 : {
              leads : 60,
              per_qualified_lead : 65,
              platform_fee : 699,
              package_price : 4599,
              value : "Start Your Trial"
            },

            qualified_80 : {
              leads : 80,
              per_qualified_lead : 63,
              platform_fee : 799,
              package_price : 5839,
              value : "Start Your Trial"
            },

            enterprise : {
              leads : null,
              per_qualified_lead : null,
              platform_fee : null,
              package_price : null,
              value : "Get in Touch"
            }
        },

        plan_200_300 : {
          qualified_20 : {
              leads : 20,
              per_qualified_lead : 79,
              platform_fee : 299,
              package_price : 1879,
              value : "Start Your Trial"
          },
          
          qualified_40 : {
            leads : 40,
            per_qualified_lead : 77,
            platform_fee : 599,
            package_price : 3679,
            value : "Start Your Trial"
          },

          qualified_60 : {
            leads : 60,
            per_qualified_lead : 74,
            platform_fee : 699,
            package_price : 5139,
            value : "Start Your Trial"
          },

          qualified_80 : {
            leads : 80,
            per_qualified_lead : 72,
            platform_fee : 799,
            package_price : 6559,
            value : "Start Your Trial"
          },
          enterprise : {
            leads : null,
            per_qualified_lead : null,
            platform_fee : null,
            package_price : null,
            value : "Get in Touch"
          }
      },

      plan_300_400 : {
        qualified_20 : {
            leads : 20,
            per_qualified_lead : 99,
            platform_fee : 299,
            package_price : 2279,
            value : "Start Your Trial"
        },
        
        qualified_40 : {
          leads : 40,
          per_qualified_lead : 96,
          platform_fee : 599,
          package_price : 4439,
          value : "Start Your Trial"
        },

        qualified_60 : {
          leads : 60,
          per_qualified_lead : 93,
          platform_fee : 699,
          package_price : 6279,
          value : "Start Your Trial"
        },

        qualified_80 : {
          leads : 80,
          per_qualified_lead : 90,
          platform_fee : 799,
          package_price : 7999,
          value : "Start Your Trial"
        },
        enterprise : {
          leads : null,
          per_qualified_lead : null,
          platform_fee : null,
          package_price : null,
          value : "Get in Touch"
        }
      },

      plan_400_500 : {
          qualified_20 : {
              leads : 20,
              per_qualified_lead : 109,
              platform_fee : 299,
              package_price : 2479,
              value : "Start Your Trial"
          },
          
          qualified_40 : {
            leads : 40,
            per_qualified_lead : 106,
            platform_fee : 599,
            package_price : 4839,
            value : "Start Your Trial"
          },

          qualified_60 : {
            leads : 60,
            per_qualified_lead : 102,
            platform_fee : 699,
            package_price : 6819,
            value : "Start Your Trial"
          },

          qualified_80 : {
            leads : 80,
            per_qualified_lead : 99,
            platform_fee : 799,
            package_price : 8719,
            value : "Start Your Trial"
          },
          enterprise : {
            leads : null,
            per_qualified_lead : null,
            platform_fee : null,
            package_price : null,
            value : "Get in Touch"
          }
        },

        plan_500 : {
          qualified_20 : {
              leads : 20,
              per_qualified_lead : 129,
              platform_fee : 299,
              package_price : 2879,
              value : "Start Your Trial"
          },
          
          qualified_40 : {
            leads : 40,
            per_qualified_lead : 125,
            platform_fee : 599,
            package_price : 5599,
            value : "Start Your Trial"
          },

          qualified_60 : {
            leads : 60,
            per_qualified_lead : 121,
            platform_fee : 699,
            package_price : 7959,
            value : "Start Your Trial"
          },

          qualified_80 : {
            leads : 80,
            per_qualified_lead : 117,
            platform_fee : 799,
            package_price : 10159,
            value : "Start Your Trial"
          },

          enterprise : {
            leads : null,
            per_qualified_lead : null,
            platform_fee : null,
            package_price : null,
            value : "Get in Touch"
          }
        }
      },
      showModal : false,
      housePrices : ["plan_100_200", "plan_200_300", "plan_300_400", "plan_400_500", "plan_500"],
      selectedPlanLeads : null 
  } 

  selectedHomePlan = (el)=>{
    // console.log(el);
    this.setState({selectedPlan : el});
  }

  showModalHandler = (leads)=>{
    const showModal = this.state.showModal;
    if(showModal == false){
    this.setState({selectedPlanLeads: leads,showModal : !showModal})
    }
  }

  cancelModalHandler = ()=>{
    this.setState({showModal:false});
  }

  render(){

    let housePrices = this.state.housePrices.map(val=>{
      let c = [classes.homeValueContainerContent]
      if(val == this.state.selectedPlan) c.push(classes.highLightedHome)
      return <div onClick = {()=>this.selectedHomePlan(val)} key = {val} className = {c.join(" ")}><HousePrice value = {val}/></div>
    })
    let selectedPlan = this.state.plansData[this.state.selectedPlan]
    let selectedPlanList = Object.keys(selectedPlan).map(obj=>{
      return <Plan key = {Math.random()} clicked = {()=>this.showModalHandler(selectedPlan[obj].leads)} 
      value = {selectedPlan[obj].value} leads = {selectedPlan[obj].leads}
       per_qualified_lead = {selectedPlan[obj].per_qualified_lead}
       platform_fee = {selectedPlan[obj].platform_fee} package_price = {selectedPlan[obj].package_price} />
    })

    return (
      <Aux>
        <div>
        <Modal show = {this.state.showModal} clicked = {this.cancelModalHandler}>
                    <Order planLeads = {this.state.selectedPlanLeads} />                
        </Modal>
        </div>      
        <div className = {classes.container}>
          <div className = {classes.header}></div>

          <div className = {classes.homeValueContainer}>
              {housePrices}
          </div>

          <div className = {classes.planListContainer}>
            {selectedPlanList}
          </div>

          <div className = {classes.footer}></div>
        </div>
      </Aux>
    )
  }
}

export default App;
