import React from 'react'
import './Signup.css'
function Signup() {
    return (
        <>
           

            <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div class="modal-dialog modal-dialog-centered">
                    <div class="modal-content">
                        <div class="main1 d-flex">
                            <div className='firstDiv '> <p> Lets learn,share & inspire each other with our passion for computer engineering. Sign up now </p></div>
                            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div className='d-flex container mx-2' >
                            <div className='d-flex flex-column'>
                                <h2 className='my-4'>Create Account</h2>
                                <form>
                                    <div className='d-flex'>
                                        <input type="text" placeholder='   First Name' />
                                        <input type="text" placeholder='   last Name' />
                                    </div>
                                    <div className='inputChange'>
                                        <div>
                                            <input type="text" placeholder='   Email' />
                                        </div>
                                        <div>
                                            <input type="text" placeholder='   Password' />
                                        </div>
                                        <div>
                                            <input type="text" placeholder='   Confirm Password' />
                                        </div>
                                    </div>
                                    <div className='my-3 '>
                                        <button type="button" class="button">Create Account</button>
                                    </div>
                                    <div className='fb_goog_Box'>
                                        <img className='me-3' src="./facebook (1).svg" alt="img" />
                                        <p >Sign up with Facebook</p>
                                    </div>
                                    <div className='fb_goog_Box '>
                                        <  img className='me-3' src="./google.svg" alt="google" />
                                        <p >Sign up with Google</p>
                                    </div>
                                </form>
                            </div>
                            <div className=''>
                                <div className='lastDiv'>
                                    <h6 className='my-4 pt-2 ms-5 ps-5'> Already have an account? <a href="">Sign In</a>  </h6>
                                    <img width={'320px'} height={'320px'} src="./img.png" alt="img" />
                                    <p className='ms-5 ps-4'>By signing up, you agree to pur Terms and Condition, Privacy Policy</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>

    )
}

export default Signup