import React, { Component } from 'react';
//import styled from 'styled-components'

class EditUser extends Component {
    render() {
        return (
            <div>
                <h1>UPDATE USER PAGE</h1>
                <form>
                    Update User Name:
    <input type="text" name="firstname" value=""></input>
                    Update Password:
    <input type="password" name="password" value=""></input>
                    <input type="submit" value="Submit"></input>
                </form>
            </div>
        );
    }
}

export default EditUser;