import { Localization } from './Localization';
import React from 'react';
import './_footer.scss';

const Footer: React.FC = () => {
    return (
        <footer>
            {' '}
            <div className="container">
                <div className="row">
                    <div className="col-sm-6 col-md-3 item">
                        <h3>{Localization.contact}</h3>
                        <ul>
                            <li>{Localization.cityCountry}</li>
                            <li>
                                <a href={`mailto:${Localization.email}`}>{Localization.email}</a>
                            </li>
                            <li>
                                <a href={`tel:${Localization.fbPhoneNumber}`}>{Localization.fbPhoneNumber}</a>
                            </li>
                            <li>
                                <a href={`tel:${Localization.printPhoneNumber}`}>{Localization.printPhoneNumber}</a>
                            </li>
                        </ul>
                    </div>
                    <div className="col-sm-6 col-md-3 item">
                        <h3>{Localization.theBasics}</h3>
                        <ul>
                            <li>{Localization.community}</li>
                            <li>{Localization.discussions}</li>
                            <li>{Localization.guidelines}</li>
                            <li>{Localization.jobs}</li>
                        </ul>
                    </div>
                    <div className="col-md-6 item text">
                        <h3>{Localization.companyName}</h3>
                        <p>{Localization.promotionalText}</p>
                    </div>
                    <div className="col item social">
                        <a href="#">
                            <i className="icon ion-social-facebook"></i>
                        </a>
                        <a href="#">
                            <i className="icon ion-social-twitter"></i>
                        </a>
                        <a href="#">
                            <i className="icon ion-social-snapchat"></i>
                        </a>
                        <a href="#">
                            <i className="icon ion-social-instagram"></i>
                        </a>
                    </div>
                </div>
                <p className="copyright">
                    {Localization.copyright}
                    {Localization.companyName}
                </p>
            </div>
        </footer>
    );
};

export default Footer;
