import React, { useState } from 'react';
import { Form, Input } from 'reactstrap';
import NavButton from './NavButton';

export default function NavSearchForm() {
    const [searchTerm, setSearchTerm] = useState('');
    const [input, setInput] = useState('');

    const handleChange = e => {
        setInput(e.target.value);
    }

    const handleSubmit = e => {
        e.preventDefault();
        setSearchTerm(input);
    }

    return (
        <Form onSubmit={handleSubmit} inline>
            <Input type="text" placeholder='Add a location...' value={input} onChange={handleChange} />
            <NavButton>Add</NavButton>
        </Form>
    )
}
