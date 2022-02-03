import * as React from 'react';
import { Formik } from 'formik';
import { StyledForm, StyledField, Error } from "../../styles/form-styles";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser, faSuitcase, faEnvelope, faMobileAlt, faAddressBook } from '@fortawesome/free-solid-svg-icons';


import * as Yup from 'yup';

const SignupSchema = Yup.object().shape({
    firstName: Yup.string()
        .min(3, 'Too Short Name!')
        .max(25, 'Too Long Name!')
        .required('First Name is Required'),
    lastName: Yup.string()
        .min(2, 'Too Short Name!')
        .max(50, 'Too Long Name!')
        .required('Last Name is Required'),
    jobTitle: Yup.string().required('Please specify your job Title'),
    email: Yup.string().email('Invalid email').required('Email is required'),
    mobile: Yup.string().matches(/^\+?((-|\s)*[0-9])*$/, 'Phone number is not valid').required('Required'),
    location: Yup.string().required('Please specify your job location')
});
export const DataForm = ({onVCardGenerate}) => {
    const initialValues = { firstName: "", lastName: "", jobTitle: "", email: "", mobile: "", location: "" };
    
    const vcardSubmitHandler = (value:VcardProps)=>{
        onVCardGenerate(value)
    }
    
    return (
        <div>
            <h1>Enter your details</h1>
            <Formik
                initialValues={initialValues}
                onSubmit={(values, actions) => {
                    console.log({ values, actions });
                    vcardSubmitHandler(values)
                    // alert(JSON.stringify(values, null, 2));
                    // actions.setSubmitting(false);
                }}
                validationSchema={SignupSchema}
            >
                {({ errors, touched, handleSubmit, values, handleChange, handleBlur, setFieldValue, isSubmitting, resetForm }) => (
                    <StyledForm onSubmit={handleSubmit}>

                        <StyledField>
                            <input
                                id="firstName"
                                name='firstName'
                                data-lpignore="true"
                                width={100}
                                type="text"
                                onChange={handleChange}
                                onBlur={handleBlur}
                                value={values.firstName}


                            />
                            <label htmlFor={'firstName'}>{'First Name'}</label>
                            <div className="icon">
                                <FontAwesomeIcon icon={faUser} size={'1x'} />
                            </div>
                            <div className="clear" onClick={() => { setFieldValue('firstName', '') }}>
                                clear
                            </div>
                            {errors.firstName && touched.firstName ? (
                                <Error>{errors.firstName}</Error>
                            ) : null}
                        </StyledField>


                        <StyledField>
                            <input
                                id="lastName"
                                name='lastName'
                                data-lpignore="true"
                                width={100}
                                type="text"
                                onChange={handleChange}
                                onBlur={handleBlur}
                                value={values.lastName}


                            />
                            <label htmlFor={'lastName'}>{'Last Name'}</label>
                            <div className="icon">
                                <FontAwesomeIcon icon={faUser} size={'1x'} />
                            </div>
                            <div className="clear" onClick={() => { setFieldValue('lastName', '') }}>
                                clear
                            </div>
                            {errors.lastName && touched.lastName ? (
                                <Error>{errors.lastName}</Error>
                            ) : null}
                        </StyledField>

                        <StyledField>
                            <input
                                id="jobTitle"
                                name='jobTitle'
                                data-lpignore="true"
                                width={100}
                                type="text"
                                onChange={handleChange}
                                onBlur={handleBlur}
                                value={values.jobTitle}


                            />
                            <label htmlFor={'jobTitle'}>{'Job Title'}</label>
                            <div className="icon">
                                <FontAwesomeIcon icon={faSuitcase} size={'1x'} />
                            </div>
                            <div className="clear" onClick={() => { setFieldValue('jobTitle', '') }}>
                                clear
                            </div>
                            {errors.jobTitle && touched.jobTitle ? (
                                <Error>{errors.jobTitle}</Error>
                            ) : null}
                        </StyledField>

                        <StyledField>
                            <input
                                id="email"
                                name='email'
                                data-lpignore="true"
                                width={100}
                                type="text"
                                onChange={handleChange}
                                onBlur={handleBlur}
                                value={values.email}


                            />
                            <label htmlFor={'email'}>{'Email'}</label>
                            <div className="icon">
                                <FontAwesomeIcon icon={faEnvelope} size={'1x'} />
                            </div>
                            <div className="clear" onClick={() => { setFieldValue('email', '') }}>
                                clear
                            </div>
                            {errors.email && touched.email ? (
                                <Error>{errors.email}</Error>
                            ) : null}
                        </StyledField>
                        <StyledField>
                            <input
                                id="mobile"
                                name='mobile'
                                data-lpignore="true"
                                width={100}
                                type="text"
                                onChange={handleChange}
                                onBlur={handleBlur}
                                value={values.mobile}


                            />
                            <label htmlFor={'mobile'}>{'Mobile'}</label>
                            <div className="icon">
                                <FontAwesomeIcon icon={faMobileAlt} size={'1x'} />
                            </div>
                            <div className="clear" onClick={() => { setFieldValue('mobile', '') }}>
                                clear
                            </div>
                            {errors.mobile && touched.mobile ? (
                                <Error>{errors.mobile}</Error>
                            ) : null}
                        </StyledField>







                        <StyledField>
                            <input
                                id="location"
                                name='location'
                                data-lpignore="true"
                                width={100}
                                type="text"
                                onChange={handleChange}
                                onBlur={handleBlur}
                                value={values.location}


                            />
                            <label htmlFor={'location'}>{'Location'}</label>
                            <div className="icon">
                                <FontAwesomeIcon icon={faAddressBook} size={'1x'} />
                            </div>
                            <div className="clear" onClick={() => { setFieldValue('location', '') }}>
                                clear
                            </div>
                            {errors.location && touched.location ? (
                                <Error>{errors.location}</Error>
                            ) : null}
                        </StyledField>


                        <div className="button-field">
                            <button className={isSubmitting ? "active" : "inactive"}
                                type="submit">
                                Submit
                            </button>
                            <button
                                className={isSubmitting ? "active" : "inactive"}
                                type="reset" onClick={resetForm}>
                                Clear
                            </button>
                        </div>


                    </StyledForm>
                )}
            </Formik>
        </div>

    );
};

export default DataForm;