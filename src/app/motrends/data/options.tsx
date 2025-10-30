import { FaGoogle, FaTiktok, FaLinkedin, FaFacebook } from "react-icons/fa";


export const industries = [
    'All Industries',
    'Tech',
    'Health',
    'Science',
    'Food',
    'Entertainment',
    'Fashion',
    'Education',
    'Business',
]

export const dataSources = [
    { name: 'Google Trends', value: 'google', icon: <FaGoogle /> },
    { name: 'Tiktok', value: 'tk', icon: <FaTiktok /> },
    { name: 'Facebook', value: 'fb', icon: <FaFacebook /> },
    { name: 'LinkedIn', value: 'li', icon: <FaLinkedin /> }
]

export const timeframe = [
    'Short-term',
    'Seasonal',
    'Mid-term',
    'Long-term'
]

export const trendType = [
    'current',
    'predict'
]

//keywords: '',
//      trendType: 'current',
//    timeframe: '',
//  customNotes: '',
