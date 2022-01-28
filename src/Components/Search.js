
import { Form, Button, FormControl } from 'react-bootstrap';
import React from 'react';

export default function Search() {
    return (
        
             <Form className="d-flex">
               <FormControl
          type="search"
          placeholder="Search"
          className="me-2"
          aria-label="Search"
        />
         <Button variant="outline-success">Search</Button>
        </Form>
        
    )
}
