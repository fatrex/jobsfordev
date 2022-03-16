import Image from 'next/image'
import TextLogo from '../images/logo.svg';

function Logo () {
  return (
    <Image 
      src={TextLogo}
      width="150px" 
    />
  )
}

export default Logo