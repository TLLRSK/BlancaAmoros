const AboutListItem = ({el,listName}) => {
    return <li className="about__list-item">
        <div className="about__list-item-date">
            <p>{el[`${listName}_list_item`]?.year}</p>
        </div>
    
        <div className="about__list-item-description">
            <p>{el[`${listName}_list_item`]?.description}</p>
        </div>

        <div className="about__list-item-location ta--right">
            <p>{el[`${listName}_list_item`]?.location.city},</p>
            <p>{el[`${listName}_list_item`]?.location.country}</p>
        </div>
    </li>    
}

export default AboutListItem;