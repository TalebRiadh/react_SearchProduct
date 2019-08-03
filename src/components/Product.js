import React from 'react'


function Product(props) {

    return (
        <tr>
            <th scope="row">{props.product.id}</th>
            <td>{props.product.name}</td>
            <td>{props.product.price}</td>
        </tr>

    )

}



export default Product