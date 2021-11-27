import React from 'react'

export default function Alert(props) {
    return (
        props.alert && <div className={`alert alert-${props.alert.alertType} alert-dismissible fade show`} role="alert">
            <strong>{props.alert.msg}</strong> 
        </div>
    )
}
