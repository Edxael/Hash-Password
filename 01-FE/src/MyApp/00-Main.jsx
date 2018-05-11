// ---[ Import ]------------------------------------------------------
import React from 'react'
import { HashRouter, Route, Link, Switch } from 'react-router-dom'
import './css/style.css'
import { client } from './EndPoint/EndPoint'
import { observer } from 'mobx-react'



// ---[ Material_UI ]-------------------------------------------------
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import AppBar from 'material-ui/AppBar'
import Drawer from 'material-ui/Drawer'
import MenuItem from 'material-ui/MenuItem'
import FlatButton from 'material-ui/FlatButton'



// ---[ Importing Pages ]---------------------------------------------
import LogIn from './01-LogIn'
import DashBoard from './02-DashB'
import Videos from './03-Videos'
import Page99 from './99-page'
 


// ---[ Class Component ]----------------------------------------------
export default class extends React.Component{
    state = { open: false, loged: false }

    render(){

        return(
            <div>
                <ApolloProvider client={client}>
                    <MuiThemeProvider>
                        <HashRouter>
                            <div >

                                <AppBar title="Rewards" onLeftIconButtonClick={ () => { this.setState({ open: true }) } } iconElementRight={<FlatButton label="Log-Out" onClick={ () => { MS.loged = false } } />} />

                                { MS.loged ?
                                        <Drawer docked={false} width={200} open={this.state.open} onRequestChange={(open) => this.setState({open})} >
                                            <MenuItem primaryText="My Profile" containerElement={<Link to="/2" />} onClick={ () => { this.setState({ open: false }) } } />
                                            <MenuItem primaryText="Update Password" containerElement={<Link to="/4" />} onClick={ () => { this.setState({ open: false }) } } />
                                            <MenuItem primaryText="Points Histo" containerElement={<Link to="/5" />} onClick={ () => { this.setState({ open: false }) } } />
                                            <MenuItem primaryText="Redeem Histo" containerElement={<Link to="/10" />} onClick={ () => { this.setState({ open: false }) } } />
                                            <MenuItem primaryText="Member Benefits" containerElement={<Link to="/6" />} onClick={ () => { this.setState({ open: false }) } } />
                                            <MenuItem primaryText="Redeem Points" containerElement={<Link to="/7" />} onClick={ () => { this.setState({ open: false }) } } />
                                            <MenuItem primaryText="Terms n Cond" containerElement={<Link to="/1" />} onClick={ () => { this.setState({ open: false }) } } />
                                        </Drawer>
                                    :
                                        <Drawer docked={false} width={200} open={this.state.open} onRequestChange={(open) => this.setState({open})} >
                                            <MenuItem primaryText="Please LogIn"  onClick={ () => { this.setState({ open: false }) } } />
                                        </Drawer>
                                }
                        
                                <hr/>
                        
                                <Route exact path="/" component={LogIn}/>
                                <Route path="/1" component={Terms}/>
                                <Route path="/2" component={MyProfile}/>
                                <Route path="/3" component={UpdateProfile}/>
                                <Route path="/4" component={UpdatePassword}/>
                                <Route path="/5" component={PointsHisto}/>
                                <Route path="/6" component={MyBenefits}/>
                                <Route path="/7" component={RedeemPoints}/>
                                <Route path="/8" component={Review}/>
                                <Route path="/9" component={ConfScreen}/>
                                <Route path="/10" component={RedeemHisto}/>
        
                                <br/>
                                <hr/>
                                <div>By: Edmundo</div>
                        
                            </div>
                        </HashRouter>
                    </MuiThemeProvider>
                </ApolloProvider>
            </div>
        )
    }
}