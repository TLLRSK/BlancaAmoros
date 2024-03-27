import { LinkComponent } from "../../js/index";
import {useNavCollapsible, useNav} from "../../js/index";

export default function Nav(props) {
    
    const {location, postsData, changeRoute} = props;

    const {toggleCollapsible, showWork} = useNavCollapsible(location);
    
    const {visibleNav} = useNav(location);

    return <>
        <nav className={`nav${!visibleNav ? "--hddn" : ""}`}>
            <div className="nav__bar">

                <div className="nav__title">
                    <LinkComponent to="/" className={`link--nav link--line-tr-underline`} changeRoute={changeRoute}>Blanca Amorós</LinkComponent>
                </div>
                
                <ul className="nav__grid">

                    <li className="nav__grid-item">
                        <LinkComponent 
                            to="/about"
                            className={`link--nav link--line-tr-strikethrough ${location.pathname == "/about" ? "active" : ""}`}
                            changeRoute={changeRoute}>
                                About
                        </LinkComponent>
                    </li>

                    <li className="nav__grid-item">
                        <LinkComponent 
                            to="/contact"
                            className={`link--nav link--line-tr-strikethrough ${location.pathname == "/contact" ? "active" : ""}`}
                            changeRoute={changeRoute}>
                                Contact
                        </LinkComponent>
                    </li>

                    <li className="nav__grid-item">
                            <input
                                type="checkbox" 
                                id="work" 
                                className="nav__toggler--work"
                                checked={showWork}
                                onChange={toggleCollapsible}>
                            </input>
                            <label htmlFor="work" className={`link--nav link--line-tr-`}>Work</label>
                        </li>
        
                    <li className="nav__grid-item">
                        <a href="https://www.blancaamoros.com/shop/" target="_blank" rel="noreferrer" className={`link link--nav link--line-tr-strikethrough`}>Shop</a>
                    </li>
                </ul>
            </div>

            <div className={`nav__collapsible ${showWork ? 'visible' : ''}`}>

                {postsData && postsData.length > 0 && (

                    <ul className="nav__collapsible-list">
                        {postsData.map((post, i) => (

                            <li key={i}>
                                <LinkComponent to={`/work/${post.slug}`} className={"link--work-list-item link--tr-swapping"} changeRoute={changeRoute}>
                                <div className="nav__collapsible-list-item swapping--frst-child">
                                    <p className="nav__collapsible-list-item-index">{i < 10 ? "0" + (i + 1) : (i + 1)}</p>
                                    <p className="nav__collapsible-list-item-year">{post.acf.serie_cover.description.year}</p>
                                    <p className="nav__collapsible-list-item-title">{post.acf.serie_cover.description.title}</p>
                                </div>

                                <div className="nav__collapsible-list-item swapping--scnd-child">
                                    <p className="nav__collapsible-list-item-index">{i < 10 ? "0" + (i + 1) : (i + 1)}</p>
                                    <p className="nav__collapsible-list-item-year">{post.acf.serie_cover.description.year}</p>
                                    <p className="nav__collapsible-list-item-title">{post.acf.serie_cover.description.title}</p>
                                </div>
                            </LinkComponent>
                            </li>
                        ))}
                    </ul>
                )}

                <div className="nav__bottom-bar">
                    <button className="nav__close-btn"  aria-label="Close" onClick={toggleCollapsible}>
                        <span className="nav__close-btn-stick"></span>
                        <span className="nav__close-btn-stick"></span>
                    </button>
                </div>
            </div>
            
        </nav>
    </>
}