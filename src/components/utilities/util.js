import FileSaver from "file-saver";
import html2canvas from 'html2canvas';

export const baseContact = {
    title: undefined,
    lastName: undefined,
    contact: undefined,
    company: undefined,
    position: undefined,
    address: undefined,
    website: undefined
}

export function getVCardFormat(userData) {
    if (userData) {
        const { title, firstName, lastName, contact, email, company, position, address, website } = userData
        return "BEGIN:VCARD\r\nVERSION:3.0\r\n" +
            "N:" + lastName + ";" + firstName + "\r\n" +
            "URL:" + website + "\r\n" +
            "EMAIL;TYPE=work:" + email + "\r\n" +
            "TEL;TYPE=work:" + contact + "\r\n" +
            "ADR;TYPE=work:" + address + "\r\n" +
            "ORG:" + company + "\r\n" +
            "TITLE:" + title + "\r\n" +
            "END:VCARD"
    } else {
        return null
    }
}

export function generateVCard(userData) {
    const vCardstring = getVCardFormat(userData)
    const file = new Blob([vCardstring], { type: "text/vcard;charset=utf-8" })
    let a = document.createElement("a");
    a.download = `${userData.firstName}${userData.lastName}.vcf`;
    a.href = URL.createObjectURL(file);
    var reader = new FileReader();
    if (navigator.userAgent.match("CriOS")) {
        reader.onloadend = e => {
            window.open(reader.result);
        };
        reader.readAsDataURL(file);
    } else if (navigator.userAgent.match(/iPad|iPhone|Android/i)) {
        reader.onload = e => {
            window.location.href = reader.result;
        };
        reader.readAsDataURL(file);
    }
    else {
        FileSaver.saveAs(
            file,
            `${userData.firstName} ${userData.lastName}.vcf`,
            true
        );
    }
}

export function generateImage(canvasID,fileName='contact'){
    html2canvas(document.querySelector(`#${canvasID}`)).then((canvas) => {
        const link = document.createElement('a');
        link.download = `${fileName}.png`;
        link.href = canvas.toDataURL();
        link.click();
    })
}
