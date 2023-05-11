import { Screen } from "../../components/Screen/styles"
import { Container, Line, UText } from "./styles"
import { motion } from "framer-motion"
import { fadeIn } from "../../variants"


export const Trajectory = () =>{
    return (
        <Screen id="Trajectory">
            <span className="h1">Trajectory</span>
            <Container>
                <UText>
                    <motion.span variants={fadeIn('right', 0.3)} 
                    initial="hidden" 
                    whileInView={'show'} 
                    viewport={{once: false, amount: 0.7}}
                    className="nineteen">
                        Started studying computer engeneering
                        at Universidade de Brasília
                    </motion.span>
                    <span className="twenty">
                        Harvard cs50 and Database course
                    </span>
                </UText>

                <Line>
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                    
                </Line>
                <div className="year">
                    <span>2019</span>
                    <span>2020</span>
                    <span>2021</span>
                    <span>2022</span>
                </div>

                <UText>
                    <span className="twenty-one">
                        Learned Web-Development and started
                        working as a full Stack Developer at 
                        Struct-EJ
                    </span>
                    <span className="twenty-two">
                        Started my first internship =)
                    </span>
                </UText>
            </Container>
        </Screen>
    )
}