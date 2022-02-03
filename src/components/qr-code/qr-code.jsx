import { Fragment } from "react"
import { QRCode } from "react-qrcode-logo";
import derivLogo from '../../assets/deriv-logo.webp'
import classes from './qr-code.module.scss'
import { baseContact, generateVCard, getVCardFormat, generateImage } from "../utilities/util";

const QrCode = (props) => {

    const qrConfig = {
        ecLevel: 'M',
        enableCORS: false,
        quietZone: 10,
        size: 200,
        bgColor: "#000000",
        fgColor: "#52A7BC",
        logoImage: derivLogo,
        logoOpacity: 1,
        qrStyle: "dots",
        eyeRadius: [
            { inner: [0, 0, 0, 0], outer: [50, 0, 0, 0] },
            { inner: [0, 0, 0, 0], outer: [0, 50, 0, 0] },
            { inner: [0, 0, 0, 0], outer: [0, 0, 0, 50] }
        ]
    }

    const { title, firstName, lastName, contact, email, company, position, address, website } = { ...baseContact, ...props.vCard }


    const downloadHandler = () => {
        generateImage('react-qrcode-logo',firstName||'contact')
    }
    const createVCard = () => {
        generateVCard(props.vCard)
    }

    const vCard = getVCardFormat(props.vCard)

    return (
        <Fragment>
            <section className={classes.card}>
                <div className={classes.qr_code}>
                    <QRCode value={vCard} {...qrConfig} logoWidth={180} logoHeight={40} />
                </div>
                <div className={classes.container}>
                    <h2>{title} {firstName} {lastName}</h2>
                    <p className={classes.title}>{position}</p>
                    <div className={classes.action}>
                        <button onClick={downloadHandler}>Download as Image</button>
                        <button onClick={createVCard}>Download as .vcf</button>
                    </div>
                </div>
            </section>
        </Fragment>
    )
}

export default QrCode;