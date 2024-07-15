import styles from "./Loading.module.css"

import alterraArms from "@/../Public/Imgs/Loading/alterraArms2.png"
import spin1 from "@/../Public/Imgs/Loading/alterraSpin1.png"
import spin2 from "@/../Public/Imgs/Loading/alterraSpin2.png"

export function Loading() {
   return (
      <>
         <div className="fixed sm:gap-7 gap-5 bg-theme_dark top-0 left-0 flex items-center w-full h-full select-none z-50">
            <div className="w-1/2 flex justify-end">
               <img className="w-[100px] sm:w-[180px]" src={alterraArms} />
            </div>
            <div className={`${styles.loadingSpin} w-1/2 h-full flex justify-start items-center`}>
               <img className="w-[80px] sm:w-[150px]" src={spin2} />
               <img className="w-[80px] sm:w-[150px]" src={spin1} />
            </div>
         </div>
      </>
   )
}
