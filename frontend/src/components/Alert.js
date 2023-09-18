import React from 'react'

export const Alert = (props) => {
    return (
        <div>
            <div className="alert alert-info alert-dismissible fade show" role="alert">
                <strong>Holy guacamole!</strong> {props.message}
                <button type="button" className="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
            </div>
        </div>
    )
}