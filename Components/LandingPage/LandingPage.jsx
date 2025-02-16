import styles from "./LandingPage.module.css";
import { motion } from 'framer-motion';
function LandingPage(){
return <div className={styles.LandingPage}>
    
    <div className={`flex flex-col items-center text-center p-6 ${styles.desc}`}>
      <motion.h1
        className="text-6xl md:text-6xl font-extrabold text-gray-900"
        initial={{ opacity: 0, y: 50, scale: 0.8 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        transition={{ duration: 1, ease: 'easeOut' }}
      >
       
       VeriTrust: Ensuring <span className="text-blue-500">Transparency</span> & Authenticity
      </motion.h1>
      <motion.p
        className="text-lg md:text-3xl text-gray-600 mt-4"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.2, ease: 'easeOut', delay: 0.5 }}
      >
        "Empowering Consumers with Trustworthy Verification"
      </motion.p>

     <h1> This page is under development..</h1>
    </div>

</div>
}
export default LandingPage;