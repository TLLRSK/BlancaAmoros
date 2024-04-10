import {AboutListItem} from "../../../components";

const AboutList = ({pageData,listName}) => {
    const listItemsArr = pageData.acf.about_lists[0][`${listName}_list`][`${listName}_list_item`];
    return (
    <ul className="about__list">
        {listItemsArr.map((el,i) => {
            return <AboutListItem key={i} el={el} listName={listName}/>
        })}
    </ul>
    )
}

export default AboutList;