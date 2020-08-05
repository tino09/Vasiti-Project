import React from 'react';
import {TextField} from '@material-ui/core';

export default function Upload() {
    return (
        <div className="upload">
            <TextField id="outlined-basic" label="Product Name" variant="outlined" />
            <br/>
            <TextField id="outlined-basic" label="Product Descr" variant="outlined" />
            <br/>
            <TextField id="outlined-basic" label="Product Variety" variant="outlined" />
            <br/>
            <p>Date Uploaded</p><TextField id="outlined-basic" type="date" label="" variant="outlined" />
            <br/>
            <p>Date Deleted</p><TextField id="outlined-basic" type="date" label="" variant="outlined" />
            <br/>
            <TextField id="outlined-basic" label="Size" variant="outlined" />

        </div>
    )
}
