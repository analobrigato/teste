import Rodape from "@/components/Footer";
import styles from "./page.module.css"
import Cabecalho from "@/components/Header";

function Pagina3() {

    return (
           <div>
            <Cabecalho/>
            <div className={styles.div1}>
                 
            <div className={styles.div2}>
            <p>O canal foi criado em 2013, com vídeos ambientados em Florianópolis, Santa Catarina. <br></br>
            Em maio de 2017, já com todo o sucesso garantido, Gabie e Thalita saíram em turnê, <br></br>
             intitulada "Tudo Bacana", que contava a história da amizade entre as duas e sobre  <br></br>
             o surgimento do "Depois das Onze". O tour foi encerrado em novembro de 2018. <br></br>
             No dia 4 de maio de 2022, foi anunciado o  fim do canal. O comunicado foi feito no <br></br>
              próprio canal da dupla, que conta com mais de 3 milhões de inscritos. <br></br>
                 A dupla que ficou conhecida nas redes sociais pela amizade, as brincadeiras, o humor <br></br>
                  e as piadas que faziam, anunciou que o canal será descontinuado.
                   “A verdade é que  <br></br>
                   a gente tá pensando há muito tempo sobre isso”,  disse Gabie Fernandes. “A galera <br></br>
                    vai falar que as duas não estão 
                   na mesma vibe”, brinca Thalita Meneghim </p>
            <div className={styles.div3}>
            <p>"Depois das Onze" é um canal no YouTube criado pelas <br></br>
                influenciadoras Gabie Fernandes e Thalita Meneghim. <br></br>
                A dupla fala sobre assuntos do cotidiano, mas de forma bem <br></br>
                 humorada e com direito a desafios e tudo o que <br></br>
                 se tem direito.</p>
                 <img src="https://static1.purebreak.com.br/articles/3/85/63/3/@/320020--depois-das-onze-separamos-14-videos-p-amp_article_image-1.jpg" width="150" height="150"></img>
           <br></br>
            </div>
            </div>
            </div>

            <Rodape/>

        </div>
    )
}

export default Pagina3;