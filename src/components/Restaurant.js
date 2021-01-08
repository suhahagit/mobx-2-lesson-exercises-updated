import React, { Component } from 'react';
import { observer, inject } from 'mobx-react'
import ResInput from './ResInput';
import Reservation from './Reservation';

class Restaurant extends Component{
    addRes = () => {
        let name = this.props.GeneralStore.name
        let num = this.props.GeneralStore.numPeople
        this.props.RestaurantStore.addRes(name, num)
    }
    render () {
        return (
            <div>
                <span>You have {this.props.RestaurantStore.openTables} open tables</span>
                {/* Add in # of people in restaurant */}
                <div>Number of people in restaurant {this.props.RestaurantStore.restPopulation}</div>
                {/* Add in # of completed tables with id "completedTables*/}
                <div id = 'completedTables'>Number of compelted tables is {this.props.RestaurantStore.completedTables}</div>
                <ResInput/>
                <button id="addRes" onClick = {this.addRes}>Add Reservation</button>
                {/* Make the Add Reservation button work */}
                <div className = "reservations">
                {/* Map reservation data to Reservation components here */}
                {this.props.RestaurantStore.reservations.map((r, i) => <Reservation res = {r} key = {i}/>)}
                </div>
            </div>
        )
    }
}

export default inject("GeneralStore", "RestaurantStore")(observer(Restaurant))