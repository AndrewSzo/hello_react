import React from 'react';
import PropTypes from 'prop-types';
import './ListItem.css';

const ListItem = (props) => (
    <li className="listItem--wrapper">
        <img src={props.image} className="listItem--image" alt={props.name} />
        <div>
            <h2 className="listItem--name">{props.name}</h2>
            <p className="listItem--description">{props.description}</p>
            <a href={props.link} className='listItem--button'>Visit Twitter Page</a>
        </div>
    </li>
)

ListItem.propTypes = {
    image: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    description: PropTypes.string,
    twitterLink: PropTypes.string.isRequired,
}

ListItem.defaultProps = {
    description: 'To jest defaultowy tekst propsa'
}

export default ListItem;