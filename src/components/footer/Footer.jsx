import { LinkComponent } from "../../js/index";

export default function Footer(props) {
    const { footerData, location, isLoading } = props;

    return (
        <>
            {footerData && (
                <footer className={`footer${isLoading ? "" : " ldd"}`}>
                
                    <LinkComponent to={footerData.suscribe?.suscribe_url} target="_blank" className={`link link--tr-swapping ${location.pathname != "/" ? "not-visible" : ""}`}>
                        <p className="footer__suscribe-text swapping--frst-child">{footerData.suscribe?.suscribe_text}</p>
                        <p className="footer__suscribe-text--on-hover swapping--scnd-child">{footerData.suscribe?.suscribe_text}</p>
                    </LinkComponent>

                    <div className="footer__row">
                        <div className="footer__copyright">
                            <p>©2024</p>
                            <p>BLANCA AMOROS</p>
                        </div>

                        <div className="footer__location">
                            <p>{footerData.location?.city}</p>
                            <p>{footerData.location?.country}</p>
                        </div>

                        <div className="footer__contact">
                            <LinkComponent to={`mailto:${footerData.contact?.email}`} target="_blank" className="link--underline link--tr-swapping">
                                <p className="swapping--frst-child">EMAIL</p>
                                <p className="swapping--scnd-child">EMAIL</p>
                            </LinkComponent>

                            <LinkComponent to={footerData.contact?.ig} target="_blank" className="link--underline link--tr-swapping">
                                <p className="swapping--frst-child">IG</p>
                                <p className="swapping--scnd-child">IG</p>
                            </LinkComponent>
                        </div>
                        
                    </div>
                </footer>
            )}
        </>
    );
}
