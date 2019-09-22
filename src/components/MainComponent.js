import React, { Component } from 'react';
import { NavBar } from './NavComponent';
import { Footer } from './FooterComponent';
import { Home } from './HomePage';
import { Shopping } from './ShoppingPage';
import { Switch, Route, Redirect, withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import { addItem, editItem } from '../redux/ActionCreators';

const mapStateToProps = state => {
    return{
        shopping: state.shopping
    }
}

const mapDispatchToProps = (dispatch) => ({
    addItem: (values) => dispatch(addItem(values)),
    editItem: (values) => dispatch(editItem(values))
})

class Main extends Component {
    render() {

        const ShoppingPage = () => {
            return(
                <Shopping items={this.props.shopping} addItem={this.props.addItem} editItem={this.props.editItem} />
            );
        }

        return(
            <div>
                <NavBar />
                <Switch>
                    <Route path="/home" component={Home} />
                    <Route path="/shopping" component={ShoppingPage} />
                    <Redirect to="/home" />
                </Switch>
                <Footer />
            </div>
        );
    }
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Main));