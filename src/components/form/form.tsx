import * as React from 'react';
import { Formik } from 'formik';
import { InputWrapper, Wrapper, Label, Input, Error } from "../../styles/InputWrapper";
import * as Yup from 'yup';
interface VcardProps {
    firstName: string;
    lastName: string;
    email: string;
    contact: string,
    position: string,
    address: string
}

const SignupSchema = Yup.object().shape({
    firstName: Yup.string()
        .min(3, 'Too Short!')
        .max(25, 'Too Long!')
        .required('Required'),
    lastName: Yup.string()
        .min(2, 'Too Short!')
        .max(50, 'Too Long!')
        .required('Required'),
    email: Yup.string().email('Invalid email').required('Required'),
    contact: Yup.string().matches(/^\+?((-|\s)*[0-9])*$/, 'Phone number is not valid').required('Required')
});
export const DataForm: React.FC<{}> = () => {
    const initialValues: VcardProps = { firstName: "", lastName: "", contact: "", email: "", position: "", address: "" };
    return (
        <Wrapper>
            <div>
                <h1>Enter your details</h1>
                <Formik
                    initialValues={initialValues}
                    onSubmit={(values, actions) => {
                        console.log({ values, actions });
                        alert(JSON.stringify(values, null, 2));
                        actions.setSubmitting(false);
                    }}
                    validationSchema={SignupSchema}
                >
                    {({ errors, touched, handleSubmit, values, handleChange, handleBlur, isSubmitting }) => (
                        <form onSubmit={handleSubmit}>
                            <InputWrapper>
                                <Label>First Name</Label>
                                <Input
                                    data-lpignore="true"
                                    width={100}
                                    type="text"
                                    name="firstName"
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                    value={values.firstName}
                                />

                            </InputWrapper>
                            {errors.firstName && touched.firstName ? (
                                <Error>{errors.firstName}</Error>
                            ) : null}
                            <InputWrapper>
                                <Label>Last Name</Label>
                                <Input
                                    data-lpignore="true"
                                    width={100}
                                    type="text"
                                    name="lastName"
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                    value={values.lastName}
                                />
                            </InputWrapper>
                            {errors.lastName && touched.lastName ? (
                                <Error>{errors.lastName}</Error>
                            ) : null}

                            <InputWrapper>
                                <Label>Phone Number</Label>
                                <Input
                                    data-lpignore="true"
                                    width={100}
                                    type="text"
                                    name="contact"
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                    value={values.contact}
                                />
                            </InputWrapper>
                            {errors.contact && touched.contact ? (
                                <Error>{errors.contact}</Error>
                            ) : null}

                            <InputWrapper>
                                <Label>Email</Label>
                                <Input
                                    data-lpignore="true"
                                    width={100}
                                    type="text"
                                    name="email"
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                    value={values.email}
                                />
                            </InputWrapper>
                            {errors.email && touched.email ? (
                                <Error>{errors.email}</Error>
                            ) : null}
                            <InputWrapper>
                                <Label>Position</Label>
                                <Input
                                    data-lpignore="true"
                                    width={100}
                                    type="text"
                                    name="position"
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                    value={values.position}
                                />
                            </InputWrapper>
                            <InputWrapper>
                                <Label>Address</Label>
                                <Input
                                    data-lpignore="true"
                                    width={100}
                                    type="text"
                                    name="address"
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                    value={values.address}
                                />
                            </InputWrapper>
                            {errors.address && touched.address ? (
                                <Error>{errors.address}</Error>
                            ) : null}

                            <button type="submit" disabled={isSubmitting}>Submit </button>
                        </form>
                    )}
                </Formik>
            </div>
        </Wrapper>

    );
};

export default DataForm;