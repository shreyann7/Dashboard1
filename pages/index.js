import Head from 'next/head'
import Image from 'next/image'
import { Inter } from '@next/font/google'
import styles from '../styles/Home.module.css'
import Sidebar from '../src/components/Sidebar/Sidebar'
import MainDash from '../src/components/MainDash/MainDash'
import RightBar from '../src/components/RightBar/RightBar'
const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <div className="Home">
      <div className="HomeGlass">
       <Sidebar/>
       <MainDash/>
       <RightBar/>
       </div>
    </div>
  )
}

