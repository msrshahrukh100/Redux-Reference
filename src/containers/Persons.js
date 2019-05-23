import React, { Component } from 'react';
import { connect } from 'react-redux';

import Person from '../components/Person/Person';
import AddPerson from '../components/AddPerson/AddPerson';
import * as actionTypes from '../store/actions/actionTypes';
import * as actionCreators from '../store/actions/index'

class Persons extends Component {
    render () {
      console.log(this.props);
        return (
            <div>
              <p onClick={this.props.updateLoading}>
              {this.props.loading ? "Its loading" : "Not Loading  "}
              </p>
                <AddPerson personAdded={this.props.onAddedPerson} />
                {this.props.prs.map(person => (
                    <Person
                        key={person.id}
                        name={person.name}
                        age={person.age}
                        clicked={() => this.props.onRemovedPerson(person.id)}/>
                ))}
            </div>
        );
    }
}

const mapStateToProps = state => {
    return {
        prs: state.preducer.persons,
        loading: state.lreducer.loading
    };
};

const mapDispatchToProps = dispatch => {
    return {
        onAddedPerson: (name, age) => dispatch(actionCreators.addPerson(name, age)),
        onRemovedPerson: (id) => dispatch(actionCreators.removePerson(id)),
        updateLoading: () => dispatch(actionCreators.updateLoading())
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(Persons);
