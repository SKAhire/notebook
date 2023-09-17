import React from 'react'

export const Alert = (props) => {
    return (
        <div>
            <div class="alert alert-info alert-dismissible fade show" role="alert">
                <strong>Holy guacamole!</strong> {props.message}
                <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
            </div>
        </div>
    )
}