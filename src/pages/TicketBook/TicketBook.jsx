import React from 'react'
import { Redirect } from 'react-router-dom'

export default function TicketBook() {

    if (!localStorage.getItem('accessToken')) {
        return <Redirect to="/login" />
    }

    return (
        <div>Checkout</div>
    )
}
