import Header from '../../components/ExercicioPropsHeader'
import Styles from '../pagina4/page.module.css'
import Footer from '../../components/ExercicioPropsFooter'


function Exercicio() {

    return (
        <>
            <div>

                <Header Emoji='🌼' Empresa='Group Two'></Header>

                <div className={Styles.boxtexts}>
                    <h1 id={Styles.text}>Os integrantes do grupo 2 são amigaveis,<br /> parceiros, estão sempre dispostos a ajudar e felizes </h1>
                    <h1 id={Styles.textprops}>Props</h1>
                </div>

                <div className={Styles.boxfoot}>
                    <Footer Desenvolvido="Desenvolvido por"></Footer>
                    <div className={Styles.boxnome}>
                        <Footer Nome1="Lucas"></Footer>
                        <Footer Email1="lucas@gmail.com"></Footer>
                    </div>
                    <div className={Styles.boxnome}>
                        <Footer Nome2="Maria"></Footer>
                        <Footer Email2="maria@gmail.com"></Footer>
                    </div>
                    <div className={Styles.boxnome}>
                        <Footer Nome3="Victoria"></Footer>
                        <Footer Email3="vic@gmail.com"></Footer>
                    </div>
                    <div className={Styles.boxnome}>
                        <Footer Nome4="Helena"></Footer>
                        <Footer Email4="helena@gmail.com"></Footer>
                    </div>
                    <div className={Styles.boxnome}>
                        <Footer Nome5="Manuela"></Footer>
                        <Footer Email5="manu@gmail.com"></Footer>
                    </div>

                    <div className={Styles.boxnome}>
                        <Footer Nome6="Ana"></Footer>
                        <Footer Email6="ana@gmail.com"></Footer>
                    </div>
                </div>

            </div>
        </>
    )
}

export default Exercicio