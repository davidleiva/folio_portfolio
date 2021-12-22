import React, { useState } from 'react'
import { Link } from 'gatsby'

const HeyRecruiter = () => {
    const [folded, setFolded] = useState(false)
    return (
        <div
            className="p-3 shadow"
            style={{
                position: 'fixed',
                bottom: '20px',
                right: '20px',
                textAlign: 'right',
                backgroundColor: 'rgba(255,255,255,0.85)',
                zIndex: '2147483647',
                borderRadius: '8px',
            }}
        >
            {folded === false ? (
                <>
                    <button
                        type="button"
                        className="btn-close"
                        aria-label="Close"
                        style={{
                            position: 'absolute',
                            left: '8px',
                            top: '8px',
                        }}
                        onClick={() => setFolded(true)}
                    ></button>
                    <h3>
                        <span role="img" aria-label="Hey recruiter!">
                            🙋🏽‍♂️
                        </span>{' '}
                        Hey recruiter!
                    </h3>
                    <ul className="mb-0">
                        <li
                            style={{
                                display: 'inline-block',
                            }}
                        >
                            <a
                                href="https://www.linkedin.com/in/davidleiva-fe/"
                                target="_blank"
                                rel="noreferrer"
                                className="btn btn-sm d-flex align-items-center mx-1 mb-2 rounded-pill Mya text-white"
                                style={{
                                    background: '#0e76a8',
                                    lineHeight: '16px',
                                }}
                            >
                                <i className="align-middle icon icon-logo-linkedin me-1"></i>
                                <span>Linkedin profile</span>
                            </a>
                        </li>
                        <li
                            style={{
                                display: 'inline-block',
                            }}
                        >
                            <Link
                                to="https://drive.google.com/file/d/1J6KjhY-_8f2ThcR7bDjV_e52QU1VfJMM/view?usp=sharing"
                                target="_blank"
                                download
                            >
                                <button
                                    type="submit"
                                    className="btn btn-sm d-flex align-items-center btn-outline-primary mx-1 mb-2 rounded-pill MyButton"
                                    style={{ lineHeight: '16px' }}
                                >
                                    <i className="icon icon-ic_file_download_48px me-1"></i>
                                    <span>Download CV</span>
                                </button>
                            </Link>
                        </li>
                        <br />
                        <li
                            style={{
                                display: 'inline-block',
                            }}
                        >
                            <a
                                href="tel:+34653071080"
                                className="btn btn-sm d-flex align-items-center btn-outline-primary mx-1 rounded-pill Mya"
                                style={{ lineHeight: '16px' }}
                            >
                                <i className="align-middle icon icon-phone-call me-1"></i>
                                <span className="d-none d-md-inline">
                                    +34653071080
                                </span>
                            </a>
                        </li>
                        <li
                            style={{
                                display: 'inline-block',
                            }}
                        >
                            <a
                                target="_blank"
                                href="mailto:davidleivaherrero@gmail.com"
                                className="btn btn-sm d-flex align-items-center btn-outline-primary mx-1 rounded-pill MyButton"
                                style={{ lineHeight: '16px' }}
                            >
                                <i className="align-middle icon icon-email-84 me-1 d-none d-inline-md"></i>
                                {/* <span className="d-none d-inline-md">hello@imdavidleiva.com</span> */}
                                <span className="d-none d-md-inline">
                                    davidleivaherrero@gmail.com
                                </span>

                                <i className="align-middle icon icon-email-84 d-inline d-none-md"></i>
                            </a>
                        </li>
                    </ul>
                </>
            ) : (
                <button
                    className="bg-transparent border-0"
                    style={{
                        lineHeight: '0px',
                        transform: 'rotate(270deg)',
                    }}
                    onClick={() => setFolded(false)}
                >
                    <i
                        className="icon icon-minimal-right"
                        style={{ opacity: 0.5 }}
                    ></i>
                </button>
            )}
        </div>
    )
}

export default HeyRecruiter
