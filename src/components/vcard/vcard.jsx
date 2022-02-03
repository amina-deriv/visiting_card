import { Fragment, useState } from "react";
import classes from './vcard.module.scss'
import derivBigLogo from '../../assets/deriv-logo.webp';
import derivSmalLogo from '../../assets/logo_small.png';
import { generateImage } from '../utilities/util'

const VCard = (props) => {

    const { title, firstName, lastName, contact, email, company, position, address, website } = { ...props.user }

    const downloadHandler = () => {
        generateImage('business-card_front',`${firstName}_front`||'contact')
        generateImage('business-card_back',`${firstName}_back`||'contact')
    }


    return (
        <Fragment>
            <link rel="stylesheet" href=" https://stackpath.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css" />
            <section className={classes.layout}>
                <div className={classes.box}>
                    <div className={classes.front}>
                        <div className={classes.center}>
                            <img src={derivBigLogo} />
                            <p>Make trading accessible to anyone, anywhere</p>
                        </div>
                    </div>
                    <div className={classes.back}>
                        <div className={classes.row}>
                            <img src={derivSmalLogo} />
                            <div className={classes.title}>
                                <h1>{title} {firstName} {lastName}</h1>
                                <h3>{position}</h3>
                            </div>
                        </div>
                        <div className={classes.row}>
                            <span>
                                <a href={`tel:${contact}`}>
                                    {contact}
                                </a>
                            </span>
                            <span>
                                <a href={`mailto:${email}`}>
                                    {email}
                                </a>
                            </span>
                            <span>{address}</span>
                        </div>
                    </div>
                </div>
                <div className={classes.action}>
                    <button onClick={downloadHandler}>Download as Image</button>
                </div>
            </section>
            <section>
                <div className={classes.download_front}>
                    <div className={classes.box} id="business-card_front">
                        <div className={classes.back}>
                            <div className={classes.row}>
                                <img src={derivSmalLogo} />
                                <div className={classes.title}>
                                    <h1>{title} {firstName} {lastName}</h1>
                                    <h3>{position}</h3>
                                </div>
                            </div>
                            <div className={classes.row}>
                                <span>
                                    <a href={`tel:${contact}`}>
                                        {contact}
                                    </a>
                                </span>
                                <span>
                                    <a href={`mailto:${email}`}>
                                        {email}
                                    </a>
                                </span>
                                <span>{address}</span>
                            </div>
                        </div>
                    </div>
                </div>
                <div className={classes.download_back}>
                    <div className={classes.box} id="business-card_back">
                        <div className={classes.front}>
                            <div className={classes.center}>
                                <img src={derivBigLogo} />
                                <p>Make trading accessible to anyone, anywhere</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </Fragment>
    )
}


export default VCard;


