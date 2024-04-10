const AboutShowListItem = ({el}) => {
    return <li className="about__list-item--show">

        <div className="about__list-item-date--show">
            <p>{el.shows_list_item.date.month}</p>
            <p>{el.shows_list_item.date.year}</p>
        </div>
        
        <div className="about__list-item-description--show">
            <p>{el.shows_list_item.show_details.show_title}</p>
            <p>/{el.shows_list_item.show_details.location.show_room}</p>
        </div>

        <div className="about__list-item-location"> 
            
            <p>{el.shows_list_item.show_details.location.city},</p>
            <p>{el.shows_list_item.show_details.location.country}</p>
        </div>
    </li>
  }

  export default AboutShowListItem;