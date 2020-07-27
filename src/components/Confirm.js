import React, { Component } from 'react';
import AppBar from '@material-ui/core/AppBar';
import { ThemeProvider as MuiThemeProvider } from '@material-ui/core/styles';
import { List, ListItem } from '@material-ui/core/';
import Button from '@material-ui/core/Button';

export class FormUserDetails extends Component {
    continue = e => {
        e.preventDefault();
        this.props.nextStep();
    };

    back = e => {
        e.preventDefault();
        this.props.prevStep();
    };

    render() {
        const { values: { firstName, lastName, email, occupation, city, bio } } = this.props;
        return (
            <MuiThemeProvider>
                <>
                    <AppBar title="Confirm User Data" />
                    <List>
                        <ListItem
                            primaryText='First Name'
                            secondaryText={firstName}
                        />
                        <ListItem
                            primaryText='Last Name'
                            secondaryText={lastName}
                        /><ListItem
                            primaryText='Email'
                            secondaryText={email}
                        /><ListItem
                            primaryText='Occupation'
                            secondaryText={occupation}
                        />
                        <ListItem
                            primaryText='City'
                            secondaryText={city}
                        />
                        <ListItem
                            primaryText='Bio'
                            secondaryText={bio}
                        />
                    </List>
                    <br />
                    <Button
                        color="primary"
                        variant="contained"
                        onClick={this.continue}
                    >Confirm & Continue</Button>
                    <Button
                        variant="contained"
                        onClick={this.back}
                    >Back</Button>
                </>
            </MuiThemeProvider>
        );
    }
}

export default FormUserDetails;