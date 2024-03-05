import React, { useState } from 'react';
import BookTableCSS from './BookTable.module.css'

const BookTable = () => {
    const [formData, setFormData] = useState({
        firstName: '',
        lastName: '',
        email: '',
        phoneNumber: '',
        selectedOption: '',
        message: ''
    });

    const [errors, setErrors] = useState({});
    const [showPopup, setShowPopup] = useState(false);
    
    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (validateForm()) {
            setShowPopup(true);
        }
    };

    const validateForm = () => {
        let valid = true;
        let errors = {};

        if (!formData.firstName.trim()) {
            errors.firstName = 'First name is required';
            valid = false;
        }

        if (!formData.lastName.trim()) {
            errors.lastName = 'Last name is required';
            valid = false;
        }

        if (!formData.email.trim()) {
            errors.email = 'Email is required';
            valid = false;
        } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
            errors.email = 'Email is invalid';
            valid = false;
        }

        if (!formData.phoneNumber.trim()) {
            errors.phoneNumber = 'Phone number is required';
            valid = false;
        }
        else if (!/^\d{9}$/.test(formData.phoneNumber)) {
            errors.phoneNumber = 'Phone number is invalid';
            valid = false;
        }

        if (!formData.selectedOption) {
            errors.selectedOption = 'Please select an option';
            valid = false;
        }

        if (!formData.message.trim()) {
            errors.message = 'Message is required';
            valid = false;
        }

        setErrors(errors);
        return valid;
    };

    return (
        <div className={BookTableCSS.reservations}>
            <h1 className={BookTableCSS.h1}>Reservations</h1>
            <form onSubmit={handleSubmit}>
                <div className="mb-3">
                    <label htmlFor="firstName" className="form-label">First Name</label>
                    <input type="text" className="form-control" id="firstName" name="firstName" value={formData.firstName} onChange={handleChange} />
                    {errors.firstName && <span className="text-danger">{errors.firstName}</span>}
                </div>
                <div className="mb-3">
                    <label htmlFor="lastName" className="form-label">Last Name</label>
                    <input type="text" className="form-control" id="lastName" name="lastName" value={formData.lastName} onChange={handleChange} />
                    {errors.lastName && <span className="text-danger">{errors.lastName}</span>}
                </div>
                <div className="mb-3">
                    <label htmlFor="email" className="form-label">Email</label>
                    <input type="email" className="form-control" id="email" name="email" value={formData.email} onChange={handleChange} />
                    {errors.email && <span className="text-danger">{errors.email}</span>}
                </div>
                <div className="mb-3">
                    <label htmlFor="phoneNumber" className="form-label">Phone Number</label>
                    <input type="tel" className="form-control" id="phoneNumber" name="phoneNumber" value={formData.phoneNumber} onChange={handleChange} />
                    {errors.phoneNumber && <span className="text-danger">{errors.phoneNumber}</span>}
                </div>
                <div className="mb-3">
                    <label htmlFor="selectedOption" className="form-label">Options</label>
                    <select className="form-select" id="selectedOption" name="selectedOption" value={formData.selectedOption} onChange={handleChange}>
                        <option value="">Select an option</option>
                        <option value="Option 1">Option 1</option>
                        <option value="Option 2">Option 2</option>
                        <option value="Option 3">Option 3</option>
                    </select>
                    {errors.selectedOption && <span className="text-danger">{errors.selectedOption}</span>}
                </div>
                <div className="mb-3">
                    <label htmlFor="message" className="form-label">Message</label>
                    <textarea className="form-control" id="message" name="message" value={formData.message} onChange={handleChange}></textarea>
                    {errors.message && <span className="text-danger">{errors.message}</span>}
                </div>
                <button type="submit" className={`btn ${BookTableCSS.btnPrimary}`}>Submit</button>
            </form>

            {showPopup && (
                <div className="modal" tabIndex="-1" role="dialog" style={{ display: 'block' }}>
                    <div className="modal-dialog" role="document">
                        <div className="modal-content">
                            <div className="modal-header">
                                <h5 className="modal-title">Success</h5>
                                <button type="button" className="btn-close" onClick={() => setShowPopup(false)} aria-label="Close"></button>
                            </div>
                            <div className="modal-body">
                                <p>Your form has been submitted successfully!</p>
                            </div>
                            <div className="modal-footer">
                                <button type="button" className={`btn ${BookTableCSS.btnPrimary}`} onClick={() => setShowPopup(false)}>Close</button>
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
};

export default BookTable;
