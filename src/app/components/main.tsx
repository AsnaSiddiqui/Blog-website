import Link from "next/link"

export default function Main(){
    return(
        <div className="header">
            <h1 className="name ">Layover</h1>
            <ul className="page">
                <Link href ="/">
                <li>Home</li>
                </Link>
                <Link href="/about">
                 <li>About</li>
                </Link>
               <Link href ="/contact"> 
               <li>Contact</li>
               </Link>

            </ul>
        </div>
    )
}