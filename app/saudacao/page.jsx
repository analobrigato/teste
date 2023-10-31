import styles from "./saudacao.module.css";

const aHora = new Date().getHours();
const aMinuto = new Date().getMinutes();

let minhaSaudacao = "";

if (aHora >= 6 && aHora < 12) {
    minhaSaudacao = "Bom dia!";
} else if (aHora >= 12 && aHora < 18) {
    minhaSaudacao = "Boa tarde!";
} else if (aHora >= 18 && aHora <= 23) {
    minhaSaudacao = "Boa noite!";
} else if (aHora > 0 && aHora < 6) {
    minhaSaudacao =  "Vai Dormir!!!";
}

function Saudacao() {
    return (
        <>
        <div className={styles.configuracao}>
            <div className={styles.hora}>{aHora}:{aMinuto}</div>
            <div className={styles.textoSaudacao}>{minhaSaudacao}</div>
        </div>
        </>
    );
}

export default Saudacao;