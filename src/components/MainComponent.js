import React, { Component } from 'react';
import { NavBar } from './NavComponent';
import { Footer } from './FooterComponent';
import { Home } from './HomePage';
import { Shopping } from './ShoppingPage';
import { Switch, Route, Redirect, withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import { addItem } from '../redux/ActionCreators';

const mapStateToProps = state => {
    return{
        shopping: state.shopping
    }
}

const mapDispatchToProps = (dispatch) => ({
    addItem: (itemId, image, title, price) => dispatch(addItem(itemId, image, title, price))
})

class Main extends Component {
    render() {

        const ShoppingPage = () => {
            return(
                <Shopping items={this.props.shopping} addItem={this.props.addItem} />
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