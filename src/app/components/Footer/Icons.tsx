import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebook, faFacebookF, faInstagram, faTwitter } from "@fortawesome/free-brands-svg-icons";
import React from 'react'
import { faPinterest } from "@fortawesome/free-brands-svg-icons/faPinterest";

const Icons = () => {
  return (
    <div className='text-white flex gap-4'>
      <a href="#">
          <FontAwesomeIcon icon={faFacebook}/>
      </a>
      <a href="#">
          <FontAwesomeIcon icon={faTwitter}/>
      </a>
      <a href="#">
          <FontAwesomeIcon icon={faPinterest}/>
      </a>
      <a href="#">
          <FontAwesomeIcon icon={faInstagram}/>
      </a>
    </div>
  )
}

export default Icons
