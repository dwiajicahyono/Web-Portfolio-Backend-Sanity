import React from 'react';
import { BsTwitter, BsInstagram} from 'react-icons/bs';
import { FaFacebookF } from 'react-icons/fa';

const SocialMedia = () => {
  return (
    <div className='app__social'>
    <div>
    <a href='https://www.instagram.com/dwiajic/'>
    <BsInstagram/>
    </a>
    </div>
    <div>
    <a href='https://www.facebook.com/Dwiaji.id/?_rdc=1&_rdr'>
    <FaFacebookF/>
    </a>
    </div>
    <div>
    <a href='https://twitter.com/dwiaji_c'>
        <BsTwitter/>
        </a>
    </div>
    </div>
  )
}

export default SocialMedia