import Image from 'next/image'

// LOGO
const Logo: React.FC = () => {
    return (
        <Image
            src="https://framerusercontent.com/images/SN1KknlqtnfMhuO28O7dyyGrNOk.png"
            alt="MoFlo Logo"
            width={40}
            height={40}
            className='rounded-md'
        />
    )
}

export default Logo;
