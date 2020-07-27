import React, { Component } from 'react';
import AppBar from '@material-ui/core/AppBar';
import { ThemeProvider as MuiThemeProvider } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';

export class FormPersonalDetails extends Component {
    continue = e => {
        e.preventDefault();
        this.props.nextStep();
    };

    back = e => {
        e.preventDefault();
        this.props.prevStep();
    };

    render() {
        const { values, handleChange } = this.props;
        return (
            <MuiThemeProvider>
                <>
                    <AppBar title="Enter Personal Details" />
                    <TextField
                        placeholder="Enter Your Occupation"
                        label="Occupation"
                        onChange={handleChange('occupation')}
                        defaultValue={values.occupation}
                    />
                    <br />
                    <TextField
                        placeholder="Enter City"
                        label="City"
                        onChange={handleChange('city')}
                        defaultValue={values.city}
                    />
                    <br />
                    <TextField
                        placeholder="Enter Your Bio"
                        label="Bio"
                        onChange={handleChange('bio')}
                        defaultValue={values.bio}
                    />
                    <br />
                    <Button
                        color="primary"
                        variant="contained"
                        onClick={this.continue}
                    >Continue</Button>
                    <Button  
                        variant="contained"
                        onClick={this.back}
                    >Back</Button>
                </>
            </MuiThemeProvider>
        );
    }
}

export default FormPersonalDetails;